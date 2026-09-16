"use client";

import React from "react";
import { InputOTP, InputOTPSlot } from "@/registry/react/components/input-otp";

const InputOTPControlled = () => {
  const [value, setValue] = React.useState<string[]>([""]);

  return (
    <div className="space-y-2">
      <InputOTP
        onValueChange={(details) => setValue(details.value)}
        value={value}
      >
        <InputOTPSlot index={0} />
        <InputOTPSlot index={1} />
        <InputOTPSlot index={2} />
        <InputOTPSlot index={3} />
        <InputOTPSlot index={4} />
        <InputOTPSlot index={5} />
      </InputOTP>
      <div className="text-center text-sm">
        {value.join("") === "" ? (
          <>Enter your one-time password.</>
        ) : (
          <>You entered: {value.join("")}</>
        )}
      </div>
    </div>
  );
};

export default InputOTPControlled;
