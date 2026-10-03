"use client";

import React from "react";
import { useMessageScroller } from "@/registry/react/components/message-scroller";

interface FollowLatestMessageProps {
  enabled: boolean;
  messageCount: number;
  streamedText: string;
}
export const FollowLatestMessage = (props: FollowLatestMessageProps) => {
  const { enabled, messageCount, streamedText } = props;

  const previousMessageCount = React.useRef(messageCount);
  const scrollArea = useMessageScroller();

  React.useLayoutEffect(() => {
    const startedTurn = messageCount > previousMessageCount.current;
    const isFirstStreamFrame = streamedText.length === 0;

    if (
      enabled &&
      (startedTurn || isFirstStreamFrame || scrollArea.isAtBottom)
    ) {
      scrollArea.scrollToEdge({ behavior: "auto", edge: "bottom" });
    }

    previousMessageCount.current = messageCount;
  }, [enabled, messageCount, scrollArea, streamedText]);

  return null;
};
