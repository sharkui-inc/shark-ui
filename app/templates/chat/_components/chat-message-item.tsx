"use client";

import type { UIMessage } from "ai";
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
import { getMessageText } from "../_data/chat-demo";

const AssistantActions = () => (
  <MessageFooter>
    <MessageActions>
      <MessageAction>
        <CopyIcon aria-hidden="true" />
      </MessageAction>
      <MessageAction>
        <ThumbsUpIcon aria-hidden="true" />
      </MessageAction>
      <MessageAction>
        <ThumbsDownIcon aria-hidden="true" />
      </MessageAction>
    </MessageActions>
  </MessageFooter>
);

export const ChatMessageItem = ({
  isStreaming = false,
  message,
}: {
  isStreaming?: boolean;
  message: UIMessage;
}) => {
  const isUser = message.role === "user";
  const text = getMessageText(message);

  return (
    <MessageScrollerItem>
      <Message align={isUser ? "end" : "start"}>
        <MessageContent>
          {!isUser && isStreaming && !text ? (
            <Marker role="status">
              <MarkerIcon>
                <BotIcon aria-hidden="true" />
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
