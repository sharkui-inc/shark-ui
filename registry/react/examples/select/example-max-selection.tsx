"use client";

import { createListCollection } from "@ark-ui/react";
import React from "react";
import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@/registry/react/components/field";
import {
  Select,
  SelectContent,
  SelectList,
  SelectContext,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/react/components/select";

const MAX_SELECTION = 3;

const Example = () => {
  const [value, setValue] = React.useState<string[]>([]);

  const handleValueChange = (details: { value: string[] }) => {
    setValue(details.value.slice(0, MAX_SELECTION));
  };

  return (
    <Field className="w-full max-w-56">
      <FieldLabel>Frameworks</FieldLabel>
      <Select
        collection={collection}
        multiple
        onValueChange={handleValueChange}
        value={value}
      >
        <SelectTrigger className="w-full">
          <SelectValue className="capitalize">
            <SelectContext>
              {({ value: selected }) => renderValue(selected)}
            </SelectContext>
          </SelectValue>
        </SelectTrigger>
        <SelectContent>
          <SelectList>
            {collection.items.map((item) => (
              <SelectItem item={item} key={item.value}>
                {item.label}
              </SelectItem>
            ))}

          </SelectList>
        </SelectContent>
      </Select>
      <FieldDescription>Select up to 3.</FieldDescription>
    </Field>
  );
};

const renderValue = (value: string[]) => {
  if (value.length === 0) {
    return "Select frameworks";
  }

  const firstValue = value.at(0) ?? "";
  const remaining = value.length - 1;

  return (
    <>
      {firstValue}
      {remaining > 0 ? (
        <span className="text-muted-foreground text-xs">
          {` (+${remaining} more)`}
        </span>
      ) : null}
    </>
  );
};

const collection = createListCollection({
  items: [
    { label: "JavaScript", value: "javascript" },
    { label: "TypeScript", value: "typescript" },
    { label: "Python", value: "python" },
    { label: "Rust", value: "rust" },
  ],
});

export default Example;
