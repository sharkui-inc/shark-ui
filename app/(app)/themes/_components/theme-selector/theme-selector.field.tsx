"use client";

import type { Select as ArkSelect } from "@ark-ui/react/select";
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

interface ThemeSelectorFieldProps {
  description?: string;
  label: string;
  lockKey?: ThemeLockKey;
  placeholder?: string;
  renderItem: (item: ArkSelect.CollectionItem) => React.ReactNode;
  trigger?: React.ReactNode;
}

export const ThemeSelectorField: ArkSelect.RootComponent<
  ThemeSelectorFieldProps
> = (props) => {
  const {
    collection,
    description,
    label,
    lockKey,
    onValueChange,
    placeholder,
    renderItem,
    trigger,
    value,
  } = props;

  return (
    <Field>
      <ThemeSelectorHeading
        description={description}
        lockKey={lockKey}
        title={label}
      />

      <Select
        collection={collection}
        onValueChange={onValueChange}
        value={value}
      >
        <SelectTrigger className="w-full">
          <span className="flex min-w-0 flex-1 items-center gap-2">
            {trigger}
            <SelectValue placeholder={placeholder} />
          </span>
        </SelectTrigger>
        <SelectContent>
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
