import { createListCollection } from "@ark-ui/react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@/registry/react/components/select";

const collection = createListCollection({
  groupBy: (item) => (item as { category: string }).category,
  items: [
    { category: "Fruits", label: "Apple", value: "apple" },
    { category: "Fruits", label: "Banana", value: "banana" },
    { category: "Fruits", label: "Blueberry", value: "blueberry" },
    { category: "Fruits", label: "Grapes", value: "grapes" },
    { category: "Fruits", label: "Pineapple", value: "pineapple" },
    { category: "Vegetables", label: "Aubergine", value: "aubergine" },
    { category: "Vegetables", label: "Broccoli", value: "broccoli" },
    { category: "Vegetables", label: "Carrot", value: "carrot" },
    { category: "Vegetables", label: "Courgette", value: "courgette" },
    { category: "Vegetables", label: "Leek", value: "leek" },
  ],
});

const grouped = collection.group();

const SelectGroups = () => (
  <Select
    collection={collection}
    defaultValue={["banana"]}
    positioning={{ fitViewport: true }}
  >
    <SelectTrigger className="w-[200px]">
      <SelectValue placeholder="Select a fruit or vegetable" />
    </SelectTrigger>
    <SelectContent>
      <SelectGroup heading={grouped[0][0]}>
        {grouped[0][1].map((item) => (
          <SelectItem item={item} key={item.value}>
            {item.label}
          </SelectItem>
        ))}
      </SelectGroup>
      <SelectSeparator />
      <SelectGroup heading={grouped[1][0]}>
        {grouped[1][1].map((item) => (
          <SelectItem item={item} key={item.value}>
            {item.label}
          </SelectItem>
        ))}
      </SelectGroup>
    </SelectContent>
  </Select>
);

export default SelectGroups;
