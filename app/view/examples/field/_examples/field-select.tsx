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
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/react/components/select";

const collection = createListCollection({
  items: [
    { label: "Engineering", value: "engineering" },
    { label: "Design", value: "design" },
    { label: "Marketing", value: "marketing" },
    { label: "Sales", value: "sales" },
    { label: "Customer Support", value: "support" },
    { label: "Human Resources", value: "hr" },
    { label: "Finance", value: "finance" },
    { label: "Operations", value: "operations" },
  ],
});

const FieldSelect = () => (
  <Field className="w-full max-w-xs">
    <FieldLabel>Department</FieldLabel>
    <Select collection={collection}>
      <SelectTrigger>
        <SelectValue placeholder="Choose department" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {collection.items.map((item) => (
            <SelectItem item={item} key={item.value}>
              {item.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
    <FieldDescription>Select your department or area of work.</FieldDescription>
  </Field>
);

export default FieldSelect;
