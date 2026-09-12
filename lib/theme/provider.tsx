"use client";

import { type PropsWithChildren, useCallback, useEffect } from "react";
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

export const ThemeConfigurationProvider = ({ children }: PropsWithChildren) => {
  const config = useConfig();
  const {
    primaryColor,
    baseColor,
    borderRadius,
    fontHeading,
    fontSans,
    primaryTone,
  } = config;

  useEffect(() => {
    applyBodyThemeClasses({
      baseColor,
      borderRadius,
      primaryColor,
      primaryTone,
    });
    applyThemeFonts({ fontHeading, fontSans });
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
  const isDefault = isDefaultThemeConfig(config);
  const locks = getThemeLocks(config);

  const setBaseColor = useCallback(
    (baseColor: BaseColor) => {
      updateConfig({ baseColor });
    },
    [updateConfig]
  );

  const setPrimaryColor = useCallback(
    (primaryColor: PrimaryColor) => {
      updateConfig({ primaryColor });
    },
    [updateConfig]
  );

  const setPrimaryTone = useCallback(
    (primaryTone: PrimaryTone) => {
      updateConfig({ primaryTone });
    },
    [updateConfig]
  );

  const setFontSans = useCallback(
    (fontSans: ThemeFontName) => {
      updateConfig({ fontSans });
    },
    [updateConfig]
  );

  const setFontHeading = useCallback(
    (fontHeading: ThemeFontName) => {
      updateConfig({ fontHeading });
    },
    [updateConfig]
  );

  const setBorderRadius = useCallback(
    (borderRadius: BorderRadius) => {
      updateConfig({ borderRadius });
    },
    [updateConfig]
  );

  const applyPreset = useCallback(
    (preset: ThemePreset) => {
      updateConfig(applyThemePreset(preset));
    },
    [updateConfig]
  );

  const randomize = useCallback(() => {
    updateConfig(randomizeThemeConfig);
  }, [updateConfig]);

  const reset = useCallback(() => {
    updateConfig(resetThemeConfig);
  }, [updateConfig]);

  const toggleLock = useCallback(
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
    config,
    isDefault,
    locks,
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
