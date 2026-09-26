"use client";

import { createListCollection } from "@ark-ui/react";
import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/react/components/select";
import { Switch } from "@/registry/react/components/switch";

const items = [
  { label: "Apple", value: "apple" },
  { label: "Banana", value: "banana" },
  { label: "Blueberry", value: "blueberry" },
];

const collection = createListCollection({ items });

const SelectAlignItem = () => {
  const [alignItemWithTrigger, setAlignItemWithTrigger] = React.useState(false);

  return (
    <div className="grid gap-8">
      <div className="flex items-center gap-2 text-sm">
        <Switch onCheckedChange={(e) => setAlignItemWithTrigger(e.checked)} />
        <span>Align item with trigger</span>
      </div>
      <Select
        collection={collection}
        defaultValue={["banana"]}
        positioning={{ fitViewport: true }}
      >
        <SelectTrigger className="w-[240px]">
          <SelectValue />
        </SelectTrigger>
        <SelectContent
          data-align-item={alignItemWithTrigger ? "true" : undefined}
        >
          {items.map((item) => (
            <SelectItem item={item} key={item.value}>
              {item.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default SelectAlignItem;
