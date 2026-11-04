"use client";

import type { CheckboxCheckedState } from "@ark-ui/react";
import React from "react";
import { Checkbox } from "@/registry/react/components/checkbox";
import { Field, FieldLabel } from "@/registry/react/components/field";

const Example = () => {
  const [checked, setChecked] = React.useState<CheckboxCheckedState>(false);

  return (
    <div className="flex w-full flex-col items-center gap-4">
      <Field className="w-max whitespace-nowrap" orientation="horizontal">
        <Checkbox
          checked={checked}
          onCheckedChange={({ checked: nextChecked }) =>
            setChecked(nextChecked)
          }
        />
        <FieldLabel>Accept terms and conditions</FieldLabel>
      </Field>

      <p>{checked ? "✅" : "❌"}</p>
    </div>
  );
};

export default Example;
