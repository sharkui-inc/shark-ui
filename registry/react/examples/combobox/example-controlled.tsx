"use client";

import { useFilter, useListCollection } from "@ark-ui/react";
import React from "react";
import {
  Combobox,
  ComboboxContent,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "@/registry/react/components/combobox";

const Example = () => {
  const [value, setValue] = React.useState(["banana"]);

  const { contains } = useFilter({ sensitivity: "base" });

  const { collection, filter } = useListCollection({
    filter: contains,
    initialItems,
  });

  return (
    <div className="flex w-full max-w-64 flex-col gap-4">
      <Combobox
        className="w-full"
        collection={collection}
        onInputValueChange={({ inputValue, reason }) =>
          filter(reason === "item-select" ? "" : inputValue)
        }
        onValueChange={(details) => setValue(details.value)}
        value={value}
      >
        <ComboboxInput placeholder="Select a fruit..." />
        <ComboboxContent>
          <ComboboxList>
            {collection.items.map((item) => (
              <ComboboxItem item={item} key={item.value}>
                {item.label}
              </ComboboxItem>
            ))}
          </ComboboxList>
        </ComboboxContent>
      </Combobox>
      <p className="text-center text-muted-foreground text-sm">
        Selected: {value}
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
