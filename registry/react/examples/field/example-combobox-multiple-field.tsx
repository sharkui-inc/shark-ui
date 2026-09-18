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
import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@/registry/react/components/field";

const Example = () => {
  const { contains } = useFilter({ sensitivity: "base" });

  const { collection, filter } = useListCollection({
    filter: contains,
    initialItems,
  });

  return (
    <Field className="w-full max-w-xs">
      <FieldLabel>Fruits</FieldLabel>
      <Combobox
        collection={collection}
        multiple
        onInputValueChange={({ inputValue, reason }) =>
          filter(reason === "item-select" ? "" : inputValue)
        }
      >
      <ComboboxContext<Framework>>
          {({ selectedItems }) => (
            <>
              <ComboboxChips>
                {selectedItems.map((item) => (
                  <ComboboxChip key={item.value} value={item.value}>
                    {item.label}
                  </ComboboxChip>
                ))}
                <ComboboxChipsInput
                  aria-label="Select items"
                  placeholder="Select items…"
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
      <FieldDescription>Select multiple items.</FieldDescription>
    </Field>
  );
};

const initialItems = [
  { label: "Apple", value: "apple" },
  { label: "Banana", value: "banana" },
  { label: "Orange", value: "orange" },
  { label: "Grape", value: "grape" },
  { label: "Strawberry", value: "strawberry" },
  { label: "Mango", value: "mango" },
  { label: "Pineapple", value: "pineapple" },
  { label: "Kiwi", value: "kiwi" },
  { label: "Peach", value: "peach" },
  { label: "Pear", value: "pear" },
];

type Framework = (typeof initialItems)[number];

export default Example;
