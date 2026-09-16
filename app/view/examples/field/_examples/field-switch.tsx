"use client";

import { Field, FieldLabel } from "@/registry/react/components/field";
import { Switch } from "@/registry/react/components/switch";

const FieldSwitch = () => (
  <Field className="w-fit" orientation="horizontal">
    <FieldLabel htmlFor="2fa">Multi-factor authentication</FieldLabel>
    <Switch id="2fa" />
  </Field>
);

export default FieldSwitch;
