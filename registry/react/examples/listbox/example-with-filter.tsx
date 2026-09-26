"use client";

import { useListCollection } from "@ark-ui/react/collection";
import { useFilter } from "@ark-ui/react/locale";
import {
  Listbox,
  ListboxContent,
  ListboxEmpty,
  ListboxInput,
  ListboxItem,
  ListboxItemText,
} from "@/registry/react/components/listbox";

const Example = () => {
  const { contains } = useFilter({ sensitivity: "base" });

  const { collection, filter } = useListCollection({
    filter: contains,
    initialItems: [
      { label: "Brazil", value: "br" },
      { label: "Mexico", value: "mx" },
      { label: "Ireland", value: "ie" },
    ],
  });

  return (
    <Listbox className="max-w-64" collection={collection}>
      <ListboxInput
        onChange={(e) => filter(e.target.value)}
        placeholder="Search..."
      />
      <ListboxContent>
        {collection.items.map((item) => (
          <ListboxItem item={item} key={item.value}>
            <ListboxItemText>{item.label}</ListboxItemText>
          </ListboxItem>
        ))}

        <ListboxEmpty>No results found.</ListboxEmpty>
      </ListboxContent>
    </Listbox>
  );
};

export default Example;
