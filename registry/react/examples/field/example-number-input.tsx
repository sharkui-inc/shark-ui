"use client";

import { Field } from "@/registry/react/components/field";
import {
  NumberField,
  NumberFieldDecrement,
  NumberFieldGroup,
  NumberFieldIncrement,
  NumberFieldInput,
  NumberFieldScrubber,
} from "@/registry/react/components/number-input";

const Example = () => (
  <Field className="w-full max-w-48">
    <NumberField defaultValue="50" max={100} min={1}>
      <NumberFieldScrubber>Quantity</NumberFieldScrubber>
      <NumberFieldGroup>
        <NumberFieldDecrement />
        <NumberFieldInput />
        <NumberFieldIncrement />
      </NumberFieldGroup>
    </NumberField>
  </Field>
);

export default Example;
