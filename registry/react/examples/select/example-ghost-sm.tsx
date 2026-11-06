"use client";

import { createListCollection } from "@ark-ui/react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectList,
  SelectTrigger,
  SelectValue,
} from "@/registry/react/components/select";

const Example = () => (
  <Select collection={collection}>
    <SelectTrigger
      aria-label="Select a fruit"
      className="min-w-48"
      size="sm"
      variant="ghost"
    >
      <SelectValue placeholder="Ghost sm" />
    </SelectTrigger>
    <SelectContent>
      <SelectList>
        {collection.items.map((item) => (
          <SelectItem item={item} key={item}>
            {item}
          </SelectItem>
        ))}
      </SelectList>
    </SelectContent>
  </Select>
);

const collection = createListCollection({
  items: ["Banana", "Apple", "Orange"],
});

export default Example;
