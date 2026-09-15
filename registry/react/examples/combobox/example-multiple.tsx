"use client";

import { useFilter, useListCollection } from "@ark-ui/react";
import {
  Combobox,
  ComboboxChip,
  ComboboxChips,
  ComboboxChipsInput,
  ComboboxContent,
  ComboboxContext,
  ComboboxEmpty,
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
    <Combobox
      className="w-full max-w-64"
      collection={collection}
      multiple
      onInputValueChange={({ inputValue, reason }) =>
        filter(reason === "item-select" ? "" : inputValue)
      }
    >
      <ComboboxContext>
        {({ selectedItems }) => (
          <>
            <ComboboxChips>
              {selectedItems.map((item) => (
                <ComboboxChip key={item.value} value={item.value}>
                  {item.label}
                </ComboboxChip>
              ))}
              <ComboboxChipsInput
                aria-label="Add framework"
                placeholder="Select frameworks..."
              />
            </ComboboxChips>
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
          </>
        )}
      </ComboboxContext>
    </Combobox>
  );
};

const initialItems = [
  { label: "React", value: "react" },
  { label: "Vue", value: "vue" },
  { label: "Svelte", value: "svelte" },
  { label: "Solid", value: "solid" },
];

export default Example;
