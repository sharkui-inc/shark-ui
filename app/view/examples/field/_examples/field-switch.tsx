"use client";

import { Field, FieldLabel } from "@/registry/react/components/field";
import { Switch } from "@/registry/react/components/switch";

const FieldSwitch = () => (
  <Field className="w-fit" orientation="horizontal">
    <FieldLabel>Multi-factor authentication</FieldLabel>
    <Switch />
  </Field>
);

export default FieldSwitch;
