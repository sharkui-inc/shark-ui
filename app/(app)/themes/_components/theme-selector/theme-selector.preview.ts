"use client";

import React from "react";
import { canPointerPreview } from "@/lib/theme/preview";

const KEYBOARD_NAVIGATION_KEYS = new Set([
  "ArrowDown",
  "ArrowUp",
  "End",
  "Home",
]);

export const useThemeHighlightPreview = (
  onPreview?: (value: string | null) => void
) => {
  const isKeyboardNavigation = React.useRef<boolean>(false);
  const keyboardNavigationTimeout = React.useRef<number | undefined>(undefined);
  const onPreviewRef = React.useRef(onPreview);
  onPreviewRef.current = onPreview;

  React.useEffect(
    () => () => {
      if (keyboardNavigationTimeout.current !== undefined) {
        window.clearTimeout(keyboardNavigationTimeout.current);
      }
      onPreviewRef.current?.(null);
    },
    []
  );

  const clearPreview = React.useCallback(() => {
    onPreviewRef.current?.(null);
  }, []);

  const onKeyDownCapture = (event: React.KeyboardEvent<HTMLElement>) => {
    if (!KEYBOARD_NAVIGATION_KEYS.has(event.key)) {
      return;
    }

    isKeyboardNavigation.current = true;
    if (keyboardNavigationTimeout.current !== undefined) {
      window.clearTimeout(keyboardNavigationTimeout.current);
    }
    keyboardNavigationTimeout.current = window.setTimeout(() => {
      isKeyboardNavigation.current = false;
    }, 0);
  };

  const onHighlightChange = ({
    highlightedValue,
  }: {
    highlightedValue: string | null;
  }) => {
    if (!onPreviewRef.current) {
      return;
    }

    if (!highlightedValue) {
      onPreviewRef.current(null);
      return;
    }

    if (!(isKeyboardNavigation.current || canPointerPreview())) {
      return;
    }

    onPreviewRef.current(highlightedValue);
  };

  const onPointerLeaveContent = () => {
    if (canPointerPreview()) {
      onPreviewRef.current?.(null);
    }
  };

  const onPointerMoveContent = () => {
    isKeyboardNavigation.current = false;
  };

  return {
    clearPreview,
    onHighlightChange,
    onKeyDownCapture,
    onPointerLeaveContent,
    onPointerMoveContent,
  };
};
