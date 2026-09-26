import { LockIcon, UnlockIcon } from "lucide-react";
import { PasswordInput } from "@/registry/react/components/password-input";

const PasswordInputDemo = () => (
  <PasswordInput
    className="w-full max-w-64"
    hiddenIcon={<LockIcon aria-hidden />}
    placeholder="Enter password"
    visibleIcon={<UnlockIcon aria-hidden />}
  />
);

export default PasswordInputDemo;
