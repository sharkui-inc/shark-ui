"use client";

import React from "react";
import { InputOTP, InputOTPSlot } from "@/registry/react/components/input-otp";

const Example = () => {
  const [value, setValue] = React.useState([""]);

  const isCorrect = value.join("") === "1234";

  return (
    <div className="flex flex-col gap-4">
      <p className="text-muted-foreground text-center text-sm">
        Enter the code 1234
      </p>
      <InputOTP
        onValueChange={({ value: nextValue }) => setValue(nextValue)}
        value={value}
      >
        <InputOTPSlot index={0} />
        <InputOTPSlot index={1} />
        <InputOTPSlot index={2} />
        <InputOTPSlot index={3} />
      </InputOTP>

      <p className="text-muted-foreground text-center text-sm">
        {isCorrect ? "✅" : "❌"}
      </p>
    </div>
  );
};

export default Example;
