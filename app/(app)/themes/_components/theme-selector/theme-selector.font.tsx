"use client";

import { createGridCollection } from "@ark-ui/react/collection";
import React from "react";
import { loadThemeFontPreviews } from "@/lib/theme/apply";
import { withDefaultFirst } from "@/lib/theme/catalog";
import { THEME_FONT_SLOTS } from "@/lib/theme/config";
import {
  getThemeFont,
  type ThemeFontName,
  type ThemeFontSlot,
} from "@/lib/theme/fonts";
import { useThemeCustomization } from "@/lib/theme/provider";
import {
  ListboxItem,
  ListboxItemText,
} from "@/registry/react/components/listbox";
import { ThemeSelectorPopoverGrid } from "./theme-selector.popover-grid";

const collections = {
  heading: createGridCollection({
    columnCount: 3,
    items: withDefaultFirst(
      THEME_FONT_SLOTS.heading.fonts,
      THEME_FONT_SLOTS.heading.defaultValue
    ),
  }),
  sans: createGridCollection({
    columnCount: 3,
    items: withDefaultFirst(
      THEME_FONT_SLOTS.sans.fonts,
      THEME_FONT_SLOTS.sans.defaultValue
    ),
  }),
};

export const ThemeSelectorFont = (props: { slot: ThemeFontSlot }) => {
  const { slot } = props;
  const {
    clearThemePreview,
    config,
    previewTheme,
    setFontHeading,
    setFontSans,
  } = useThemeCustomization();
  const detail = THEME_FONT_SLOTS[slot];
  const collection = collections[slot];

  const slotApi = {
    heading: {
      commit: setFontHeading,
      preview: (font: ThemeFontName) => previewTheme({ fontHeading: font }),
      value: config.fontHeading,
    },
    sans: {
      commit: setFontSans,
      preview: (font: ThemeFontName) => previewTheme({ fontSans: font }),
      value: config.fontSans,
    },
  }[slot];

  const selectedFont = getThemeFont(slotApi.value);

  React.useEffect(() => {
    loadThemeFontPreviews();
  }, []);

  return (
    <ThemeSelectorPopoverGrid
      collection={collection}
      contentClassName="sm:max-w-sm"
      description={detail.description}
      label={detail.label}
      lockKey={detail.lockKey}
      onPreview={(next) => {
        if (!next) {
          clearThemePreview();
          return;
        }

        slotApi.preview(next as ThemeFontName);
      }}
      onValueChange={({ value: next }) => {
        const [selected] = next;
        if (selected) {
          slotApi.commit(selected as ThemeFontName);
        }
      }}
      trigger={
        <>
          <span
            aria-hidden
            className="w-4 shrink-0 text-center text-sm"
            style={{ fontFamily: selectedFont.family }}
          >
            Aa
          </span>
          <span className="min-w-0 truncate">{selectedFont.label}</span>
        </>
      }
      value={slotApi.value}
    >
      {collection.items.map((item) => (
        <ListboxItem
          className="relative flex flex-col items-center justify-center gap-2 rounded-2xl border px-2 py-3 text-center hover:border-primary/64 hover:bg-transparent data-[state=checked]:border-primary data-highlighted:border-primary/64 data-[state=checked]:bg-transparent data-highlighted:bg-transparent data-[state=checked]:text-foreground"
          item={item}
          key={item.value}
          showIndicator={false}
          style={{ fontFamily: item.family }}
        >
          <ListboxItemText className="flex-none font-medium text-xl">
            Ag
          </ListboxItemText>
          <span className="w-full min-w-0 self-stretch truncate text-center text-[0.625rem] text-muted-foreground group-data-[state=checked]/listbox-item:text-foreground">
            {item.label}
          </span>
        </ListboxItem>
      ))}
    </ThemeSelectorPopoverGrid>
  );
};
