"use client";

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

export const ThemeConfigurationProvider = ({
  children,
}: React.PropsWithChildren) => {
  const config = useConfig();
  const {
    primaryColor,
    baseColor,
    borderRadius,
    fontHeading,
    fontSans,
    primaryTone,
  } = config;

  React.useEffect(() => {
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

  const setBaseColor = React.useCallback(
    (baseColor: BaseColor) => {
      updateConfig({ baseColor });
    },
    [updateConfig]
  );

  const setPrimaryColor = React.useCallback(
    (primaryColor: PrimaryColor) => {
      updateConfig({ primaryColor });
    },
    [updateConfig]
  );

  const setPrimaryTone = React.useCallback(
    (primaryTone: PrimaryTone) => {
      updateConfig({ primaryTone });
    },
    [updateConfig]
  );

  const setFontSans = React.useCallback(
    (fontSans: ThemeFontName) => {
      updateConfig({ fontSans });
    },
    [updateConfig]
  );

  const setFontHeading = React.useCallback(
    (fontHeading: ThemeFontName) => {
      updateConfig({ fontHeading });
    },
    [updateConfig]
  );

  const setBorderRadius = React.useCallback(
    (borderRadius: BorderRadius) => {
      updateConfig({ borderRadius });
    },
    [updateConfig]
  );

  const applyPreset = React.useCallback(
    (preset: ThemePreset) => {
      updateConfig(applyThemePreset(preset));
    },
    [updateConfig]
  );

  const randomize = React.useCallback(() => {
    updateConfig(randomizeThemeConfig);
  }, [updateConfig]);

  const reset = React.useCallback(() => {
    updateConfig(resetThemeConfig);
  }, [updateConfig]);

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
