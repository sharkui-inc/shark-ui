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
  <div className="flex w-full max-w-64 flex-col gap-6">
    <Field>
      <FieldLabel>Current password</FieldLabel>
      <PasswordInput autoComplete="current-password">
        <PasswordInputGroup>
          <PasswordInputInput placeholder="••••••••" />
          <PasswordInputTrigger />
        </PasswordInputGroup>
      </PasswordInput>
      <FieldDescription>
        For signing in to an existing account.
      </FieldDescription>
    </Field>

    <Field>
      <FieldLabel>New password</FieldLabel>
      <PasswordInput autoComplete="new-password">
        <PasswordInputGroup>
          <PasswordInputInput placeholder="••••••••" />
          <PasswordInputTrigger />
        </PasswordInputGroup>
      </PasswordInput>
      <FieldDescription>For creating or resetting a password.</FieldDescription>
    </Field>
  </div>
);

export default Example;
