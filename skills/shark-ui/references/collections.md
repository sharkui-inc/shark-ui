# Collections

Select, Combobox, and Listbox take an Ark collection. Do not pass a loose `items` array to the root. Map `collection.items` and pass `item={item}` on each row.

## Select / Listbox

```tsx
import { createListCollection } from "@ark-ui/react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const SelectDemo = () => (
  <Select collection={collection}>
    <SelectTrigger className="w-48">
      <SelectValue placeholder="Select a fruit" />
    </SelectTrigger>
    <SelectContent>
      <SelectGroup heading="Fruits">
        {collection.items.map((item) => (
          <SelectItem item={item} key={item}>
            {item}
          </SelectItem>
        ))}
      </SelectGroup>
    </SelectContent>
  </Select>
);

const collection = createListCollection({
  items: ["Banana", "Apple", "Orange", "Pineapple"],
});
```

Object items: `key={item.value}`, `item={item}`, render `item.label`. Listbox is the same `collection` + `ListboxItem item={item}` pattern.

## Combobox

```tsx
import { useFilter, useListCollection } from "@ark-ui/react";
import {
  Combobox,
  ComboboxContent,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "@/components/ui/combobox";

const ComboboxDemo = () => {
  const { contains } = useFilter({ sensitivity: "base" });
  const { collection, filter } = useListCollection({
    filter: contains,
    initialItems,
  });

  return (
    <Combobox
      collection={collection}
      onInputValueChange={({ inputValue, reason }) =>
        filter(reason === "item-select" ? "" : inputValue)
      }
    >
      <ComboboxInput placeholder="Select an option" />
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
];
```

Filter from `onInputValueChange`. Pass `collection` to the root. Autocomplete follows the same helpers; check its examples.
