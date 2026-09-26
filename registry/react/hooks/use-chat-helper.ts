"use client";

import { useChat } from "@ai-sdk/react";
import { useChat as useTanStackChat } from "@tanstack/ai-react";
import React from "react";
import {
  type Chat,
  type ChatMessage,
  type CreateChatTransportOptions,
  getChatRuntime,
} from "@/registry/react/lib/create-chat";

export interface UseChatHelperOptions {
  chat: Chat;
  initialMessageCount?: number;
  transport?: CreateChatTransportOptions;
}

export interface ChatHelperState {
  canSendNext: boolean;
  error: Error | undefined;
  messages: ChatMessage[];
  nextMessage: ChatMessage | null;
  sendNext: () => Promise<void> | undefined;
  status: "ready" | "submitted" | "streaming" | "error";
  stop: () => void;
}

const useAiSdkChatHelper = (
  chat: Chat,
  options: UseChatHelperOptions
): ChatHelperState => {
  const runtime = getChatRuntime(chat);
  if (runtime.adapter !== "ai-sdk") {
    throw new Error("Expected an AI SDK chat runtime.");
  }

  const initialMessages = React.useMemo(
    () =>
      chat
        .get(options.initialMessageCount ?? 0)
        .map((message) => runtime.toMessage(message)),
    [chat, options.initialMessageCount, runtime]
  );
  const transport = React.useMemo(
    () => runtime.createTransport(options.transport),
    [options.transport, runtime]
  );
  const chatState = useChat({
    messages: initialMessages,
    transport,
  });
  const messages = chatState.messages.map(runtime.fromMessage);
  const nextMessage = chat.next(messages);
  const sendNext = React.useCallback(() => {
    if (nextMessage) {
      return chatState.sendMessage(runtime.toMessage(nextMessage));
    }
  }, [chatState.sendMessage, nextMessage, runtime]);

  return {
    canSendNext: nextMessage !== null,
    error: chatState.error,
    messages,
    nextMessage,
    sendNext,
    status: chatState.status,
    stop: chatState.stop,
  };
};

const useTanStackChatHelper = (
  chat: Chat,
  options: UseChatHelperOptions
): ChatHelperState => {
  const runtime = getChatRuntime(chat);
  if (runtime.adapter !== "tanstack-ai") {
    throw new Error("Expected a TanStack AI chat runtime.");
  }

  const initialMessages = React.useMemo(
    () =>
      chat
        .get(options.initialMessageCount ?? 0)
        .map((message) => runtime.toMessage(message)),
    [chat, options.initialMessageCount, runtime]
  );
  const connection = React.useMemo(
    () => runtime.createTransport(options.transport),
    [options.transport, runtime]
  );
  const chatState = useTanStackChat({
    connection,
    initialMessages,
  });
  const messages = chatState.messages.map(runtime.fromMessage);
  const nextMessage = chat.next(messages);
  const sendNext = React.useCallback(() => {
    if (nextMessage) {
      return chatState.append(runtime.toMessage(nextMessage));
    }
  }, [chatState.append, nextMessage, runtime]);

  return {
    canSendNext: nextMessage !== null,
    error: chatState.error,
    messages,
    nextMessage,
    sendNext,
    status: chatState.status,
    stop: chatState.stop,
  };
};

/** Connects a local chat to the runtime selected by `createChat`. */
export const useChatHelper = (
  options: UseChatHelperOptions
): ChatHelperState => {
  const runtime = getChatRuntime(options.chat);
  const useAdapter =
    runtime.adapter === "ai-sdk" ? useAiSdkChatHelper : useTanStackChatHelper;

  return useAdapter(options.chat, options);
};
