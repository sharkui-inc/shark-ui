"use client";

import { createListCollection } from "@ark-ui/react";
import type React from "react";
import { AstroIcon } from "@/components/icons/astro";
import { NextIcon } from "@/components/icons/next";
import { ViteIcon } from "@/components/icons/vite";
import {
  Select,
  SelectContent,
  SelectContext,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/react/components/select";

interface Framework {
  icon: React.ComponentType<React.ComponentProps<"svg">>;
  label: string;
  value: string;
}

const Example = () => (
  <Select collection={collection} defaultValue={["next"]}>
    <SelectTrigger aria-label="Select a framework" className="min-w-48">
      <SelectContext<Framework>>
        {({ selectedItems }) => {
          const Icon = selectedItems[0]?.icon;
          return Icon ? <Icon aria-hidden="true" /> : null;
        }}
      </SelectContext>
      <SelectValue placeholder="Select framework" />
    </SelectTrigger>
    <SelectContent>
      {collection.items.map((item) => {
        const Icon = item.icon;

        return (
          <SelectItem item={item} key={item.value}>
            <Icon aria-hidden="true" />
            {item.label}
          </SelectItem>
        );
      })}
    </SelectContent>
  </Select>
);

const collection = createListCollection<Framework>({
  items: [
    { icon: NextIcon, label: "Next.js", value: "next" },
    { icon: ViteIcon, label: "Vite", value: "vite" },
    { icon: AstroIcon, label: "Astro", value: "astro" },
  ],
});

export default Example;
