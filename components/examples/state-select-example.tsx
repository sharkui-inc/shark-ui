"use client";

import { createListCollection } from "@ark-ui/react";
import { useState } from "react";
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

export const StateSelectExample = (props: React.ComponentProps<"div">) => {
  const [value, setValue] = useState<string[]>([]);
  const state = value.at(0);

  return (
    <Field {...props}>
      <FieldLabel>State</FieldLabel>
      <Select
        collection={collection}
        onValueChange={(event) => setValue(event.value)}
        value={value}
      >
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Select a state" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup heading="States">
            {collection.items.map((item) => (
              <SelectItem item={item} key={item}>
                {item}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
      <FieldDescription>
        {state ? `Shipping to ${state}.` : "Used for tax and shipping."}
      </FieldDescription>
    </Field>
  );
};

const collection = createListCollection({
  items: ["California", "New York", "Texas", "Washington"],
});
