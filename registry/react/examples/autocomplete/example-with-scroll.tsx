"use client";

import { useFilter, useListCollection } from "@ark-ui/react";
import {
  Autocomplete,
  AutocompleteContent,
  AutocompleteInput,
  AutocompleteItem,
  AutocompleteList,
} from "@/registry/react/components/autocomplete";

const Example = () => {
  const { contains } = useFilter({ sensitivity: "base" });

  const { collection, filter } = useListCollection({
    filter: contains,
    initialItems,
  });

  return (
    <Autocomplete
      className="w-full max-w-64"
      collection={collection}
      defaultValue={["option-24"]}
      onInputValueChange={({ inputValue }) => filter(inputValue)}
    >
      <AutocompleteInput placeholder="Search..." showTrigger />
      <AutocompleteContent className="max-h-60">
        <AutocompleteList>
          {collection.items.map((item) => (
            <AutocompleteItem item={item} key={item.value}>
              {item.label}
            </AutocompleteItem>
          ))}
        </AutocompleteList>
      </AutocompleteContent>
    </Autocomplete>
  );
};

const initialItems = Array.from({ length: 30 }, (_, i) => ({
  label: `Option ${i + 1}`,
  value: `option-${i + 1}`,
}));

export default Example;
