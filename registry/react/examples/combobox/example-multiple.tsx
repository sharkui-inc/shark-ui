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
      defaultValue={["react", "vue"]}
      multiple
      onInputValueChange={({ inputValue }) => filter(inputValue)}
    >
      <ComboboxChips>
        <ComboboxContext<Framework>>
          {({ selectedItems }) =>
            selectedItems.map((item) => (
              <ComboboxChip key={item.value} value={item.value}>
                {item.label}
              </ComboboxChip>
            ))
          }
        </ComboboxContext>
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
    </Combobox>
  );
};

const initialItems = [
  { label: "React", value: "react" },
  { label: "Vue", value: "vue" },
  { label: "Svelte", value: "svelte" },
  { label: "Solid", value: "solid" },
];

type Framework = (typeof initialItems)[number];

export default Example;
