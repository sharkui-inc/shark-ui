"use client";

import { createGridCollection } from "@ark-ui/react/collection";
import { BORDER_RADIUS } from "@/lib/theme/catalog";
import { type BorderRadius, THEME_FIELDS } from "@/lib/theme/config";
import { useThemeCustomization } from "@/lib/theme/provider";
import {
  ListboxItem,
  ListboxItemText,
} from "@/registry/react/components/listbox";
import { ThemeSelectorPopoverGrid } from "./theme-selector.popover-grid";

const collection = createGridCollection({
  columnCount: 3,
  items: [...BORDER_RADIUS],
});

export const ThemeSelectorRadius = () => {
  const { clearThemePreview, config, previewTheme, setBorderRadius } =
    useThemeCustomization();

  const selectedRadius = collection.items.find(
    (item) => item.value === config.borderRadius
  );

  return (
    <ThemeSelectorPopoverGrid
      collection={collection}
      contentClassName="sm:max-w-80"
      description={THEME_FIELDS.borderRadius.description}
      label={THEME_FIELDS.borderRadius.label}
      lockKey="borderRadius"
      onPreview={(next) => {
        if (!next) {
          clearThemePreview();
          return;
        }

        previewTheme({ borderRadius: next as BorderRadius });
      }}
      onValueChange={({ value }) => {
        const [selected] = value;
        if (selected) {
          setBorderRadius(selected as BorderRadius);
        }
      }}
      trigger={
        <>
          <span
            aria-hidden
            className="size-4 shrink-0 bg-primary"
            style={{ borderRadius: selectedRadius?.cssVars.radius }}
          />
          <span className="truncate">{selectedRadius?.description}</span>
        </>
      }
      value={config.borderRadius}
    >
      {collection.items.map((item) => (
        <ListboxItem
          className="relative flex flex-col items-center justify-center gap-2 rounded-xl border border-input bg-muted/32 p-2.5 text-center hover:border-primary/64 hover:bg-muted/32 hover:text-foreground data-[state=checked]:border-primary data-highlighted:border-primary/64 data-[state=checked]:bg-muted/32 data-highlighted:bg-muted/32 data-[state=checked]:text-foreground data-highlighted:text-foreground"
          item={item}
          key={item.value}
          showIndicator={false}
        >
          <span
            aria-hidden
            className="size-9 bg-primary"
            style={{ borderRadius: item.cssVars.radius }}
          />
          <ListboxItemText className="flex-none text-muted-foreground text-xs group-data-[state=checked]/listbox-item:text-foreground">
            {item.value}
          </ListboxItemText>
        </ListboxItem>
      ))}
    </ThemeSelectorPopoverGrid>
  );
};
