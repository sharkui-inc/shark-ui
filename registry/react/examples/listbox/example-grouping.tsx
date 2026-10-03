"use client";

import { createListCollection } from "@ark-ui/react";
import {
  Listbox,
  ListboxContent,
  ListboxItem,
  ListboxItemGroup,
  ListboxItemGroupLabel,
  ListboxItemText,
} from "@/registry/react/components/listbox";

const Example = () => (
  <Listbox className="w-full max-w-64" collection={collection}>
    <ListboxContent>
      {collection.group().map(([region, items]) => (
        <ListboxItemGroup key={region}>
          <ListboxItemGroupLabel>{region}</ListboxItemGroupLabel>
          {items.map((item) => (
            <ListboxItem item={item} key={item.value}>
              <ListboxItemText>{item.label}</ListboxItemText>
            </ListboxItem>
          ))}
        </ListboxItemGroup>
      ))}
    </ListboxContent>
  </Listbox>
);

const collection = createListCollection({
  groupBy: (item) => (item as { region: string }).region,
  items: [
    { label: "Brazil", region: "South America", value: "br" },
    { label: "Colombia", region: "South America", value: "co" },
    { label: "Mexico", region: "North America", value: "mx" },
    { label: "Canada", region: "North America", value: "ca" },
  ],
});

export default Example;
