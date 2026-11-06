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

const items = Array.from({ length: 50 }, (_, index) => ({
  label: `Item ${index + 1}`,
  value: `item-${index + 1}`,
}));

const collection = createListCollection({ items });

const SelectScrollable = () => (
  <Select collection={collection} positioning={{ fitViewport: true }}>
    <SelectTrigger className="w-70">
      <SelectValue placeholder="Select an item" />
    </SelectTrigger>
    <SelectContent className="max-h-56">
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

export default SelectScrollable;
