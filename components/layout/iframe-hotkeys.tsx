"use client";

import React from "react";

const MESSAGE_TYPE = "shark-ui:hotkey";
const MAC_PLATFORM_REGEX = /Mac|iPhone|iPad|iPod/;

interface ForwardedHotkey {
  altKey: boolean;
  code: string;
  ctrlKey: boolean;
  key: string;
  metaKey: boolean;
  repeat: boolean;
  shiftKey: boolean;
  type: typeof MESSAGE_TYPE;
}

const isEditableTarget = (target: EventTarget | null) =>
  target instanceof HTMLElement &&
  (target.isContentEditable || target.matches("input, textarea, select"));

const isForwardedHotkey = (value: unknown): value is ForwardedHotkey => {
  if (typeof value !== "object" || value === null) {
    return false;
  }

  const message = value as Record<string, unknown>;

  return (
    message.type === MESSAGE_TYPE &&
    typeof message.key === "string" &&
    typeof message.code === "string" &&
    typeof message.altKey === "boolean" &&
    typeof message.ctrlKey === "boolean" &&
    typeof message.metaKey === "boolean" &&
    typeof message.repeat === "boolean" &&
    typeof message.shiftKey === "boolean"
  );
};

const isForwardedShortcut = (event: KeyboardEvent) => {
  const key = event.key.toLowerCase();
  const hasNoModifiers = !(
    event.altKey ||
    event.ctrlKey ||
    event.metaKey ||
    event.shiftKey
  );

  if (hasNoModifiers) {
    return ["c", "d", "r", "t", "/"].includes(key);
  }

  const isMac = MAC_PLATFORM_REGEX.test(navigator.userAgent);
  const hasPlatformModifier = isMac
    ? event.metaKey && !event.ctrlKey
    : event.ctrlKey && !event.metaKey;

  return (
    hasPlatformModifier &&
    !event.altKey &&
    !event.shiftKey &&
    ["b", "c", "k"].includes(key)
  );
};

const isCurrentIframe = (source: MessageEventSource | null) =>
  Array.from(document.querySelectorAll("iframe")).some(
    (iframe) => iframe.contentWindow === source
  );

export const IframeHotkeys = () => {
  React.useEffect(() => {
    if (window.parent === window) {
      const handleMessage = (event: MessageEvent) => {
        if (
          event.origin !== window.location.origin ||
          !isCurrentIframe(event.source) ||
          !isForwardedHotkey(event.data)
        ) {
          return;
        }

        document.dispatchEvent(
          new KeyboardEvent("keydown", {
            altKey: event.data.altKey,
            bubbles: true,
            cancelable: true,
            code: event.data.code,
            ctrlKey: event.data.ctrlKey,
            key: event.data.key,
            metaKey: event.data.metaKey,
            repeat: event.data.repeat,
            shiftKey: event.data.shiftKey,
          })
        );
      };

      window.addEventListener("message", handleMessage);
      return () => window.removeEventListener("message", handleMessage);
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (
        event.defaultPrevented ||
        event.isComposing ||
        event.key === "Dead" ||
        event.keyCode === 229 ||
        isEditableTarget(event.target) ||
        !isForwardedShortcut(event)
      ) {
        return;
      }

      event.preventDefault();
      window.parent.postMessage(
        {
          altKey: event.altKey,
          code: event.code,
          ctrlKey: event.ctrlKey,
          key: event.key,
          metaKey: event.metaKey,
          repeat: event.repeat,
          shiftKey: event.shiftKey,
          type: MESSAGE_TYPE,
        } satisfies ForwardedHotkey,
        window.location.origin
      );
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  return null;
};
