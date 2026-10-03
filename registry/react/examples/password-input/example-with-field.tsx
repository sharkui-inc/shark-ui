import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@/registry/react/components/field";
import { PasswordInput } from "@/registry/react/components/password-input";

const Example = () => (
  <Field className="w-full max-w-64">
    <FieldLabel>Password</FieldLabel>
    <PasswordInput placeholder="••••••••" />
    <FieldDescription>Must be at least 8 characters.</FieldDescription>
  </Field>
);

export default Example;
