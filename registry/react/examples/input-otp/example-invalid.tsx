"use client";

import React from "react";
import { InputOTP, InputOTPSlot } from "@/registry/react/components/input-otp";

const Example = () => {
  const [value, setValue] = React.useState([""]);

  const isCorrect = value.join("") === "1234";

  return (
    <InputOTP
      invalid={!isCorrect}
      onValueChange={({ value: nextValue }) => setValue(nextValue)}
      value={value}
    >
      <InputOTPSlot index={0} />
      <InputOTPSlot index={1} />
      <InputOTPSlot index={2} />
      <InputOTPSlot index={3} />
    </InputOTP>
  );
};

export default Example;
