"use client";

import type { Select as ArkSelect } from "@ark-ui/react/select";
import React from "react";
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

const keyboardNavigationKeys = new Set(["ArrowDown", "ArrowUp", "End", "Home"]);

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
  const isKeyboardNavigation = React.useRef<boolean>(false);
  const keyboardNavigationTimeout = React.useRef<number | undefined>(undefined);

  React.useEffect(
    () => () => {
      if (keyboardNavigationTimeout.current !== undefined) {
        window.clearTimeout(keyboardNavigationTimeout.current);
      }
    },
    []
  );

  const handleKeyDownCapture = (event: React.KeyboardEvent<HTMLElement>) => {
    if (!keyboardNavigationKeys.has(event.key)) {
      return;
    }

    isKeyboardNavigation.current = true;
    if (keyboardNavigationTimeout.current !== undefined) {
      window.clearTimeout(keyboardNavigationTimeout.current);
    }
    keyboardNavigationTimeout.current = window.setTimeout(() => {
      isKeyboardNavigation.current = false;
    }, 0);
  };

  return (
    <Field>
      <ThemeSelectorHeading
        description={description}
        lockKey={lockKey}
        title={label}
      />

      <Select
        collection={collection}
        onHighlightChange={({ highlightedItem, highlightedValue }) => {
          if (isKeyboardNavigation.current === false) {
            return;
          }

          if (!(highlightedItem && highlightedValue)) {
            return;
          }

          onValueChange?.({
            items: [highlightedItem],
            value: [highlightedValue],
          });
        }}
        onKeyDownCapture={handleKeyDownCapture}
        onValueChange={onValueChange}
        value={value}
      >
        <SelectTrigger className="w-full">
          <span className="flex min-w-0 flex-1 items-center gap-2">
            {trigger}
            <SelectValue placeholder={placeholder} />
          </span>
        </SelectTrigger>
        <SelectContent onKeyDownCapture={handleKeyDownCapture}>
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
