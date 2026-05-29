import { LockIcon, UnlockIcon } from "lucide-react";
import {
  PasswordInput,
  PasswordInputGroup,
  PasswordInputIndicator,
  PasswordInputInput,
  PasswordInputTrigger,
} from "@/registry/react/components/password-input";

const PasswordInputDemo = () => (
  <PasswordInput className="w-full max-w-64">
    <PasswordInputGroup>
      <PasswordInputInput placeholder="Enter password" />
      <PasswordInputTrigger>
        <PasswordInputIndicator fallback={<LockIcon aria-hidden />}>
          <UnlockIcon aria-hidden />
        </PasswordInputIndicator>
      </PasswordInputTrigger>
    </PasswordInputGroup>
  </PasswordInput>
);

export default PasswordInputDemo;
