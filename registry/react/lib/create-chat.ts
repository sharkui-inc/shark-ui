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

const wait = (delayMs: number, signals: readonly AbortSignal[] = []) =>
  new Promise<void>((resolve) => {
    if (delayMs <= 0 || signals.some((signal) => signal.aborted)) {
      resolve();
      return;
    }

    const complete = () => {
      clearTimeout(timeout);
      for (const signal of signals) {
        signal.removeEventListener("abort", complete);
      }
      resolve();
    };
    const timeout = setTimeout(complete, delayMs);

    for (const signal of signals) {
      signal.addEventListener("abort", complete, { once: true });
    }
  });

const textChunks = (text: string) => text.match(/\S+\s*/g) ?? [text];

const createTimedChunkStream = <CHUNK>(
  chunks: readonly CHUNK[],
  firstDelayMs: number,
  delayMs: number,
  abortSignal?: AbortSignal
) => {
  const cancellationController = new AbortController();

  const stream = async function* (): AsyncGenerator<CHUNK> {
    for (const [index, chunk] of chunks.entries()) {
      // biome-ignore lint/performance/noAwaitInLoops: Chunks must be scheduled sequentially.
      await wait(
        index === 0 ? firstDelayMs : delayMs,
        abortSignal
          ? [abortSignal, cancellationController.signal]
          : [cancellationController.signal]
      );

      if (abortSignal?.aborted || cancellationController.signal.aborted) {
        return;
      }

      yield chunk;
    }
  };

  return {
    cancel: () => cancellationController.abort(),
    isCancelled: () => cancellationController.signal.aborted,
    stream: stream(),
  };
};

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
  messages: readonly unknown[],
  requestedAssistantId?: string
) => {
  if (requestedAssistantId !== undefined) {
    return turns.find(
      (turn) =>
        turn.message.id === requestedAssistantId &&
        turn.message.role === "assistant"
    );
  }

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
  sendMessages: ({ abortSignal, messageId, messages, trigger }) => {
    let assistantTurn: ChatTurn | undefined;

    if (trigger === "regenerate-message" && messageId !== undefined) {
      assistantTurn = nextAssistantTurn(turns, messages, messageId);
    } else {
      assistantTurn = nextAssistantTurn(turns, messages);
    }

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

    const scheduledChunks = createTimedChunkStream(
      chunks,
      assistantTurn.delayMs ?? 0,
      options.delayMs ?? 50,
      abortSignal
    );
    let emittedChunkCount = 0;
    let pendingPull: Promise<void> | undefined;

    const pullNextChunk = async (
      controller: ReadableStreamDefaultController<
        InferUIMessageChunk<ChatUiMessage>
      >
    ) => {
      try {
        const result = await scheduledChunks.stream.next();

        if (scheduledChunks.isCancelled()) {
          return;
        }

        if (result.done) {
          if (abortSignal?.aborted) {
            controller.enqueue({ type: "abort" });
          }
          controller.close();
          return;
        }

        controller.enqueue(result.value);
        emittedChunkCount += 1;

        if (emittedChunkCount === chunks.length) {
          controller.close();
        }
      } catch (error) {
        if (!scheduledChunks.isCancelled()) {
          controller.error(error);
        }
      }
    };

    return Promise.resolve(
      new ReadableStream<InferUIMessageChunk<ChatUiMessage>>(
        {
          cancel() {
            scheduledChunks.cancel();
            return scheduledChunks.stream.return().then(() => undefined);
          },
          pull(controller) {
            if (!pendingPull) {
              pendingPull = pullNextChunk(controller).finally(() => {
                pendingPull = undefined;
              });
            }

            return pendingPull;
          },
        },
        { highWaterMark: 0 }
      )
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

    return createTimedChunkStream(
      chunks,
      assistantTurn.delayMs ?? 0,
      options.delayMs ?? 50,
      abortSignal
    ).stream;
  },
});

/** Creates a text-only chat for the selected AI runtime. */
export const createChat = (options: { adapter: CreateChatAdapter }): Chat => {
  const turns: ChatTurn[] = [];
  const messageIds = new Set<string>();
  let messageIndex = 0;

  const createMessage = (
    role: ChatMessage["role"],
    content: string,
    id?: string
  ): ChatMessage => {
    if (id === undefined) {
      messageIndex += 1;
    }

    const messageId = id ?? `create-chat-message-${messageIndex}`;

    if (messageIds.has(messageId)) {
      throw new Error(`Duplicate chat message ID: ${messageId}`);
    }

    messageIds.add(messageId);

    return {
      content,
      id: messageId,
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
