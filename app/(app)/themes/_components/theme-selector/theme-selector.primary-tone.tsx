"use client";

import React from "react";
import { ThemePrimaryToneSwitch } from "@/components/theme-primary-tone-switch";
import { DEFAULT_PRIMARY_TONE, THEME_FIELDS } from "@/lib/theme/config";
import { canPointerPreview } from "@/lib/theme/preview";
import { useThemeCustomization } from "@/lib/theme/provider";
import { Field } from "@/registry/react/components/field";
import { useHotkey } from "@/registry/react/components/hotkeys";
import { ThemeSelectorHeading } from "./theme-selector.heading";

export const ThemeSelectorPrimaryTone = () => {
  const { clearThemePreview, config, locks, previewTheme, setPrimaryTone } =
    useThemeCustomization();
  const primaryTone = config.primaryTone ?? DEFAULT_PRIMARY_TONE;

  const handleToggleTone = React.useCallback(() => {
    if (locks.primaryTone) {
      return;
    }

    setPrimaryTone(config.primaryTone === "light" ? "dark" : "light");
  }, [config, locks.primaryTone, setPrimaryTone]);

  useHotkey({
    action: handleToggleTone,
    hotkey: "t",
    options: { preventDefault: true },
  });

  return (
    <Field className="w-fit">
      <ThemeSelectorHeading
        description={THEME_FIELDS.primaryTone.description}
        hotkey="T"
        lockKey="primaryTone"
        title={THEME_FIELDS.primaryTone.label}
      />
      <ThemePrimaryToneSwitch
        className="h-9 max-h-9 min-h-9 w-[4.5rem] rounded-md md:h-8 md:max-h-8 md:min-h-8 md:w-16"
        onPointerEnterTone={(tone) => {
          if (canPointerPreview()) {
            previewTheme({ primaryTone: tone });
          }
        }}
        onPointerLeave={() => {
          if (canPointerPreview()) {
            clearThemePreview();
          }
        }}
        onValueChange={setPrimaryTone}
        value={primaryTone}
      />
    </Field>
  );
};
