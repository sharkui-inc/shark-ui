"use client";

import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSet,
} from "@/registry/react/components/field";
import { Input } from "@/registry/react/components/input";

const FieldInput = () => (
  <FieldSet className="w-full max-w-xs">
    <FieldGroup>
      <Field>
        <FieldLabel>Username</FieldLabel>
        <Input placeholder="Max Leiter" type="text" />
        <FieldDescription>
          Choose a unique username for your account.
        </FieldDescription>
      </Field>
      <Field>
        <FieldLabel>Password</FieldLabel>
        <FieldDescription>Must be at least 8 characters long.</FieldDescription>
        <Input placeholder="••••••••" type="password" />
      </Field>
    </FieldGroup>
  </FieldSet>
);

export default FieldInput;
