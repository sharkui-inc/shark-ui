"use client";

import { useFilter, useListCollection } from "@ark-ui/react";
import {
  Combobox,
  ComboboxContent,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "@/registry/react/components/combobox";

interface ComboboxDemoProps {
  items?: typeof initialItems;
  placeholder?: string;
}

export const ComboboxDemo = (props: ComboboxDemoProps) => {
  const { items = initialItems, placeholder = "Select an option" } = props;
  const { contains } = useFilter({ sensitivity: "base" });

  const { collection, filter } = useListCollection({
    filter: contains,
    initialItems: items,
  });

  return (
    <Combobox
      className="max-w-xs"
      collection={collection}
      onInputValueChange={({ inputValue, reason }) =>
        filter(reason === "item-select" ? "" : inputValue)
      }
    >
      <ComboboxInput placeholder={placeholder} />
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
  );
};

const initialItems = [
  { label: "Apple", value: "apple" },
  { label: "Banana", value: "banana" },
  { label: "Cherry", value: "cherry" },
  { label: "Date", value: "date" },
];

const ComboboxDefaultExample = () => <ComboboxDemo />;

export default ComboboxDefaultExample;
