"use client";

import { Field } from "@/registry/react/components/field";
import {
  NumberInput,
  NumberInputDecrement,
  NumberInputGroup,
  NumberInputIncrement,
  NumberInputInput,
  NumberInputScrubber,
} from "@/registry/react/components/number-input";

const Example = () => (
  <Field className="w-full max-w-48">
    <NumberInput defaultValue="50" max={100} min={1}>
      <NumberInputScrubber>Quantity</NumberInputScrubber>
      <NumberInputGroup>
        <NumberInputDecrement />
        <NumberInputInput />
        <NumberInputIncrement />
      </NumberInputGroup>
    </NumberInput>
  </Field>
);

export default Example;
