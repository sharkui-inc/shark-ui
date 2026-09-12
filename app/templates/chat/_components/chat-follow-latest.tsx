"use client";

import { useLayoutEffect, useRef } from "react";
import { useMessageScroller } from "@/registry/react/components/message-scroller";

export const FollowLatestMessage = ({
  enabled,
  messageCount,
  streamedText,
}: {
  enabled: boolean;
  messageCount: number;
  streamedText: string;
}) => {
  const previousMessageCount = useRef(messageCount);
  const scrollArea = useMessageScroller();

  useLayoutEffect(() => {
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
