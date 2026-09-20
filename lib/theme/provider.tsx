"use client";

import { useSetAtom } from "jotai";
import { useAtomValueRawSync } from "jotai/react";
import React from "react";
import { useConfig, useUpdateConfig } from "@/store/config";
import { applyBodyThemeClasses, applyThemeFonts } from "./apply";
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

const applyThemeVisual = (visual: ThemeVisual) => {
  applyBodyThemeClasses({
    baseColor: visual.baseColor,
    borderRadius: visual.borderRadius,
    primaryColor: visual.primaryColor,
    primaryTone: visual.primaryTone,
  });
  applyThemeFonts({
    fontHeading: visual.fontHeading,
    fontSans: visual.fontSans,
  });
};

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

    if (!embedded) {
      publishThemeVisual(nextVisual);
    }
  }, [
    embedded,
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
  const [hasHydrated, setHasHydrated] = React.useState(false);
  const isDefault = hasHydrated && isDefaultThemeConfig(config);
  const locks = getThemeLocks(config);

  React.useEffect(() => {
    setHasHydrated(true);
  }, []);

  React.useEffect(
    () => () => {
      if (previewTimeoutRef.current !== undefined) {
        window.clearTimeout(previewTimeoutRef.current);
      }
    },
    []
  );

  const clearThemePreview = React.useCallback(() => {
    if (previewTimeoutRef.current !== undefined) {
      window.clearTimeout(previewTimeoutRef.current);
      previewTimeoutRef.current = undefined;
    }

    setPreview(null);
  }, [setPreview]);

  const previewTheme = React.useCallback(
    (patch: ThemePreviewPatch) => {
      if (previewTimeoutRef.current !== undefined) {
        window.clearTimeout(previewTimeoutRef.current);
      }

      previewTimeoutRef.current = window.setTimeout(() => {
        previewTimeoutRef.current = undefined;
        setPreview(patch);
      }, PREVIEW_OVERRIDE_DEBOUNCE_MS);
    },
    [setPreview]
  );

  const commitConfig = React.useCallback(
    (update: Parameters<typeof updateConfig>[0]) => {
      clearThemePreview();
      updateConfig(update);
    },
    [clearThemePreview, updateConfig]
  );

  const setBaseColor = React.useCallback(
    (baseColor: BaseColor) => {
      commitConfig({ baseColor });
    },
    [commitConfig]
  );

  const setPrimaryColor = React.useCallback(
    (primaryColor: PrimaryColor) => {
      commitConfig({ primaryColor });
    },
    [commitConfig]
  );

  const setPrimaryTone = React.useCallback(
    (primaryTone: PrimaryTone) => {
      commitConfig({ primaryTone });
    },
    [commitConfig]
  );

  const setFontSans = React.useCallback(
    (fontSans: ThemeFontName) => {
      commitConfig({ fontSans });
    },
    [commitConfig]
  );

  const setFontHeading = React.useCallback(
    (fontHeading: ThemeFontName) => {
      commitConfig({ fontHeading });
    },
    [commitConfig]
  );

  const setBorderRadius = React.useCallback(
    (borderRadius: BorderRadius) => {
      commitConfig({ borderRadius });
    },
    [commitConfig]
  );

  const applyPreset = React.useCallback(
    (preset: ThemePreset) => {
      commitConfig(applyThemePreset(preset));
    },
    [commitConfig]
  );

  const randomize = React.useCallback(() => {
    commitConfig(randomizeThemeConfig);
  }, [commitConfig]);

  const reset = React.useCallback(() => {
    commitConfig(resetThemeConfig);
  }, [commitConfig]);

  const toggleLock = React.useCallback(
    (lockKey: ThemeLockKey) => {
      updateConfig((currentConfig) => {
        const themeLocks = getThemeLocks(currentConfig);

        return {
          themeLocks: {
            ...themeLocks,
            [lockKey]: !themeLocks[lockKey],
          },
        };
      });
    },
    [updateConfig]
  );

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
