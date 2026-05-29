import {
  PasswordInput,
  PasswordInputGroup,
  PasswordInputInput,
  PasswordInputTrigger,
} from "@/registry/react/components/password-input";

const Example = () => (
  <PasswordInput className="w-full max-w-64" size="sm">
    <PasswordInputGroup>
      <PasswordInputInput placeholder="Small" />
      <PasswordInputTrigger />
    </PasswordInputGroup>
  </PasswordInput>
);

export default Example;
