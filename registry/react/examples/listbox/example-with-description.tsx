"use client";

import { createListCollection } from "@ark-ui/react";
import { Item } from "@/registry/react/components/item";
import {
  Listbox,
  ListboxContent,
  ListboxItem,
  ListboxItemDescription,
  ListboxItemIndicator,
  ListboxItemText,
} from "@/registry/react/components/listbox";

const Example = () => (
  <Item className="w-full max-w-xs p-1" variant="outline">
    <Listbox collection={collection}>
      <ListboxContent>
        {collection.items.map((item) => (
          <ListboxItem item={item} key={item.value}>
            <ListboxItemText>{item.label}</ListboxItemText>
            <ListboxItemDescription>{item.description}</ListboxItemDescription>
            <ListboxItemIndicator />
          </ListboxItem>
        ))}
      </ListboxContent>
    </Listbox>
  </Item>
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
