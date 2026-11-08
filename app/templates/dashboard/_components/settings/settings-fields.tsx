"use client";

import {
  Field,
  FieldContent,
  FieldDescription,
  FieldLabel,
} from "@/registry/react/components/field";
import { Input } from "@/registry/react/components/input";
import { Switch } from "@/registry/react/components/switch";

interface SettingsSwitchFieldProps {
  checked: boolean;
  description: string;
  label: string;
  onCheckedChange: (checked: boolean) => void;
}

export const SettingsSwitchField = (props: SettingsSwitchFieldProps) => {
  const { checked, description, label, onCheckedChange } = props;

  return (
    <Field orientation="horizontal">
      <FieldContent>
        <FieldLabel>{label}</FieldLabel>
        <FieldDescription>{description}</FieldDescription>
      </FieldContent>
      <Switch
        checked={checked}
        onCheckedChange={({ checked: next }) => onCheckedChange(Boolean(next))}
      />
    </Field>
  );
};

interface SettingsTextFieldProps {
  description: string;
  label: string;
  onChange: (value: string) => void;
  type?: "email" | "text";
  value: string;
}

export const SettingsTextField = (props: SettingsTextFieldProps) => {
  const { description, label, type = "text", value, onChange } = props;

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
