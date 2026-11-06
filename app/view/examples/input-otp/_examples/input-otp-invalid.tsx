"use client";

import React from "react";
import {
  InputOTP,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/registry/react/components/input-otp";

const InputOTPInvalid = () => {
  const [value, setValue] = React.useState<string[]>([
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
  ]);

  return (
    <InputOTP
      onValueChange={(details) => setValue(details.value)}
      value={value}
    >
      <InputOTPSlot aria-invalid index={0} />
      <InputOTPSlot aria-invalid index={1} />
      <InputOTPSeparator />
      <InputOTPSlot aria-invalid index={2} />
      <InputOTPSlot aria-invalid index={3} />
      <InputOTPSeparator />
      <InputOTPSlot aria-invalid index={4} />
      <InputOTPSlot aria-invalid index={5} />
    </InputOTP>
  );
};

export default InputOTPInvalid;
