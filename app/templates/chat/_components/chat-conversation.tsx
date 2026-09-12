"use client";

import { Marker, MarkerContent } from "@/registry/react/components/marker";
import {
  MessageScroller,
  MessageScrollerButton,
  MessageScrollerContent,
  MessageScrollerItem,
  MessageScrollerViewport,
} from "@/registry/react/components/message-scroller";
import { useChatHelper } from "@/registry/react/hooks/use-chat-helper";
import { chat, getMessageText, toPromptStatus } from "../_data/chat-demo";
import { EmptyConversation } from "./chat-empty-state";
import { FollowLatestMessage } from "./chat-follow-latest";
import { ChatHeader } from "./chat-header";
import { ChatMessageItem } from "./chat-message-item";
import { ChatPromptComposer } from "./chat-prompt-composer";

const noop = () => undefined;

export const ChatConversation = () => {
  const { canSendNext, messages, nextMessage, sendNext, status, stop } =
    useChatHelper({
      adapter: "ai-sdk",
      chat,
    });
  const promptStatus = toPromptStatus(status);
  const nextText = nextMessage ? getMessageText(nextMessage) : "";
  const usedTokens = Math.min(18_420 + messages.length * 640, 128_000);
  const isBusy = status === "submitted" || status === "streaming";
  const latestAssistantMessage = [...messages]
    .reverse()
    .find((message) => message.role === "assistant");
  const latestMessageText = getMessageText(messages.at(-1) ?? { parts: [] });

  const handleSubmit = () => {
    if (canSendNext) {
      sendNext()?.catch(noop);
    }
  };

  return (
    <div className="flex h-full min-h-0 w-full flex-col bg-background">
      <header className="flex h-12 shrink-0 items-center gap-3 border-b ps-4">
        <div className="ms-auto">
          <ChatHeader />
        </div>
      </header>

      <MessageScroller className="min-h-0 flex-1">
        <MessageScrollerViewport aria-live="polite">
          <FollowLatestMessage
            enabled={isBusy}
            messageCount={messages.length}
            streamedText={latestMessageText}
          />
          {messages.length === 0 ? (
            <MessageScrollerContent className="w-full">
              <EmptyConversation onSelect={handleSubmit} />
            </MessageScrollerContent>
          ) : (
            <MessageScrollerContent className="w-full">
              <div className="mx-auto flex w-full max-w-3xl flex-col gap-6 px-4 sm:px-6">
                <MessageScrollerItem>
                  <Marker variant="separator">
                    <MarkerContent>Today</MarkerContent>
                  </Marker>
                </MessageScrollerItem>
                {messages.map((message) => (
                  <ChatMessageItem
                    isStreaming={
                      isBusy && message.id === latestAssistantMessage?.id
                    }
                    key={message.id}
                    message={message}
                  />
                ))}
              </div>
            </MessageScrollerContent>
          )}
        </MessageScrollerViewport>
        <MessageScrollerButton />
      </MessageScroller>

      <ChatPromptComposer
        onStop={stop}
        onSubmit={handleSubmit}
        status={promptStatus}
        usedTokens={usedTokens}
        value={nextText}
      />
    </div>
  );
};
