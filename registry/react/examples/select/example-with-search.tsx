"use client";

import { useFilter, useListCollection } from "@ark-ui/react";
import React from "react";
import { Input } from "@/registry/react/components/input";
import {
  Select,
  SelectContent,
  SelectEmpty,
  SelectItem,
  SelectList,
  SelectTrigger,
  SelectValue,
} from "@/registry/react/components/select";

const Example = () => {
  const [query, setQuery] = React.useState("");
  const { contains } = useFilter({ sensitivity: "base" });

  const { collection, filter, reset } = useListCollection({
    filter: contains,
    initialItems,
  });

  return (
    <Select
      collection={collection}
      onOpenChange={({ open }) => {
        if (!open) {
          setQuery("");
          reset();
        }
      }}
    >
      <SelectTrigger aria-label="Select a framework" className="min-w-56">
        <SelectValue placeholder="Select framework" />
      </SelectTrigger>
      <SelectContent>
        <Input
          aria-label="Search frameworks"
          autoFocus
          onChange={(e) => {
            const { value } = e.target;
            setQuery(value);
            filter(value);
          }}
          onKeyDown={(e) => e.stopPropagation()}
          placeholder="Search..."
          size="sm"
          value={query}
        />
        <SelectList>
          {collection.items.map((item) => (
            <SelectItem item={item} key={item.value}>
              {item.label}
            </SelectItem>
          ))}

          <SelectEmpty>No results found.</SelectEmpty>
        </SelectList>
      </SelectContent>
    </Select>
  );
};

const initialItems = [
  { label: "Next.js", value: "next" },
  { label: "Vite", value: "vite" },
  { label: "Astro", value: "astro" },
  { label: "Remix", value: "remix" },
  { label: "Gatsby", value: "gatsby" },
  { label: "Nuxt", value: "nuxt" },
  { label: "SvelteKit", value: "sveltekit" },
  { label: "SolidStart", value: "solidstart" },
];

export default Example;
