import assert from "node:assert/strict";
import { describe, it } from "node:test";
import type { StreamChunk } from "@tanstack/ai/client";
import type { InferUIMessageChunk, UIMessage } from "ai";
import { createChat, getChatRuntime } from "@/registry/react/lib/create-chat";

const adapters = ["ai-sdk", "tanstack-ai"] as const;

const readChunks = async (
  reader: ReadableStreamDefaultReader<InferUIMessageChunk<UIMessage>>
): Promise<InferUIMessageChunk<UIMessage>[]> => {
  const chunks: InferUIMessageChunk<UIMessage>[] = [];

  for (;;) {
    // biome-ignore lint/performance/noAwaitInLoops: A stream reader yields chunks sequentially.
    const result = await reader.read();

    if (result.done) {
      return chunks;
    }

    chunks.push(result.value);
  }
};

const collectChunks = async (source: AsyncIterable<StreamChunk>) => {
  const chunks: StreamChunk[] = [];

  for await (const chunk of source) {
    chunks.push(chunk);
  }

  return chunks;
};

interface NormalizedAssistantResponse {
  assistantId: string;
  completed: boolean;
  text: string;
}

const normalizeAiSdkChunks = (
  chunks: readonly InferUIMessageChunk<UIMessage>[]
): NormalizedAssistantResponse => {
  const start = chunks.find((chunk) => chunk.type === "start");

  if (!start) {
    throw new Error("Expected an AI SDK start chunk.");
  }

  if (start.messageId === undefined) {
    throw new Error("Expected an AI SDK start chunk with a messageId.");
  }

  return {
    assistantId: start.messageId,
    completed: chunks.some((chunk) => chunk.type === "finish"),
    text: chunks
      .filter((chunk) => chunk.type === "text-delta")
      .map((chunk) => chunk.delta)
      .join(""),
  };
};

const normalizeTanStackChunks = (
  chunks: readonly StreamChunk[]
): NormalizedAssistantResponse => {
  const start = chunks.find((chunk) => chunk.type === "TEXT_MESSAGE_START");

  if (!start) {
    throw new Error("Expected a TanStack text-message start chunk.");
  }

  return {
    assistantId: start.messageId,
    completed: chunks.some((chunk) => chunk.type === "RUN_FINISHED"),
    text: chunks
      .filter((chunk) => chunk.type === "TEXT_MESSAGE_CONTENT")
      .map((chunk) => chunk.delta)
      .join(""),
  };
};

const wait = (delayMs: number) =>
  new Promise<void>((resolve) => setTimeout(resolve, delayMs));

const completeWithin = async <VALUE>(
  promise: Promise<VALUE>,
  timeoutMs: number
) => {
  let timeout: ReturnType<typeof setTimeout> | undefined;

  try {
    return await Promise.race([
      promise,
      new Promise<never>((_resolve, reject) => {
        timeout = setTimeout(
          () => reject(new Error(`Operation exceeded ${timeoutMs}ms.`)),
          timeoutMs
        );
      }),
    ]);
  } finally {
    if (timeout !== undefined) {
      clearTimeout(timeout);
    }
  }
};

describe("createChat", () => {
  for (const adapter of adapters) {
    it(`uses the canonical message contract with ${adapter}`, () => {
      const chat = createChat({ adapter })
        .user("First question", { id: "user-first" })
        .assistant("First answer", { id: "assistant-first" })
        .user("Second question", { id: "user-second" })
        .assistant("Second answer", { id: "assistant-second" })
        .user("Third question", { id: "user-third" });

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
        id: "user-second",
        role: "user",
      });
      assert.deepEqual(chat.next(chat.get(4)), {
        content: "Third question",
        id: "user-third",
        role: "user",
      });
      assert.equal(chat.next(chat.get()), null);
      assert.throws(() => chat.get(-1), {
        message: "count must be a non-negative integer.",
      });

      const returnedMessages = chat.get();
      returnedMessages[0].content = "Mutated question";

      assert.deepEqual(chat.get(1), [
        { content: "First question", id: "user-first", role: "user" },
      ]);
    });

    it(`requires unique scripted message IDs with ${adapter}`, () => {
      const duplicateUserId = createChat({ adapter }).user("First", {
        id: "duplicate",
      });

      assert.throws(() => duplicateUserId.user("Second", { id: "duplicate" }), {
        message: "Duplicate chat message ID: duplicate",
      });

      const duplicateRoleId = createChat({ adapter }).user("Question", {
        id: "shared",
      });

      assert.throws(
        () => duplicateRoleId.assistant("Answer", { id: "shared" }),
        { message: "Duplicate chat message ID: shared" }
      );

      const generatedIdCollision = createChat({ adapter }).user("Question");

      assert.throws(
        () =>
          generatedIdCollision.assistant("Answer", {
            id: "create-chat-message-1",
          }),
        { message: "Duplicate chat message ID: create-chat-message-1" }
      );

      const uniqueIds = createChat({ adapter })
        .user("First", { id: "user-first" })
        .assistant("First answer", { id: "assistant-first" })
        .user("Second")
        .assistant("Second answer", { id: "assistant-second" });

      assert.deepEqual(
        uniqueIds.get().map((message) => message.id),
        [
          "user-first",
          "assistant-first",
          "create-chat-message-1",
          "assistant-second",
        ]
      );
    });

    it(`streams the scripted response with ${adapter}`, async () => {
      const chat = createChat({ adapter })
        .user("Question", { id: "user-scripted" })
        .assistant("First streamed answer", { id: "assistant-scripted" });
      const runtime = getChatRuntime(chat);
      const expectedResponse = {
        assistantId: "assistant-scripted",
        completed: true,
        text: "First streamed answer",
      };

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
        assert.deepEqual(normalizeAiSdkChunks(chunks), expectedResponse);
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
        assert.deepEqual(normalizeTanStackChunks(chunks), expectedResponse);
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

  it("preserves supplied TanStack run and thread IDs in lifecycle chunks", async () => {
    const chat = createChat({ adapter: "tanstack-ai" })
      .user("Question", { id: "user-scripted" })
      .assistant("Answer", { id: "assistant-scripted" });
    const runtime = getChatRuntime(chat);

    if (runtime.adapter !== "tanstack-ai") {
      throw new Error("Expected the TanStack AI runtime.");
    }

    const chunks = await collectChunks(
      runtime
        .createTransport({ delayMs: 0 })
        .connect([runtime.toMessage(chat.get(1)[0])], undefined, undefined, {
          runId: "caller-run",
          threadId: "caller-thread",
        })
    );
    const started = chunks.find((chunk) => chunk.type === "RUN_STARTED");
    const finished = chunks.find((chunk) => chunk.type === "RUN_FINISHED");

    assert.deepEqual(started, {
      runId: "caller-run",
      threadId: "caller-thread",
      type: "RUN_STARTED",
    });
    assert.deepEqual(finished, {
      finishReason: "stop",
      runId: "caller-run",
      threadId: "caller-thread",
      type: "RUN_FINISHED",
    });
  });

  it("keeps AI SDK chunks on reader demand", async () => {
    const chat = createChat({ adapter: "ai-sdk" })
      .user("Question")
      .assistant("First second third");
    const runtime = getChatRuntime(chat);

    if (runtime.adapter !== "ai-sdk") {
      throw new Error("Expected the AI SDK runtime.");
    }

    const abortController = new AbortController();
    const stream = await runtime.createTransport({ delayMs: 10 }).sendMessages({
      abortSignal: abortController.signal,
      chatId: "test-chat",
      messageId: undefined,
      messages: [runtime.toMessage(chat.get(1)[0])],
      trigger: "submit-message",
    });
    const reader = stream.getReader();
    const first = await completeWithin(reader.read(), 100);

    assert.deepEqual(first.value, {
      messageId: "create-chat-message-2",
      type: "start",
    });

    await wait(25);
    abortController.abort();

    const second = await completeWithin(reader.read(), 100);

    assert.deepEqual(second, {
      done: false,
      value: { type: "abort" },
    });
    assert.deepEqual(await completeWithin(reader.read(), 100), {
      done: true,
      value: undefined,
    });
  });

  it("cancels an AI SDK reader without background errors", async () => {
    const chat = createChat({ adapter: "ai-sdk" })
      .user("Question")
      .assistant("First second third");
    const runtime = getChatRuntime(chat);

    if (runtime.adapter !== "ai-sdk") {
      throw new Error("Expected the AI SDK runtime.");
    }

    const stream = await runtime.createTransport({ delayMs: 10 }).sendMessages({
      abortSignal: undefined,
      chatId: "test-chat",
      messageId: undefined,
      messages: [runtime.toMessage(chat.get(1)[0])],
      trigger: "submit-message",
    });
    const reader = stream.getReader();

    await completeWithin(reader.read(), 100);
    await completeWithin(reader.cancel(), 100);
    await completeWithin(wait(25), 100);
  });

  it("emits one abort event for an in-flight AI SDK response", async () => {
    const chat = createChat({ adapter: "ai-sdk" })
      .user("Question")
      .assistant("First second");
    const runtime = getChatRuntime(chat);

    if (runtime.adapter !== "ai-sdk") {
      throw new Error("Expected the AI SDK runtime.");
    }

    const abortController = new AbortController();
    const stream = await runtime
      .createTransport({ delayMs: 100 })
      .sendMessages({
        abortSignal: abortController.signal,
        chatId: "test-chat",
        messageId: undefined,
        messages: [runtime.toMessage(chat.get(1)[0])],
        trigger: "submit-message",
      });
    const reader = stream.getReader();

    await completeWithin(reader.read(), 100);
    const next = reader.read();
    abortController.abort();

    assert.deepEqual(await completeWithin(next, 100), {
      done: false,
      value: { type: "abort" },
    });
    assert.deepEqual(await completeWithin(reader.read(), 100), {
      done: true,
      value: undefined,
    });
  });

  it("does not emit abort after the AI SDK finish chunk", async () => {
    const chat = createChat({ adapter: "ai-sdk" })
      .user("Question")
      .assistant("Answer");
    const runtime = getChatRuntime(chat);

    if (runtime.adapter !== "ai-sdk") {
      throw new Error("Expected the AI SDK runtime.");
    }

    const abortController = new AbortController();
    const stream = await runtime.createTransport({ delayMs: 0 }).sendMessages({
      abortSignal: abortController.signal,
      chatId: "test-chat",
      messageId: undefined,
      messages: [runtime.toMessage(chat.get(1)[0])],
      trigger: "submit-message",
    });
    const reader = stream.getReader();

    await completeWithin(reader.read(), 100);
    await completeWithin(reader.read(), 100);
    await completeWithin(reader.read(), 100);
    await completeWithin(reader.read(), 100);
    assert.deepEqual(await completeWithin(reader.read(), 100), {
      done: false,
      value: { finishReason: "stop", type: "finish" },
    });

    abortController.abort();

    assert.deepEqual(await completeWithin(reader.read(), 100), {
      done: true,
      value: undefined,
    });
  });

  it("regenerates the requested AI SDK assistant response", async () => {
    const chat = createChat({ adapter: "ai-sdk" })
      .user("First question", { id: "user-first" })
      .assistant("First answer", { id: "assistant-first" })
      .user("Second question", { id: "user-second" })
      .assistant("Second answer", { id: "assistant-second" });
    const runtime = getChatRuntime(chat);

    if (runtime.adapter !== "ai-sdk") {
      throw new Error("Expected the AI SDK runtime.");
    }

    const transport = runtime.createTransport({ delayMs: 0 });
    const firstUser = runtime.toMessage(chat.get(1)[0]);
    const firstResponse = await transport.sendMessages({
      abortSignal: undefined,
      chatId: "test-chat",
      messageId: undefined,
      messages: [firstUser],
      trigger: "submit-message",
    });
    const initialChunks = await readChunks(firstResponse.getReader());

    assert.deepEqual(initialChunks.at(0), {
      messageId: "assistant-first",
      type: "start",
    });

    const regeneratedResponse = await transport.sendMessages({
      abortSignal: undefined,
      chatId: "test-chat",
      messageId: "assistant-first",
      messages: [firstUser],
      trigger: "regenerate-message",
    });
    const regeneratedChunks = await readChunks(regeneratedResponse.getReader());

    assert.deepEqual(regeneratedChunks.at(0), {
      messageId: "assistant-first",
      type: "start",
    });
    assert.ok(
      regeneratedChunks.some(
        (chunk) => chunk.type === "text-delta" && chunk.delta === "First "
      )
    );
    assert.ok(
      regeneratedChunks.every(
        (chunk) =>
          !("messageId" in chunk) || chunk.messageId !== "assistant-second"
      )
    );
    assert.ok(
      regeneratedChunks.every(
        (chunk) => chunk.type !== "text-delta" || chunk.delta !== "Second "
      )
    );

    const defaultRegeneratedResponse = await transport.sendMessages({
      abortSignal: undefined,
      chatId: "test-chat",
      messageId: undefined,
      messages: [firstUser],
      trigger: "regenerate-message",
    });
    const defaultRegeneratedChunks = await readChunks(
      defaultRegeneratedResponse.getReader()
    );

    assert.deepEqual(defaultRegeneratedChunks.at(0), {
      messageId: "assistant-first",
      type: "start",
    });
    assert.ok(
      defaultRegeneratedChunks.some(
        (chunk) => chunk.type === "text-delta" && chunk.delta === "First "
      )
    );
  });

  it("rejects invalid AI SDK regeneration targets", () => {
    const chat = createChat({ adapter: "ai-sdk" })
      .user("Question", { id: "user-scripted" })
      .assistant("Answer", { id: "assistant-scripted" });
    const runtime = getChatRuntime(chat);

    if (runtime.adapter !== "ai-sdk") {
      throw new Error("Expected the AI SDK runtime.");
    }

    const transport = runtime.createTransport();
    const messages = [runtime.toMessage(chat.get(1)[0])];

    for (const messageId of ["missing", "user-scripted"]) {
      assert.throws(
        () =>
          transport.sendMessages({
            abortSignal: undefined,
            chatId: "test-chat",
            messageId,
            messages,
            trigger: "regenerate-message",
          }),
        { message: "No simulated assistant response found." }
      );
    }
  });
});
