import type { StreamChunk } from "@tanstack/ai/client";
import type {
  ConnectConnectionAdapter,
  UIMessage as TanStackUIMessage,
} from "@tanstack/ai-client";
import type { ChatTransport, InferUIMessageChunk, UIMessage } from "ai";

export interface CreateChatAssistantOptions {
  /** Delay before the assistant response starts streaming. */
  delayMs?: number;
  /** Stable ID for matching a streamed response to this scripted turn. */
  id?: string;
}

export interface CreateChatTransportOptions {
  /** Delay between text chunks. Pass `0` to stream immediately. */
  delayMs?: number;
}

export interface ChatMessage {
  content: string;
  id: string;
  role: "user" | "assistant";
}

export interface Chat {
  assistant: (text: string, options?: CreateChatAssistantOptions) => Chat;
  get: (count?: number) => ChatMessage[];
  next: (messages: readonly ChatMessage[]) => ChatMessage | null;
  user: (text: string, options?: { id?: string }) => Chat;
}

type ChatTurn = CreateChatAssistantOptions & { message: ChatMessage };
type ChatUiMessage = UIMessage;

type ChatRuntime =
  | {
      adapter: "ai-sdk";
      createTransport: (
        options?: CreateChatTransportOptions
      ) => ChatTransport<ChatUiMessage>;
      fromMessage: (message: ChatUiMessage) => ChatMessage;
      toMessage: (message: ChatMessage) => ChatUiMessage;
    }
  | {
      adapter: "tanstack-ai";
      createTransport: (
        options?: CreateChatTransportOptions
      ) => ConnectConnectionAdapter;
      fromMessage: (message: TanStackUIMessage) => ChatMessage;
      toMessage: (message: ChatMessage) => TanStackUIMessage;
    };

const runtimes = new WeakMap<Chat, ChatRuntime>();

const clone = <VALUE>(value: VALUE): VALUE => structuredClone(value);

const wait = (delayMs: number, signal?: AbortSignal) =>
  new Promise<void>((resolve) => {
    if (delayMs <= 0 || signal?.aborted) {
      resolve();
      return;
    }

    const timeout = setTimeout(resolve, delayMs);
    signal?.addEventListener(
      "abort",
      () => {
        clearTimeout(timeout);
        resolve();
      },
      { once: true }
    );
  });

const textChunks = (text: string) => text.match(/\S+\s*/g) ?? [text];

const latestTurnIndex = (
  turns: readonly ChatTurn[],
  messages: readonly unknown[]
) => {
  const ids = new Set(
    messages.flatMap((message) =>
      typeof message === "object" &&
      message !== null &&
      "id" in message &&
      typeof message.id === "string"
        ? [message.id]
        : []
    )
  );
  let index = -1;

  for (const [turnIndex, turn] of turns.entries()) {
    if (ids.has(turn.message.id)) {
      index = turnIndex;
    }
  }

  return index;
};

const nextAssistantTurn = (
  turns: readonly ChatTurn[],
  messages: readonly unknown[]
) => {
  const userTurnIndex = latestTurnIndex(turns, messages);
  return turns
    .slice(userTurnIndex + 1)
    .find((turn) => turn.message.role === "assistant");
};

const toAiSdkMessage = (message: ChatMessage): UIMessage => ({
  id: message.id,
  parts:
    message.role === "user"
      ? [{ text: message.content, type: "text" }]
      : [{ state: "done", text: message.content, type: "text" }],
  role: message.role,
});

const fromAiSdkMessage = (message: UIMessage): ChatMessage => ({
  content: message.parts
    .filter((part) => part.type === "text")
    .map((part) => part.text)
    .join(""),
  id: message.id,
  role: message.role === "assistant" ? "assistant" : "user",
});

const toTanStackMessage = (message: ChatMessage): TanStackUIMessage => ({
  id: message.id,
  parts: [{ content: message.content, type: "text" }],
  role: message.role,
});

const fromTanStackMessage = (message: TanStackUIMessage): ChatMessage => ({
  content: message.parts
    .filter((part) => part.type === "text")
    .map((part) => part.content)
    .join(""),
  id: message.id,
  role: message.role === "assistant" ? "assistant" : "user",
});

const createAiSdkTransport = (
  turns: readonly ChatTurn[],
  options: CreateChatTransportOptions = {}
): ChatTransport<ChatUiMessage> => ({
  reconnectToStream: () => Promise.resolve(null),
  sendMessages: ({ abortSignal, messages }) => {
    const assistantTurn = nextAssistantTurn(turns, messages);

    if (!assistantTurn) {
      throw new Error("No simulated assistant response found.");
    }

    const chunks: InferUIMessageChunk<ChatUiMessage>[] = [
      { messageId: assistantTurn.message.id, type: "start" },
      { id: `${assistantTurn.message.id}-text`, type: "text-start" },
      ...textChunks(assistantTurn.message.content).map((delta) => ({
        delta,
        id: `${assistantTurn.message.id}-text`,
        type: "text-delta" as const,
      })),
      { id: `${assistantTurn.message.id}-text`, type: "text-end" },
      { finishReason: "stop", type: "finish" },
    ];

    return Promise.resolve(
      new ReadableStream<InferUIMessageChunk<ChatUiMessage>>({
        start(controller) {
          const enqueue = async (index: number): Promise<void> => {
            await wait(
              index === 0
                ? (assistantTurn.delayMs ?? 0)
                : (options.delayMs ?? 50),
              abortSignal
            );

            if (abortSignal?.aborted) {
              controller.enqueue({ type: "abort" });
              controller.close();
              return;
            }

            controller.enqueue(chunks[index]);
            if (index === chunks.length - 1) {
              controller.close();
              return;
            }

            enqueue(index + 1).catch((error: unknown) =>
              controller.error(error)
            );
          };

          enqueue(0).catch((error: unknown) => controller.error(error));
        },
      })
    );
  },
});

const createTanStackTransport = (
  turns: readonly ChatTurn[],
  options: CreateChatTransportOptions = {}
): ConnectConnectionAdapter => ({
  connect(messages, _data, abortSignal, runContext) {
    const assistantTurn = nextAssistantTurn(turns, messages);

    if (!assistantTurn) {
      throw new Error("No simulated assistant response found.");
    }

    const chunks = [
      {
        runId: runContext?.runId ?? "run-create-chat",
        threadId: runContext?.threadId ?? "thread-create-chat",
        type: "RUN_STARTED",
      },
      {
        messageId: assistantTurn.message.id,
        role: "assistant",
        type: "TEXT_MESSAGE_START",
      },
      ...textChunks(assistantTurn.message.content).map((delta) => ({
        delta,
        messageId: assistantTurn.message.id,
        type: "TEXT_MESSAGE_CONTENT",
      })),
      {
        messageId: assistantTurn.message.id,
        type: "TEXT_MESSAGE_END",
      },
      {
        finishReason: "stop",
        runId: runContext?.runId ?? "run-create-chat",
        threadId: runContext?.threadId ?? "thread-create-chat",
        type: "RUN_FINISHED",
      },
    ] as StreamChunk[];

    const stream = async function* (index = 0): AsyncGenerator<StreamChunk> {
      await wait(
        index === 0 ? (assistantTurn.delayMs ?? 0) : (options.delayMs ?? 50),
        abortSignal
      );

      if (abortSignal?.aborted) {
        return;
      }

      yield chunks[index];
      if (index < chunks.length - 1) {
        yield* stream(index + 1);
      }
    };

    return stream();
  },
});

/** Creates a text-only chat for the selected AI runtime. */
export const createChat = (options: { adapter: CreateChatAdapter }): Chat => {
  const turns: ChatTurn[] = [];
  let messageIndex = 0;

  const createMessage = (
    role: ChatMessage["role"],
    content: string,
    id?: string
  ): ChatMessage => {
    if (id === undefined) {
      messageIndex += 1;
    }

    return {
      content,
      id: id ?? `create-chat-message-${messageIndex}`,
      role,
    };
  };

  const chat: Chat = {
    assistant(content, assistantOptions) {
      turns.push({
        delayMs: assistantOptions?.delayMs ?? 0,
        message: createMessage("assistant", content, assistantOptions?.id),
      });
      return chat;
    },
    get(count = turns.length) {
      if (!Number.isInteger(count) || count < 0) {
        throw new RangeError("count must be a non-negative integer.");
      }
      return turns.slice(0, count).map((turn) => clone(turn.message));
    },
    next(messages) {
      const nextTurn = turns
        .slice(latestTurnIndex(turns, messages) + 1)
        .find((turn) => turn.message.role === "user");
      return nextTurn ? clone(nextTurn.message) : null;
    },
    user(content, userOptions) {
      turns.push({
        delayMs: 0,
        message: createMessage("user", content, userOptions?.id),
      });
      return chat;
    },
  };

  runtimes.set(
    chat,
    options.adapter === "ai-sdk"
      ? {
          adapter: "ai-sdk",
          createTransport: (transportOptions) =>
            createAiSdkTransport(turns, transportOptions),
          fromMessage: fromAiSdkMessage,
          toMessage: toAiSdkMessage,
        }
      : {
          adapter: "tanstack-ai",
          createTransport: (transportOptions) =>
            createTanStackTransport(turns, transportOptions),
          fromMessage: fromTanStackMessage,
          toMessage: toTanStackMessage,
        }
  );

  return chat;
};

export type CreateChatAdapter = "ai-sdk" | "tanstack-ai";

/** @internal Used by `useChatHelper` to bridge the selected runtime. */
export const getChatRuntime = (chat: Chat) => {
  const runtime = runtimes.get(chat);

  if (!runtime) {
    throw new Error("Chat was not created by createChat().");
  }

  return runtime;
};
