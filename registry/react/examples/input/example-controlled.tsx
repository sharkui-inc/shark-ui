"use client";

import React from "react";
import { Field, FieldDescription } from "@/registry/react/components/field";
import { Input } from "@/registry/react/components/input";

const Example = () => {
  const [value, setValue] = React.useState("");

  return (
    <Field className="flex w-full max-w-xs flex-col gap-3">
      <Input
        onChange={({ target }) => setValue(target.value)}
        placeholder="Enter your message"
        value={value}
      />
      <FieldDescription className="text-right">
        Character count: {value.length}
      </FieldDescription>
    </Field>
  );
};

export default Example;
