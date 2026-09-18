"use client";

import { createListCollection } from "@ark-ui/react";
import {
  Listbox,
  ListboxContent,
  ListboxItem,
  ListboxItemText,
} from "@/registry/react/components/listbox";

const Example = () => (
  <Listbox className="max-w-64" collection={collection} defaultValue={["br"]}>
    <ListboxContent>
      {collection.items.map((item) => (
        <ListboxItem item={item} key={item.value} showIndicator={false}>
          <ListboxItemText>{item.label}</ListboxItemText>
        </ListboxItem>
      ))}
    </ListboxContent>
  </Listbox>
);

const collection = createListCollection({
  items: [
    { label: "Brazil", value: "br" },
    { label: "Mexico", value: "mx" },
    { label: "Ireland", value: "ie" },
  ],
});

export default Example;
