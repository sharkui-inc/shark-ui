"use client";

import { createListCollection } from "@ark-ui/react";
import { Button } from "@/registry/react/components/button";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/registry/react/components/field";
import { Input } from "@/registry/react/components/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/react/components/select";

const countries = [
  { label: "United States", value: "us" },
  { label: "United Kingdom", value: "uk" },
  { label: "Canada", value: "ca" },
];

const collection = createListCollection({ items: countries });

const InputForm = () => (
  <form className="w-full max-w-sm">
    <FieldGroup>
      <Field>
        <FieldLabel htmlFor="form-name">Name</FieldLabel>
        <Input id="form-name" placeholder="Evil Rabbit" required type="text" />
      </Field>
      <Field>
        <FieldLabel htmlFor="form-email">Email</FieldLabel>
        <Input id="form-email" placeholder="john@example.com" type="email" />
        <FieldDescription>
          We&apos;ll never share your email with anyone.
        </FieldDescription>
      </Field>
      <div className="grid grid-cols-2 gap-4">
        <Field>
          <FieldLabel htmlFor="form-phone">Phone</FieldLabel>
          <Input id="form-phone" placeholder="+1 (555) 123-4567" type="tel" />
        </Field>
        <Field>
          <FieldLabel htmlFor="form-country">Country</FieldLabel>
          <Select collection={collection} defaultValue={["us"]}>
            <SelectTrigger className="w-full" id="form-country">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {collection.items.map((country) => (
                  <SelectItem item={country} key={country.value}>
                    {country.label}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </Field>
      </div>
      <Field>
        <FieldLabel htmlFor="form-address">Address</FieldLabel>
        <Input id="form-address" placeholder="123 Main St" type="text" />
      </Field>
      <Field orientation="horizontal">
        <Button type="button" variant="outline">
          Cancel
        </Button>
        <Button type="submit">Submit</Button>
      </Field>
    </FieldGroup>
  </form>
);

export default InputForm;
