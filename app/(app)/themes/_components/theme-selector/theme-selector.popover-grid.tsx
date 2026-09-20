"use client";

import type { GridCollection } from "@ark-ui/react/collection";
import { ChevronsUpDownIcon } from "lucide-react";
import React from "react";
import type { ThemeLockKey } from "@/lib/theme/config";
import { Button } from "@/registry/react/components/button";
import { Field } from "@/registry/react/components/field";
import { Listbox, ListboxContent } from "@/registry/react/components/listbox";
import {
  Popover,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
} from "@/registry/react/components/popover";
import { ThemeSelectorHeading } from "./theme-selector.heading";
import { useThemeHighlightPreview } from "./theme-selector.preview";

interface ThemeSelectorPopoverGridProps {
  children: React.ReactNode;
  collection: GridCollection;
  contentClassName?: string;
  description?: string;
  label: string;
  lockKey?: ThemeLockKey;
  onPreview: (value: string | null) => void;
  onValueChange: (details: { value: string[] }) => void;
  trigger: React.ReactNode;
  value: string;
}

export const ThemeSelectorPopoverGrid = (
  props: ThemeSelectorPopoverGridProps
) => {
  const {
    children,
    collection,
    contentClassName,
    description,
    label,
    lockKey,
    onPreview,
    onValueChange,
    trigger,
    value,
  } = props;

  const [isOpen, setIsOpen] = React.useState(false);
  const [highlightedValue, setHighlightedValue] = React.useState<string | null>(
    value
  );
  const contentRef = React.useRef<HTMLDivElement | null>(null);
  const preview = useThemeHighlightPreview(onPreview);

  const handleOpenChange = ({ open }: { open: boolean }) => {
    if (open) {
      setHighlightedValue(value);
    } else {
      preview.clearPreview();
    }

    setIsOpen(open);
  };

  const handleHighlightChange = ({
    highlightedValue: next,
  }: {
    highlightedValue: string | null;
  }) => {
    setHighlightedValue(next);
    preview.onHighlightChange({ highlightedValue: next });
  };

  return (
    <Field>
      <ThemeSelectorHeading
        description={description}
        lockKey={lockKey}
        title={label}
      />

      <Popover
        initialFocusEl={() => contentRef.current}
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
              {trigger}
            </span>
            <ChevronsUpDownIcon aria-hidden className="text-muted-foreground" />
          </Button>
        </PopoverTrigger>

        <PopoverContent className={contentClassName}>
          <PopoverHeader description={description} title={label} />

          <Listbox
            collection={collection}
            highlightedValue={highlightedValue}
            onHighlightChange={handleHighlightChange}
            onValueChange={onValueChange}
            value={[value]}
          >
            <ListboxContent
              className="max-h-80 p-0"
              onKeyDownCapture={preview.onKeyDownCapture}
              onPointerLeave={preview.onPointerLeaveContent}
              onPointerMove={preview.onPointerMoveContent}
              ref={contentRef}
            >
              <div
                className="grid grid-cols-[repeat(var(--column-count),1fr)] gap-3 p-(--space) pt-1"
                style={
                  {
                    "--column-count": collection.columnCount,
                  } as React.CSSProperties
                }
              >
                {children}
              </div>
            </ListboxContent>
          </Listbox>
        </PopoverContent>
      </Popover>
    </Field>
  );
};
