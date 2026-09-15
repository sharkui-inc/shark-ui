"use client";

import { useFilter, useListCollection } from "@ark-ui/react";
import { Field, FieldLabel } from "@registry/react/components/field";
import {
  Autocomplete,
  AutocompleteContent,
  AutocompleteEmpty,
  AutocompleteInput,
  AutocompleteItem,
  AutocompleteList,
} from "@/registry/react/components/autocomplete";

interface AutocompleteDemoProps {
  emptyLabel?: string;
  items?: typeof initialItems;
  label?: string;
  placeholder?: string;
}

export const AutocompleteDemo = (props: AutocompleteDemoProps) => {
  const {
    emptyLabel = "No results found.",
    items = initialItems,
    label = "Search fruits",
    placeholder = "e.g. Apple",
  } = props;
  const { contains } = useFilter({ sensitivity: "base" });

  const { collection, filter } = useListCollection({
    filter: contains,
    initialItems: items,
  });

  return (
    <Field className="w-full max-w-64">
      <FieldLabel>{label}</FieldLabel>
      <Autocomplete
        collection={collection}
        onInputValueChange={({ inputValue }) => filter(inputValue)}
      >
        <AutocompleteInput placeholder={placeholder} showClear />
        <AutocompleteContent>
          <AutocompleteEmpty>{emptyLabel}</AutocompleteEmpty>
          <AutocompleteList>
            {collection.items.map((item) => (
              <AutocompleteItem item={item} key={item.value}>
                {item.label}
              </AutocompleteItem>
            ))}
          </AutocompleteList>
        </AutocompleteContent>
      </Autocomplete>
    </Field>
  );
};

const initialItems = [
  { label: "Apple", value: "apple" },
  { label: "Banana", value: "banana" },
  { label: "Cherry", value: "cherry" },
  { label: "Date", value: "date" },
];

const AutocompleteDefaultExample = () => <AutocompleteDemo />;

export default AutocompleteDefaultExample;
