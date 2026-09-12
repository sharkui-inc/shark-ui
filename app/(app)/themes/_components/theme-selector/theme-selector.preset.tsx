"use client";

import { createListCollection } from "@ark-ui/react";
import {
  getActiveThemePreset,
  getCustomThemeSwatchCss,
  THEME_PRESET_FIELD,
  THEME_PRESETS,
} from "@/lib/theme/config";
import { useThemeCustomization } from "@/lib/theme/provider";
import { cn } from "@/lib/utils";
import { ThemeSelectorField } from "./theme-selector.field";

const collection = createListCollection({
  items: THEME_PRESETS.map((preset) => ({
    ...preset,
    value: preset.label,
  })),
});

export const ThemeSelectorPreset = () => {
  const { applyPreset, config } = useThemeCustomization();
  const activePreset = getActiveThemePreset(config);

  return (
    <ThemeSelectorField
      collection={collection}
      description={THEME_PRESET_FIELD.description}
      label={THEME_PRESET_FIELD.label}
      onValueChange={({ value }) => {
        const [next] = value;
        const preset = collection.items.find((item) => item.value === next);
        if (preset) {
          applyPreset(preset);
        }
      }}
      placeholder="Custom"
      renderItem={(item) => (
        <div className="flex items-center gap-2">
          <span
            aria-hidden="true"
            className={cn("size-4 rounded-full", item.swatchClass)}
          />
          {item.label}
        </div>
      )}
      trigger={
        <span
          aria-hidden="true"
          className={cn(
            "size-4 shrink-0 rounded-full",
            activePreset?.swatchClass,
            !activePreset && "ring-1 ring-border ring-inset"
          )}
          style={
            activePreset
              ? undefined
              : { backgroundImage: getCustomThemeSwatchCss(config) }
          }
        />
      }
      value={activePreset?.label ? [activePreset.label] : []}
    />
  );
};
