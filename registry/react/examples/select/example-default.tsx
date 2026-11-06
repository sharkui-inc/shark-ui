"use client";

import { createListCollection } from "@ark-ui/react";
import {
  Select,
  SelectContent,
  SelectList,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/react/components/select";

const SelectDemo = () => (
  <Select collection={collection}>
    <SelectTrigger aria-label="Select a fruit" className="min-w-48">
      <SelectValue placeholder="Select a fruit" />
    </SelectTrigger>

    <SelectContent>
      <SelectList>
        <SelectGroup heading="Fruits">
          {collection.items.map((item) => (
            <SelectItem item={item} key={item}>
              {item}
            </SelectItem>
          ))}
        </SelectGroup>

      </SelectList>
    </SelectContent>
  </Select>
);

const collection = createListCollection({
  items: ["Banana", "Apple", "Orange", "Pineapple"],
});

export default SelectDemo;
