"use client";

import { createListCollection } from "@ark-ui/react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/react/components/select";

interface SelectDemoProps {
  heading?: string;
  items?: string[];
  placeholder?: string;
}

export const SelectDemo = (props: SelectDemoProps) => {
  const {
    heading = "Fruits",
    items = initialItems,
    placeholder = "Select a fruit",
  } = props;
  const collection = createListCollection({ items });

  return (
    <Select collection={collection}>
      <SelectTrigger className="w-48">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>

      <SelectContent>
        <SelectGroup heading={heading}>
          {collection.items.map((item) => (
            <SelectItem item={item} key={item}>
              {item}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

const initialItems = ["Banana", "Apple", "Orange", "Pineapple"];

const SelectDefaultExample = () => <SelectDemo />;

export default SelectDefaultExample;
