"use client";

import type { CollectionItem, ListCollection } from "@ark-ui/react/collection";
import type React from "react";
import type { ThemeLockKey } from "@/lib/theme/config";
import { Field } from "@/registry/react/components/field";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/react/components/select";
import { ThemeSelectorHeading } from "./theme-selector.heading";
import { useThemeHighlightPreview } from "./theme-selector.preview";

interface ThemeSelectorFieldProps<T extends CollectionItem = CollectionItem> {
  collection: ListCollection<T>;
  description?: string;
  label: string;
  lockKey?: ThemeLockKey;
  onPreview?: (value: string | null) => void;
  onValueChange?: (details: { value: string[] }) => void;
  placeholder?: string;
  renderItem: (item: T) => React.ReactNode;
  trigger?: React.ReactNode;
  value?: string[];
}

export const ThemeSelectorField = <T extends CollectionItem>(
  props: ThemeSelectorFieldProps<T>
) => {
  const {
    collection,
    description,
    label,
    lockKey,
    onPreview,
    onValueChange,
    placeholder,
    renderItem,
    trigger,
    value,
  } = props;
  const preview = useThemeHighlightPreview(onPreview);

  return (
    <Field>
      <ThemeSelectorHeading
        description={description}
        lockKey={lockKey}
        title={label}
      />

      <Select
        collection={collection}
        onHighlightChange={preview.onHighlightChange}
        onOpenChange={({ open }) => {
          if (!open) {
            preview.clearPreview();
          }
        }}
        onValueChange={onValueChange}
        value={value}
      >
        <SelectTrigger className="w-full">
          <span className="flex min-w-0 flex-1 items-center gap-2">
            {trigger}
            <SelectValue placeholder={placeholder} />
          </span>
        </SelectTrigger>
        <SelectContent
          onKeyDownCapture={preview.onKeyDownCapture}
          onPointerLeave={preview.onPointerLeaveContent}
        >
          {collection.items.map((item) => (
            <SelectItem item={item} key={collection.getItemValue(item)}>
              {renderItem(item)}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </Field>
  );
};
