"use client";

import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/registry/react/components/input-group";
import { Kbd } from "@/registry/react/components/kbd";

const Example = () => (
  <InputGroup className="max-w-64">
    <InputGroupInput aria-label="Search" placeholder="Search..." />
    <InputGroupAddon align="inline-end">
      <Kbd>/</Kbd>
    </InputGroupAddon>
  </InputGroup>
);

export default Example;
