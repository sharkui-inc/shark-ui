import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@/registry/react/components/field";
import { PasswordInput } from "@/registry/react/components/password-input";

const Example = () => (
  <Field className="w-full max-w-64" invalid>
    <FieldLabel>Password</FieldLabel>
    <PasswordInput invalid placeholder="••••••••" />
    <FieldDescription>Please enter a valid password.</FieldDescription>
  </Field>
);

export default Example;
