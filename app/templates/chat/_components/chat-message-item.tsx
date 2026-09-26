"use client";

import { BotIcon, CopyIcon, ThumbsDownIcon, ThumbsUpIcon } from "lucide-react";
import {
  Marker,
  MarkerContent,
  MarkerIcon,
} from "@/registry/react/components/marker";
import {
  Message,
  MessageAction,
  MessageActions,
  MessageContent,
  MessageFooter,
} from "@/registry/react/components/message";
import {
  MessageBubble,
  MessageBubbleContent,
} from "@/registry/react/components/message-bubble";
import { MessageScrollerItem } from "@/registry/react/components/message-scroller";
import type { ChatMessage } from "@/registry/react/lib/create-chat";

const AssistantActions = () => (
  <MessageFooter>
    <MessageActions>
      <MessageAction>
        <CopyIcon aria-hidden />
      </MessageAction>
      <MessageAction>
        <ThumbsUpIcon aria-hidden />
      </MessageAction>
      <MessageAction>
        <ThumbsDownIcon aria-hidden />
      </MessageAction>
    </MessageActions>
  </MessageFooter>
);

export const ChatMessageItem = ({
  isStreaming = false,
  message,
}: {
  isStreaming?: boolean;
  message: ChatMessage;
}) => {
  const isUser = message.role === "user";
  const text = message.content;

  return (
    <MessageScrollerItem>
      <Message align={isUser ? "end" : "start"}>
        <MessageContent>
          {!isUser && isStreaming && !text ? (
            <Marker role="status">
              <MarkerIcon>
                <BotIcon aria-hidden />
              </MarkerIcon>
              <MarkerContent className="shimmer">Thinking</MarkerContent>
            </Marker>
          ) : null}
          {text ? (
            <MessageBubble
              align={isUser ? "end" : "start"}
              variant={isUser ? "default" : "outline"}
            >
              <MessageBubbleContent>{text}</MessageBubbleContent>
            </MessageBubble>
          ) : null}
          {isUser ? null : <AssistantActions />}
        </MessageContent>
      </Message>
    </MessageScrollerItem>
  );
};
