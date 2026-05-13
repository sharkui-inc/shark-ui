"use client";

import { useFilter, useListCollection } from "@ark-ui/react";
import {
  Autocomplete,
  AutocompleteContent,
  AutocompleteEmpty,
  AutocompleteInput,
  AutocompleteItem,
  AutocompleteList,
} from "@/registry/react/components/autocomplete";

const AutocompleteDemo = () => {
  const { contains } = useFilter({ sensitivity: "base" });

  const { collection, filter } = useListCollection({
    initialItems,
    filter: contains,
  });

  return (
    <Autocomplete
      className="w-64"
      collection={collection}
      onInputValueChange={({ inputValue }) => filter(inputValue)}
    >
      <AutocompleteInput />
      <AutocompleteContent>
        <AutocompleteEmpty />
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

const initialItems = [
  { label: "Apple", value: "apple" },
  { label: "Banana", value: "banana" },
  { label: "Cherry", value: "cherry" },
  { label: "Date", value: "date" },
];

export default AutocompleteDemo;
