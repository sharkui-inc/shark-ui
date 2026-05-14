"use client";

import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@/registry/react/components/field";
import {
  NumberInput,
  NumberInputDecrement,
  NumberInputGroup,
  NumberInputIncrement,
  NumberInputInput,
} from "@/registry/react/components/number-input";

const Example = () => (
  <Field className="w-full max-w-52">
    <FieldLabel>Quantity</FieldLabel>
    <NumberInput defaultValue="1" max={100} min={0}>
      <NumberInputGroup>
        <NumberInputDecrement />
        <NumberInputInput />
        <NumberInputIncrement />
      </NumberInputGroup>
    </NumberInput>
    <FieldDescription>0 - 100 only</FieldDescription>
  </Field>
);

export default Example;
