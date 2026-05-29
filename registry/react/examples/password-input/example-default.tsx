import {
  PasswordInput,
  PasswordInputGroup,
  PasswordInputInput,
  PasswordInputTrigger,
} from "@/registry/react/components/password-input";

const PasswordInputDemo = () => (
  <PasswordInput className="w-full max-w-64">
    <PasswordInputGroup>
      <PasswordInputInput placeholder="Enter password" />
      <PasswordInputTrigger />
    </PasswordInputGroup>
  </PasswordInput>
);

export default PasswordInputDemo;
