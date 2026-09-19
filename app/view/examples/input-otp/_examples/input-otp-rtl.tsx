"use client";

import { Field, FieldLabel } from "@/registry/react/components/field";
import { InputOTP, InputOTPSlot } from "@/registry/react/components/input-otp";

const InputOTPRtl = () => (
  <Field className="mx-auto max-w-xs">
    <FieldLabel htmlFor="input-otp-rtl">رمز التحقق</FieldLabel>
    <InputOTP defaultValue={["1", "2", "3", "4", "5", "6"]} id="input-otp-rtl">
      <InputOTPSlot index={0} />
      <InputOTPSlot index={1} />
      <InputOTPSlot index={2} />
      <InputOTPSlot index={3} />
      <InputOTPSlot index={4} />
      <InputOTPSlot index={5} />
    </InputOTP>
  </Field>
);

export default InputOTPRtl;
