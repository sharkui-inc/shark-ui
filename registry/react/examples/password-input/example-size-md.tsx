import {
  PasswordInput,
  PasswordInputGroup,
  PasswordInputInput,
  PasswordInputTrigger,
} from "@/registry/react/components/password-input";

const Example = () => (
  <PasswordInput className="w-full max-w-64" size="md">
    <PasswordInputGroup>
      <PasswordInputInput placeholder="Medium" />
      <PasswordInputTrigger />
    </PasswordInputGroup>
  </PasswordInput>
);

export default Example;
