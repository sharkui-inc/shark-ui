import { atom } from "jotai";
import type { ThemePresetPatch } from "./config";

export type ThemePreviewPatch = Partial<ThemePresetPatch>;
export type ThemeVisual = ThemePresetPatch;

export const THEME_VISUAL_MESSAGE_TYPE = "shark-ui:theme-visual" as const;

export const PREVIEW_OVERRIDE_DEBOUNCE_MS = 50;

export const themePreviewAtom = atom<ThemePreviewPatch | null>(null);

interface ThemeVisualMessage {
  type: typeof THEME_VISUAL_MESSAGE_TYPE;
  visual: ThemeVisual;
}

let lastPublishedVisual: ThemeVisual | null = null;

export const canPointerPreview = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(hover: hover) and (pointer: fine)").matches;

export const isEmbeddedThemeFrame = () =>
  typeof window !== "undefined" && window.parent !== window;

export const toThemeVisual = (
  source: ThemePresetPatch | (ThemePresetPatch & Record<string, unknown>)
): ThemeVisual => ({
  baseColor: source.baseColor,
  borderRadius: source.borderRadius,
  fontHeading: source.fontHeading,
  fontSans: source.fontSans,
  primaryColor: source.primaryColor,
  primaryTone: source.primaryTone,
});

export const mergeThemeVisual = (
  committed: ThemePresetPatch,
  preview: ThemePreviewPatch | null
): ThemeVisual =>
  preview
    ? { ...toThemeVisual(committed), ...preview }
    : toThemeVisual(committed);

const isThemeVisual = (value: unknown): value is ThemeVisual => {
  if (typeof value !== "object" || value === null || Array.isArray(value)) {
    return false;
  }

  const record = value as Record<string, unknown>;

  return (
    typeof record.baseColor === "string" &&
    typeof record.borderRadius === "string" &&
    typeof record.fontHeading === "string" &&
    typeof record.fontSans === "string" &&
    typeof record.primaryColor === "string" &&
    typeof record.primaryTone === "string"
  );
};

export const isThemeVisualMessage = (
  value: unknown
): value is ThemeVisualMessage => {
  if (typeof value !== "object" || value === null) {
    return false;
  }

  const message = value as Record<string, unknown>;

  return (
    message.type === THEME_VISUAL_MESSAGE_TYPE && isThemeVisual(message.visual)
  );
};

export const sendThemeVisualToIframe = (
  iframe: HTMLIFrameElement,
  visual: ThemeVisual
) => {
  iframe.contentWindow?.postMessage(
    {
      type: THEME_VISUAL_MESSAGE_TYPE,
      visual,
    } satisfies ThemeVisualMessage,
    window.location.origin
  );
};

export const publishThemeVisual = (visual: ThemeVisual) => {
  if (typeof document === "undefined") {
    return;
  }

  lastPublishedVisual = visual;

  for (const iframe of document.querySelectorAll("iframe")) {
    sendThemeVisualToIframe(iframe, visual);
  }
};

export const republishThemeVisualToIframe = (iframe: HTMLIFrameElement) => {
  if (!lastPublishedVisual) {
    return;
  }

  sendThemeVisualToIframe(iframe, lastPublishedVisual);
};

export const subscribeThemeVisual = (
  onVisual: (visual: ThemeVisual) => void
) => {
  if (typeof window === "undefined") {
    return () => undefined;
  }

  const handleMessage = (event: MessageEvent) => {
    if (
      event.origin !== window.location.origin ||
      event.source !== window.parent ||
      !isThemeVisualMessage(event.data)
    ) {
      return;
    }

    onVisual(event.data.visual);
  };

  window.addEventListener("message", handleMessage);
  return () => window.removeEventListener("message", handleMessage);
};
