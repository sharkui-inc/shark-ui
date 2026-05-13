"use client";

import { useFilter, useListCollection } from "@ark-ui/react";
import React from "react";
import {
  Autocomplete,
  AutocompleteContent,
  AutocompleteEmpty,
  AutocompleteInput,
  AutocompleteItem,
  AutocompleteList,
} from "@/registry/react/components/autocomplete";

const Example = () => {
  const [value, setValue] = React.useState<string | undefined>("banana");

  const { contains } = useFilter({ sensitivity: "base" });

  const { collection, filter } = useListCollection({
    filter: contains,
    initialItems,
  });

  return (
    <div className="flex w-full max-w-64 flex-col gap-4">
      <Autocomplete
        className="w-full"
        collection={collection}
        onInputValueChange={({ inputValue }) => filter(inputValue)}
        onValueChange={(e) => setValue(e.value?.at(0))}
        value={value ? [value] : []}
      >
        <AutocompleteInput placeholder="Select a fruit..." />
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
      <p className="text-center text-muted-foreground text-sm">
        Selected: {value ?? "(none)"}
      </p>
    </div>
  );
};

const initialItems = [
  { label: "Apple", value: "apple" },
  { label: "Banana", value: "banana" },
  { label: "Cherry", value: "cherry" },
  { label: "Date", value: "date" },
];

export default Example;
