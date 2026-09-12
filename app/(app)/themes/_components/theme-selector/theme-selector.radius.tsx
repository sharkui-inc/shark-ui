"use client";

import { createGridCollection } from "@ark-ui/react/collection";
import { ChevronsUpDownIcon } from "lucide-react";
import React from "react";
import { BORDER_RADIUS } from "@/lib/theme/catalog";
import { type BorderRadius, THEME_FIELDS } from "@/lib/theme/config";
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

const collection = createGridCollection({
  columnCount: 3,
  items: [...BORDER_RADIUS],
});

export const ThemeSelectorRadius = () => {
  const { config, setBorderRadius } = useThemeCustomization();

  const [isOpen, setIsOpen] = React.useState(false);
  const [highlightedRadius, setHighlightedRadius] = React.useState<
    string | null
  >(config.borderRadius);
  const selectedRadius = collection.items.find(
    (item) => item.value === config.borderRadius
  );

  const handleValueChange = ({ value }: { value: string[] }) => {
    const [selected] = value;
    if (!selected) {
      return;
    }

    setBorderRadius(selected as BorderRadius);
  };

  const handleOpenChange = ({ open }: { open: boolean }) => {
    if (open) {
      setHighlightedRadius(config.borderRadius);
    }

    setIsOpen(open);
  };

  return (
    <Field>
      <ThemeSelectorHeading
        description={THEME_FIELDS.borderRadius.description}
        lockKey="borderRadius"
        title={THEME_FIELDS.borderRadius.label}
      />

      <Popover
        initialFocusEl={() =>
          document.querySelector<HTMLElement>("[data-theme-radius-listbox]")
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
            <span className="flex min-w-0 items-center gap-2">
              <span
                aria-hidden="true"
                className="size-4 shrink-0 bg-primary"
                style={{ borderRadius: selectedRadius?.cssVars.radius }}
              />
              <span className="truncate">{selectedRadius?.description}</span>
            </span>
            <ChevronsUpDownIcon aria-hidden className="text-muted-foreground" />
          </Button>
        </PopoverTrigger>

        <PopoverContent className="sm:max-w-80">
          <PopoverHeader
            description={THEME_FIELDS.borderRadius.description}
            title={THEME_FIELDS.borderRadius.label}
          />

          <Listbox
            collection={collection}
            highlightedValue={highlightedRadius}
            onHighlightChange={({ highlightedValue }) =>
              setHighlightedRadius(highlightedValue)
            }
            onValueChange={handleValueChange}
            selectOnHighlight
            value={[config.borderRadius]}
          >
            <ListboxContent
              className="p-(--space) pt-1"
              data-theme-radius-listbox
            >
              <ListboxBody className="grid grid-cols-[repeat(var(--column-count),1fr)] gap-2">
                {collection.items.map((item) => (
                  <ListboxItem
                    className="relative flex flex-col items-center justify-center gap-2 rounded-xl border border-input bg-muted/40 p-2.5 text-center hover:bg-muted/40 hover:text-foreground data-[state=checked]:border-primary data-highlighted:border-primary/64 data-[state=checked]:bg-primary/10 data-highlighted:bg-primary/10 data-[state=checked]:text-foreground data-highlighted:text-foreground data-[state=checked]:ring-1 data-[state=checked]:ring-primary/48 data-[state=checked]:ring-inset"
                    item={item}
                    key={item.value}
                  >
                    <span
                      aria-hidden="true"
                      className="size-9 bg-primary"
                      style={{ borderRadius: item.cssVars.radius }}
                    />
                    <ListboxItemText className="flex-none text-muted-foreground text-xs group-data-[state=checked]/listbox-item:text-foreground">
                      {item.value}
                    </ListboxItemText>
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
