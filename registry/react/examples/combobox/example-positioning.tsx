"use client";

import { useFilter, useListCollection } from "@ark-ui/react";
import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "@/registry/react/components/combobox";

const Example = () => {
  const { contains } = useFilter({ sensitivity: "base" });

  const { collection, filter } = useListCollection({
    filter: contains,
    initialItems,
  });

  return (
    <div className="flex flex-wrap justify-center gap-2">
      {placements.map((placement) => (
        <Combobox
          className="w-36"
          collection={collection}
          key={placement}
          onInputValueChange={({ inputValue }) => filter(inputValue)}
          positioning={{ placement }}
        >
          <ComboboxInput
            aria-label={placement}
            className="capitalize"
            placeholder={placement}
          />
          <ComboboxContent>
            <ComboboxEmpty />
            <ComboboxList>
              {collection.items.map((item) => (
                <ComboboxItem item={item} key={item.value}>
                  {item.label}
                </ComboboxItem>
              ))}
            </ComboboxList>
          </ComboboxContent>
        </Combobox>
      ))}
    </div>
  );
};

const initialItems = [
  { label: "Apple", value: "apple" },
  { label: "Banana", value: "banana" },
  { label: "Cherry", value: "cherry" },
  { label: "Date", value: "date" },
];

const placements = ["left", "top", "bottom", "right"] as const;

export default Example;
