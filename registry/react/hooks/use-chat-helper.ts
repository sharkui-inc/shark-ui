"use client";

import { useChat } from "@ai-sdk/react";
import { useChat as useTanStackChat } from "@tanstack/ai-react";
import type { UIMessage } from "ai";
import { useCallback, useMemo } from "react";
import type {
  AiSdkChat,
  CreateChatTransportOptions,
  TanStackChat,
} from "@/registry/react/lib/create-chat";

interface BaseUseChatHelperOptions {
  initialMessageCount?: number;
  transport?: CreateChatTransportOptions;
}

export type UseChatHelperOptions =
  | (BaseUseChatHelperOptions & {
      adapter: "ai-sdk";
      chat: AiSdkChat;
    })
  | (BaseUseChatHelperOptions & {
      adapter: "tanstack-ai";
      chat: TanStackChat;
    });

const useAiSdkChatHelper = <UI_MESSAGE extends UIMessage = UIMessage>(
  chat: AiSdkChat<UI_MESSAGE>,
  options: BaseUseChatHelperOptions = {}
) => {
  const initialMessages = useMemo(
    () => chat.get(options.initialMessageCount ?? 0),
    [chat, options.initialMessageCount]
  );
  const transport = useMemo(
    () => chat.transport(options.transport),
    [chat, options.transport]
  );
  const chatState = useChat<UI_MESSAGE>({
    messages: initialMessages,
    transport,
  });
  const nextMessage = chat.next(chatState.messages);
  const sendNext = useCallback(() => {
    if (nextMessage) {
      return chatState.sendMessage(nextMessage);
    }
  }, [chatState.sendMessage, nextMessage]);

  return {
    ...chatState,
    canSendNext: nextMessage !== null,
    nextMessage,
    sendNext,
  };
};

const useTanStackChatHelper = (
  chat: TanStackChat,
  options: BaseUseChatHelperOptions = {}
) => {
  const initialMessages = useMemo(
    () => chat.get(options.initialMessageCount ?? 0),
    [chat, options.initialMessageCount]
  );
  const connection = useMemo(
    () => chat.transport(options.transport),
    [chat, options.transport]
  );
  const chatState = useTanStackChat({
    connection,
    initialMessages,
  });
  const nextMessage = chat.next(chatState.messages);
  const sendNext = useCallback(() => {
    if (nextMessage) {
      return chatState.append(nextMessage);
    }
  }, [chatState.append, nextMessage]);

  return {
    ...chatState,
    canSendNext: nextMessage !== null,
    nextMessage,
    sendNext,
  };
};

/**
 * Connects a local chat to the selected runtime. Keep `adapter` constant for
 * the lifetime of the component, as required by React's Rules of Hooks.
 */
export const useChatHelper = (options: UseChatHelperOptions) => {
  const useAdapter =
    options.adapter === "ai-sdk" ? useAiSdkChatHelper : useTanStackChatHelper;

  return useAdapter(options.chat as never, options);
};
