"use client";

import { createListCollection } from "@ark-ui/react";
import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@/registry/react/components/field";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/react/components/select";

const items = [
  { label: "Apple", value: "apple" },
  { label: "Banana", value: "banana" },
  { label: "Blueberry", value: "blueberry" },
];

const collection = createListCollection({ items });

const SelectInvalid = () => (
  <Field className="w-[180px]" invalid>
    <FieldLabel>Fruits</FieldLabel>
    <Select
      collection={collection}
      defaultValue={["banana"]}
      invalid
      positioning={{ fitViewport: true }}
    >
      <SelectTrigger className="w-full">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        {items.map((item) => (
          <SelectItem item={item} key={item.value}>
            {item.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
    <FieldDescription>Select a fruit to continue.</FieldDescription>
  </Field>
);

export default SelectInvalid;
