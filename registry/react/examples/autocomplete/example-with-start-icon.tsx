"use client";

import { useFilter, useListCollection } from "@ark-ui/react";
import { AppleIcon } from "lucide-react";
import {
  Autocomplete,
  AutocompleteContent,
  AutocompleteEmpty,
  AutocompleteInput,
  AutocompleteItem,
  AutocompleteList,
} from "@/registry/react/components/autocomplete";
import { InputGroupAddon } from "@/registry/react/components/input-group";

const Example = () => {
  const { contains } = useFilter({ sensitivity: "base" });

  const { collection, filter } = useListCollection({
    filter: contains,
    initialItems,
  });

  return (
    <Autocomplete
      className="w-64"
      collection={collection}
      onInputValueChange={({ inputValue }) => filter(inputValue)}
    >
      <AutocompleteInput placeholder="Search fruits...">
        <InputGroupAddon align="inline-start">
          <AppleIcon />
        </InputGroupAddon>
      </AutocompleteInput>
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
];

export default Example;
