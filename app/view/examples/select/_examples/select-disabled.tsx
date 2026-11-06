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

const items = [
  { label: "Apple", value: "apple" },
  { label: "Banana", value: "banana" },
  { label: "Blueberry", value: "blueberry" },
];

const collection = createListCollection({ items });

const SelectDisabled = () => (
  <Select
    collection={collection}
    defaultValue={["banana"]}
    disabled
    positioning={{ fitViewport: true }}
  >
    <SelectTrigger className="w-45">
      <SelectValue />
    </SelectTrigger>
    <SelectContent>
      <SelectList>
        {items.map((item) => (
          <SelectItem item={item} key={item.value}>
            {item.label}
          </SelectItem>
        ))}
      </SelectList>
    </SelectContent>
  </Select>
);

export default SelectDisabled;
