import assert from "node:assert/strict";
import { describe, it } from "node:test";
import type { StreamChunk } from "@tanstack/ai/client";
import type { InferUIMessageChunk, UIMessage } from "ai";
import { createChat, getChatRuntime } from "@/registry/react/lib/create-chat";

const adapters = ["ai-sdk", "tanstack-ai"] as const;

const readChunks = async (
  reader: ReadableStreamDefaultReader<InferUIMessageChunk<UIMessage>>
): Promise<InferUIMessageChunk<UIMessage>[]> => {
  const result = await reader.read();

  return result.done ? [] : [result.value, ...(await readChunks(reader))];
};

const collectChunks = async (source: AsyncIterable<StreamChunk>) => {
  const chunks: StreamChunk[] = [];

  for await (const chunk of source) {
    chunks.push(chunk);
  }

  return chunks;
};

describe("createChat", () => {
  for (const adapter of adapters) {
    it(`uses the canonical message contract with ${adapter}`, () => {
      const chat = createChat({ adapter })
        .user("First question", { id: "user-first" })
        .assistant("First answer", { id: "assistant-first" })
        .user("Second question");

      assert.deepEqual(chat.get(2), [
        { content: "First question", id: "user-first", role: "user" },
        {
          content: "First answer",
          id: "assistant-first",
          role: "assistant",
        },
      ]);
      assert.deepEqual(chat.next(chat.get(2)), {
        content: "Second question",
        id: "create-chat-message-1",
        role: "user",
      });
      assert.equal(chat.next(chat.get()), null);
      assert.throws(() => chat.get(-1), {
        message: "count must be a non-negative integer.",
      });
    });

    it(`streams the scripted response with ${adapter}`, async () => {
      const chat = createChat({ adapter })
        .user("Question", { id: "user-scripted" })
        .assistant("First streamed answer", { id: "assistant-scripted" });
      const runtime = getChatRuntime(chat);

      if (runtime.adapter === "ai-sdk") {
        const message = runtime.toMessage(chat.get(1)[0]);
        assert.equal(message.id, "user-scripted");
        const stream = await runtime
          .createTransport({ delayMs: 0 })
          .sendMessages({
            abortSignal: undefined,
            chatId: "test-chat",
            messageId: undefined,
            messages: [message],
            trigger: "submit-message",
          });
        const chunks = await readChunks(stream.getReader());

        assert.deepEqual(chunks.at(0), {
          messageId: "assistant-scripted",
          type: "start",
        });
        assert.ok(
          chunks.some(
            (chunk) => chunk.type === "text-delta" && chunk.delta === "First "
          )
        );
        assert.deepEqual(chunks.at(-1), {
          finishReason: "stop",
          type: "finish",
        });
      } else {
        const message = runtime.toMessage(chat.get(1)[0]);
        assert.equal(message.id, "user-scripted");
        const chunks = await collectChunks(
          runtime.createTransport({ delayMs: 0 }).connect([message])
        );

        assert.equal(chunks.at(0)?.type, "RUN_STARTED");
        assert.ok(
          chunks.some(
            (chunk) =>
              chunk.type === "TEXT_MESSAGE_CONTENT" && chunk.delta === "First "
          )
        );
        assert.equal(chunks.at(-1)?.type, "RUN_FINISHED");
      }
    });

    it(`stops a pending response with ${adapter}`, async () => {
      const chat = createChat({ adapter })
        .user("Question")
        .assistant("Answer", { delayMs: 100 });
      const runtime = getChatRuntime(chat);
      const abortController = new AbortController();
      abortController.abort();

      if (runtime.adapter === "ai-sdk") {
        const stream = await runtime.createTransport().sendMessages({
          abortSignal: abortController.signal,
          chatId: "test-chat",
          messageId: undefined,
          messages: [runtime.toMessage(chat.get(1)[0])],
          trigger: "submit-message",
        });
        const result = await stream.getReader().read();

        assert.deepEqual(result.value, { type: "abort" });
      } else {
        const chunks = await collectChunks(
          runtime
            .createTransport()
            .connect(
              [runtime.toMessage(chat.get(1)[0])],
              undefined,
              abortController.signal
            )
        );

        assert.deepEqual(chunks, []);
      }
    });
  }

  it("rejects a scripted user turn without an assistant response", () => {
    const chat = createChat({ adapter: "ai-sdk" }).user("Question");
    const runtime = getChatRuntime(chat);

    if (runtime.adapter === "ai-sdk") {
      assert.throws(
        () =>
          runtime.createTransport().sendMessages({
            abortSignal: undefined,
            chatId: "test-chat",
            messageId: undefined,
            messages: [runtime.toMessage(chat.get(1)[0])],
            trigger: "submit-message",
          }),
        { message: "No simulated assistant response found." }
      );
    }
  });
});
