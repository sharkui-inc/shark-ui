"use client";

import {
  Field,
  FieldContent,
  FieldDescription,
  FieldLabel,
} from "@/registry/react/components/field";
import { Input } from "@/registry/react/components/input";
import { Switch } from "@/registry/react/components/switch";

export const SettingsSwitchField = (props: {
  checked: boolean;
  description: string;
  label: string;
  onCheckedChange: (checked: boolean) => void;
}) => {
  const { checked, description, label, onCheckedChange } = props;
  return (
    <Field orientation="horizontal">
      <Switch
        checked={checked}
        onCheckedChange={({ checked: next }) => onCheckedChange(Boolean(next))}
      />
      <FieldContent>
        <FieldLabel>{label}</FieldLabel>
        <FieldDescription>{description}</FieldDescription>
      </FieldContent>
    </Field>
  );
};

export const SettingsTextField = (props: {
  description: string;
  label: string;
  onChange: (value: string) => void;
  type?: "email" | "text";
  value: string;
}) => {
  const { description, label, onChange, type = "text", value } = props;
  return (
    <Field>
      <FieldLabel>{label}</FieldLabel>
      <Input
        onChange={(event) => onChange(event.target.value)}
        type={type}
        value={value}
      />
      <FieldDescription>{description}</FieldDescription>
    </Field>
  );
};
