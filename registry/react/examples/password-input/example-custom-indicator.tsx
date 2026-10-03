import { LockIcon, UnlockIcon } from "lucide-react";
import { PasswordInput } from "@/registry/react/components/password-input";

const Example = () => (
  <PasswordInput
    aria-label="Password"
    className="w-full max-w-64"
    hiddenIcon={<LockIcon aria-hidden />}
    placeholder="Enter password"
    visibleIcon={<UnlockIcon aria-hidden />}
  />
);

export default Example;
