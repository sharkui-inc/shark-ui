"use client";

import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
} from "@/registry/react/components/input-group";
import {
  NumberInput,
  NumberInputInput,
} from "@/registry/react/components/number-input";

const Example = () => (
  <InputGroup className="max-w-64">
    <NumberInput aria-label="Enter the amount" defaultValue="10">
      <NumberInputInput />
    </NumberInput>
    <InputGroupAddon>
      <InputGroupText>€</InputGroupText>
    </InputGroupAddon>
    <InputGroupAddon align="inline-end">
      <InputGroupText>EUR</InputGroupText>
    </InputGroupAddon>
  </InputGroup>
);

export default Example;
