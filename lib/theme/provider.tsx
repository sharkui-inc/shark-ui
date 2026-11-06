"use client";

import { useSetAtom } from "jotai";
import { useAtomValueRawSync } from "jotai/react";
import React from "react";
import { useConfig, useUpdateConfig } from "@/store/config";
import { applyThemeVisual } from "./apply";
import {
  applyThemePreset,
  type BaseColor,
  type BorderRadius,
  getThemeLocks,
  isDefaultThemeConfig,
  type PrimaryColor,
  type PrimaryTone,
  randomizeThemeConfig,
  resetThemeConfig,
  type ThemeLockKey,
  type ThemePreset,
} from "./config";
import type { ThemeFontName } from "./fonts";
import {
  isEmbeddedThemeFrame,
  mergeThemeVisual,
  PREVIEW_OVERRIDE_DEBOUNCE_MS,
  publishThemeVisual,
  subscribeThemeVisual,
  type ThemePreviewPatch,
  type ThemeVisual,
  themePreviewAtom,
} from "./preview";

export type { ThemePreviewPatch } from "./preview";

const subscribeNoop = () => () => undefined;

const useHasHydrated = () =>
  React.useSyncExternalStore<boolean>(
    subscribeNoop,
    () => true,
    () => false
  );

export const ThemeConfigurationProvider = ({
  children,
}: React.PropsWithChildren) => {
  const config = useConfig();
  const localPreview = useAtomValueRawSync(themePreviewAtom);
  const [iframeVisual, setIframeVisual] = React.useState<ThemeVisual | null>(
    null
  );
  const embedded = isEmbeddedThemeFrame();

  React.useEffect(() => {
    if (!embedded) {
      return;
    }

    return subscribeThemeVisual(setIframeVisual);
  }, [embedded]);

  const visual =
    embedded && iframeVisual !== null
      ? iframeVisual
      : mergeThemeVisual(config, localPreview);
  const {
    baseColor,
    borderRadius,
    fontHeading,
    fontSans,
    primaryColor,
    primaryTone,
  } = visual;

  React.useEffect(() => {
    const nextVisual = {
      baseColor,
      borderRadius,
      fontHeading,
      fontSans,
      primaryColor,
      primaryTone,
    };

    applyThemeVisual(nextVisual);

    if (!isEmbeddedThemeFrame()) {
      publishThemeVisual(nextVisual);
    }
  }, [
    baseColor,
    borderRadius,
    fontHeading,
    fontSans,
    primaryColor,
    primaryTone,
  ]);

  return children;
};

export const useThemeCustomization = () => {
  const config = useConfig();
  const updateConfig = useUpdateConfig();
  const setPreview = useSetAtom(themePreviewAtom);
  const previewTimeoutRef = React.useRef<number | undefined>(undefined);
  const hasHydrated = useHasHydrated();
  const isDefault = hasHydrated && isDefaultThemeConfig(config);
  const locks = getThemeLocks(config);

  const clearPreviewTimeout = () => {
    window.clearTimeout(previewTimeoutRef.current);
    previewTimeoutRef.current = undefined;
  };

  React.useEffect(
    () => () => {
      window.clearTimeout(previewTimeoutRef.current);
    },
    []
  );

  const clearThemePreview = () => {
    clearPreviewTimeout();
    setPreview(null);
  };

  const previewTheme = (patch: ThemePreviewPatch) => {
    clearPreviewTimeout();
    previewTimeoutRef.current = window.setTimeout(() => {
      previewTimeoutRef.current = undefined;
      setPreview(patch);
    }, PREVIEW_OVERRIDE_DEBOUNCE_MS);
  };

  const commitConfig = (update: Parameters<typeof updateConfig>[0]) => {
    clearThemePreview();
    updateConfig(update);
  };

  const setBaseColor = (baseColor: BaseColor) => commitConfig({ baseColor });

  const setPrimaryColor = (primaryColor: PrimaryColor) =>
    commitConfig({ primaryColor });

  const setPrimaryTone = (primaryTone: PrimaryTone) =>
    commitConfig({ primaryTone });

  const setFontSans = (fontSans: ThemeFontName) => commitConfig({ fontSans });

  const setFontHeading = (fontHeading: ThemeFontName) =>
    commitConfig({ fontHeading });

  const setBorderRadius = (borderRadius: BorderRadius) =>
    commitConfig({ borderRadius });

  const applyPreset = (preset: ThemePreset) =>
    commitConfig(applyThemePreset(preset));

  const randomize = () => commitConfig(randomizeThemeConfig);

  const reset = () => commitConfig(resetThemeConfig);

  const toggleLock = (lockKey: ThemeLockKey) => {
    updateConfig((currentConfig) => {
      const themeLocks = getThemeLocks(currentConfig);

      return {
        themeLocks: {
          ...themeLocks,
          [lockKey]: !themeLocks[lockKey],
        },
      };
    });
  };

  return {
    applyPreset,
    clearThemePreview,
    config,
    isDefault,
    locks,
    previewTheme,
    randomize,
    reset,
    setBaseColor,
    setBorderRadius,
    setFontHeading,
    setFontSans,
    setPrimaryColor,
    setPrimaryTone,
    toggleLock,
  };
};
