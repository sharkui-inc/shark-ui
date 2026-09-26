import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@/registry/react/components/field";
import { PasswordInput } from "@/registry/react/components/password-input";

const Example = () => (
  <Field className="w-full max-w-64" disabled>
    <FieldLabel>Password</FieldLabel>
    <PasswordInput defaultValue="••••••••" disabled placeholder="••••••••" />
    <FieldDescription>The field is currently disabled.</FieldDescription>
  </Field>
);

export default Example;
