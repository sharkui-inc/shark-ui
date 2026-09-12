"use client";

import { InputOTP, InputOTPSlot } from "@/registry/react/components/input-otp";
import { toast } from "@/registry/react/components/toast";

const Example = () => (
  <form onSubmit={handleSubmit}>
    <InputOTP autoSubmit name="otp">
      <InputOTPSlot index={0} />
      <InputOTPSlot index={1} />
      <InputOTPSlot index={2} />
      <InputOTPSlot index={3} />
    </InputOTP>
  </form>
);

const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault();
  const code = String(new FormData(event.currentTarget).get("otp") ?? "");

  toast.success({
    description: code,
    title: "Code submitted",
  });
};

export default Example;
