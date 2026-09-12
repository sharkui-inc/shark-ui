"use client";

import { createListCollection } from "@ark-ui/react";
import {
  getPrimaryFillCss,
  PRIMARY_COLORS,
  withDefaultFirst,
} from "@/lib/theme/catalog";
import {
  DEFAULT_PRIMARY_COLOR,
  DEFAULT_PRIMARY_TONE,
  type PrimaryColor,
  type PrimaryTone,
  THEME_FIELDS,
} from "@/lib/theme/config";
import { useThemeCustomization } from "@/lib/theme/provider";
import { ThemeSelectorField } from "./theme-selector.field";

const collection = createListCollection({
  items: withDefaultFirst(PRIMARY_COLORS, DEFAULT_PRIMARY_COLOR),
});

const renderPrimaryItem = (
  item: (typeof PRIMARY_COLORS)[number],
  primaryTone: PrimaryTone
) => (
  <div className="flex items-center gap-2">
    <div
      aria-hidden="true"
      className="size-4 rounded-full"
      style={{ backgroundColor: getPrimaryFillCss(item.value, primaryTone) }}
    />
    {item.label}
  </div>
);

export const ThemeSelectorPrimary = () => {
  const { config, setPrimaryColor } = useThemeCustomization();
  const primaryTone = config.primaryTone ?? DEFAULT_PRIMARY_TONE;

  return (
    <ThemeSelectorField
      collection={collection}
      description={THEME_FIELDS.primaryColor.description}
      label={THEME_FIELDS.primaryColor.label}
      lockKey="primaryColor"
      onValueChange={({ value }) => {
        const [next] = value;
        if (next) {
          setPrimaryColor(next as PrimaryColor);
        }
      }}
      placeholder="Select a primary color"
      renderItem={(item) => renderPrimaryItem(item, primaryTone)}
      trigger={
        <div
          aria-hidden="true"
          className="size-4 rounded-full"
          style={{
            backgroundColor: getPrimaryFillCss(
              config.primaryColor,
              primaryTone
            ),
          }}
        />
      }
      value={[config.primaryColor]}
    />
  );
};
