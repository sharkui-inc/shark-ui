"use client";

import { createListCollection } from "@ark-ui/react";
import { BASE_COLORS, withDefaultFirst } from "@/lib/theme/catalog";
import {
  type BaseColor,
  DEFAULT_BASE_COLOR,
  THEME_FIELDS,
} from "@/lib/theme/config";
import { useThemeCustomization } from "@/lib/theme/provider";
import { cn } from "@/lib/utils";
import { ThemeSelectorField } from "./theme-selector.field";

const collection = createListCollection({
  items: withDefaultFirst(BASE_COLORS, DEFAULT_BASE_COLOR),
});

const renderBaseItem = (item: (typeof BASE_COLORS)[number]) => (
  <div className="flex items-center gap-2">
    <div aria-hidden="true" className={cn("size-4 rounded-full", item.hex)} />
    {item.label}
  </div>
);

export const ThemeSelectorBase = () => {
  const { config, setBaseColor } = useThemeCustomization();
  const current = collection.items.find(
    (item) => item.value === config.baseColor
  );

  return (
    <ThemeSelectorField
      collection={collection}
      description={THEME_FIELDS.baseColor.description}
      label={THEME_FIELDS.baseColor.label}
      lockKey="baseColor"
      onValueChange={({ value }) => {
        const [next] = value;
        if (next) {
          setBaseColor(next as BaseColor);
        }
      }}
      placeholder="Select a base color"
      renderItem={renderBaseItem}
      trigger={
        <div
          aria-hidden="true"
          className={cn(
            "size-4 rounded-full",
            current?.hex ?? "bg-neutral-500"
          )}
        />
      }
      value={[config.baseColor]}
    />
  );
};
