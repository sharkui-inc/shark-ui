"use client";

import { createListCollection } from "@ark-ui/react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/react/components/select";

const Example = () => (
  <Select collection={collection} defaultValue={["mx"]}>
    <SelectTrigger className="w-full max-w-xs">
      <SelectValue placeholder="Select a country" />
    </SelectTrigger>
    <SelectContent>
      {collection.items.map((item) => (
        <SelectItem item={item} key={item.value}>
          <span className="flex min-w-0 flex-col gap-0.5">
            <span>{item.label}</span>
            <span className="text-muted-foreground text-xs">
              {item.description}
            </span>
          </span>
        </SelectItem>
      ))}
    </SelectContent>
  </Select>
);

const collection = createListCollection({
  items: [
    {
      description: "South America's country, Portuguese speaking.",
      label: "Brazil",
      value: "br",
    },
    {
      description: "North America's country, Spanish speaking.",
      label: "Mexico",
      value: "mx",
    },
    {
      description: "Europe's country, Irish/English speaking.",
      label: "Ireland",
      value: "ie",
    },
  ],
});

export default Example;
