"use client";

import { createGridCollection } from "@ark-ui/react/collection";
import { ChevronsUpDownIcon } from "lucide-react";
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
import { Button } from "@/registry/react/components/button";
import { Field } from "@/registry/react/components/field";
import {
  Listbox,
  ListboxBody,
  ListboxContent,
  ListboxItem,
  ListboxItemText,
} from "@/registry/react/components/listbox";
import {
  Popover,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
} from "@/registry/react/components/popover";
import { ThemeSelectorHeading } from "./theme-selector.heading";

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

export const ThemeSelectorFont = ({ slot }: { slot: ThemeFontSlot }) => {
  const { config, setFontHeading, setFontSans } = useThemeCustomization();
  const detail = THEME_FONT_SLOTS[slot];
  const collection = collections[slot];
  const value = (() => {
    switch (slot) {
      case "heading":
        return config.fontHeading;
      case "sans":
        return config.fontSans;
      default: {
        const _exhaustive: never = slot;
        return _exhaustive;
      }
    }
  })();
  const selectedFont = getThemeFont(value);
  const [isOpen, setIsOpen] = React.useState(false);
  const [highlightedValue, setHighlightedValue] = React.useState<string | null>(
    value
  );

  const handleValueChange = ({ value: next }: { value: string[] }) => {
    const [selected] = next;
    if (!selected) {
      return;
    }

    const font = selected as ThemeFontName;

    switch (slot) {
      case "heading":
        setFontHeading(font);
        return;
      case "sans":
        setFontSans(font);
        return;
      default: {
        const _exhaustive: never = slot;
        return _exhaustive;
      }
    }
  };

  React.useEffect(() => {
    loadThemeFontPreviews();
  }, []);

  const handleOpenChange = ({ open }: { open: boolean }) => {
    if (open) {
      setHighlightedValue(value);
    }

    setIsOpen(open);
  };

  return (
    <Field>
      <ThemeSelectorHeading
        description={detail.description}
        lockKey={detail.lockKey}
        title={detail.label}
      />

      <Popover
        initialFocusEl={() =>
          document.querySelector<HTMLElement>(
            `[data-theme-font-listbox="${slot}"]`
          )
        }
        modal={false}
        onOpenChange={handleOpenChange}
        open={isOpen}
      >
        <PopoverTrigger asChild>
          <Button
            className="w-full justify-between"
            clickEffect={false}
            variant="outline"
          >
            <span className="flex min-w-0 flex-1 items-center justify-start gap-2 text-start">
              <span
                aria-hidden="true"
                className="w-4 shrink-0 text-center text-sm"
                style={{ fontFamily: selectedFont.family }}
              >
                Aa
              </span>
              <span className="min-w-0 truncate">{selectedFont.label}</span>
            </span>
            <ChevronsUpDownIcon aria-hidden className="text-muted-foreground" />
          </Button>
        </PopoverTrigger>

        <PopoverContent className="sm:max-w-sm">
          <PopoverHeader
            description={detail.description}
            title={detail.label}
          />

          <Listbox
            collection={collection}
            highlightedValue={highlightedValue}
            onHighlightChange={({ highlightedValue: next }) =>
              setHighlightedValue(next)
            }
            onValueChange={handleValueChange}
            selectOnHighlight
            value={[value]}
          >
            <ListboxContent
              className="max-h-80 p-(--space) pt-1"
              data-theme-font-listbox={slot}
            >
              <ListboxBody className="grid grid-cols-[repeat(var(--column-count),1fr)] gap-3">
                {collection.items.map((item) => (
                  <ListboxItem
                    className="relative flex flex-col items-center justify-center gap-2 rounded-2xl border px-2 py-3 text-center hover:border-primary/64 hover:bg-transparent data-[state=checked]:border-primary data-highlighted:border-primary/64 data-[state=checked]:bg-transparent data-highlighted:bg-transparent data-[state=checked]:text-foreground"
                    item={item}
                    key={item.value}
                    style={{ fontFamily: item.family }}
                  >
                    <ListboxItemText className="flex-none font-medium text-xl">
                      Ag
                    </ListboxItemText>
                    <span className="w-full truncate text-[0.625rem] text-muted-foreground group-data-[state=checked]/listbox-item:text-foreground">
                      {item.label}
                    </span>
                  </ListboxItem>
                ))}
              </ListboxBody>
            </ListboxContent>
          </Listbox>
        </PopoverContent>
      </Popover>
    </Field>
  );
};
