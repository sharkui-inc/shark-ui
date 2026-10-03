"use client";

import { createListCollection } from "@ark-ui/react";
import {
  Listbox,
  ListboxContent,
  ListboxItem,
  ListboxItemText,
} from "@/registry/react/components/listbox";

const Example = () => (
  <Listbox className="w-full max-w-64" collection={collection}>
    <ListboxContent>
      {collection.items.map((item) => (
        <ListboxItem item={item} key={item.value}>
          <ListboxItemText>{item.label}</ListboxItemText>
        </ListboxItem>
      ))}
    </ListboxContent>
  </Listbox>
);

const collection = createListCollection({
  items: [
    { label: "Free", value: "free" },
    { label: "Pro", value: "pro" },
    {
      disabled: true,
      label: "Enterprise",
      value: "enterprise",
    },
    { label: "Custom", value: "custom" },
  ],
});

export default Example;
