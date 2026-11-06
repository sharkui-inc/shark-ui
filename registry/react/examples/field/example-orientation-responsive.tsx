"use client";

import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/registry/react/components/field";
import { Input } from "@/registry/react/components/input";

const Example = () => (
  <FieldGroup className="w-full max-w-md">
    <Field orientation="responsive">
      <FieldLabel>Email</FieldLabel>
      <Input placeholder="you@example.com" type="email" />
      <FieldDescription>
        Stacks on small viewports; switches to horizontal inside the field group
        from the md breakpoint.
      </FieldDescription>
    </Field>
  </FieldGroup>
);

export default Example;
