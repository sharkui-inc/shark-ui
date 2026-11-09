"use client";

import { createListCollection } from "@ark-ui/react";
import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectList,
  SelectTrigger,
  SelectValue,
} from "@/registry/react/components/select";

const Example = () => {
  const [value, setValue] = React.useState<string[]>(["react"]);

  return (
    <Select
      collection={collection}
      onValueChange={(e) => setValue(e.value)}
      value={value}
    >
      <SelectTrigger aria-label="Select a framework" className="min-w-48">
        <SelectValue placeholder="Select a framework" />
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
};

const collection = createListCollection({
  items: [
    { label: "React", value: "react" },
    { label: "Vue", value: "vue" },
    { label: "Svelte", value: "svelte" },
  ],
});

export default Example;
