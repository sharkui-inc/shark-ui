"use client";

import React from "react";
import { Field, FieldDescription } from "@/registry/react/components/field";
import {
  PasswordInput,
  PasswordInputGroup,
  PasswordInputInput,
  PasswordInputTrigger,
} from "@/registry/react/components/password-input";

const Example = () => {
  const [password, setPassword] = React.useState("");

  return (
    <Field className="w-full max-w-64">
      <PasswordInput>
        <PasswordInputGroup>
          <PasswordInputInput
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Enter password"
            value={password}
          />
          <PasswordInputTrigger />
        </PasswordInputGroup>
      </PasswordInput>
      <FieldDescription className="text-right">
        Character count: {password.length}
      </FieldDescription>
    </Field>
  );
};

export default Example;
