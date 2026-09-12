"use client";

import { createListCollection } from "@ark-ui/react";
import {
  Listbox,
  ListboxBody,
  ListboxContent,
  ListboxItem,
  ListboxItemIndicator,
  ListboxItemText,
  ListboxLabel,
} from "@/registry/react/components/listbox";

const Example = () => (
  <Listbox className="max-w-64" collection={collection}>
    <ListboxLabel>Country</ListboxLabel>
    <ListboxContent className="h-64">
      <ListboxBody>
        {collection.items.map((item) => (
          <ListboxItem item={item} key={item.value}>
            <ListboxItemText>{item.label}</ListboxItemText>
            <ListboxItemIndicator />
          </ListboxItem>
        ))}
      </ListboxBody>
    </ListboxContent>
  </Listbox>
);

const collection = createListCollection({
  items: [
    { label: "Argentina", value: "ar" },
    { label: "Australia", value: "au" },
    { label: "Belgium", value: "be" },
    { label: "Brazil", value: "br" },
    { label: "Canada", value: "ca" },
    { label: "Chile", value: "cl" },
    { label: "Colombia", value: "co" },
    { label: "Denmark", value: "dk" },
    { label: "Finland", value: "fi" },
    { label: "France", value: "fr" },
    { label: "Germany", value: "de" },
    { label: "Ireland", value: "ie" },
    { label: "Italy", value: "it" },
    { label: "Japan", value: "jp" },
    { label: "Mexico", value: "mx" },
    { label: "Netherlands", value: "nl" },
    { label: "Norway", value: "no" },
    { label: "Portugal", value: "pt" },
    { label: "Spain", value: "es" },
    { label: "Sweden", value: "se" },
    { label: "Switzerland", value: "ch" },
    { label: "United Kingdom", value: "gb" },
    { label: "United States", value: "us" },
  ],
});

export default Example;
