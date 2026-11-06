"use client";

import { createListCollection } from "@ark-ui/react";
import {
  Select,
  SelectContent,
  SelectList,
  SelectContext,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/react/components/select";

const Example = () => (
  <Select
    collection={collection}
    defaultValue={["javascript", "typescript"]}
    multiple
  >
    <SelectTrigger aria-label="Select frameworks" className="w-full max-w-64">
      <SelectValue className="capitalize">
        <SelectContext>{({ value }) => renderValue(value)}</SelectContext>
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
);

const renderValue = (value: string[]) => {
  if (value.length === 0) {
    return "Select languages…";
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
