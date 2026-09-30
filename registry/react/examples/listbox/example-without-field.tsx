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
  ListboxLabel,
} from "@/registry/react/components/listbox";

const Example = () => {
  const { contains } = useFilter({ sensitivity: "base" });
  const { collection, filter } = useListCollection({
    filter: contains,
    initialItems: [
      { label: "Apple", value: "apple" },
      { label: "Banana", value: "banana" },
      { label: "Orange", value: "orange" },
    ],
  });

  return (
    <Listbox className="max-w-64" collection={collection}>
      <ListboxLabel>Favorite fruit</ListboxLabel>
      <ListboxInput
        onChange={(event) => filter(event.target.value)}
        placeholder="Search fruits..."
      />
      <ListboxContent>
        {collection.items.map((item) => (
          <ListboxItem item={item} key={item.value}>
            <ListboxItemText>{item.label}</ListboxItemText>
          </ListboxItem>
        ))}
        <ListboxEmpty>No fruits found.</ListboxEmpty>
      </ListboxContent>
    </Listbox>
  );
};

export default Example;
