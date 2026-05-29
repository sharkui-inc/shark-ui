import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@/registry/react/components/field";
import {
  PasswordInput,
  PasswordInputGroup,
  PasswordInputInput,
  PasswordInputTrigger,
} from "@/registry/react/components/password-input";

const Example = () => (
  <Field className="w-full max-w-64">
    <FieldLabel>Password</FieldLabel>
    <PasswordInput>
      <PasswordInputGroup>
        <PasswordInputInput placeholder="••••••••" />
        <PasswordInputTrigger />
      </PasswordInputGroup>
    </PasswordInput>
    <FieldDescription>Must be at least 8 characters.</FieldDescription>
  </Field>
);

export default Example;
