"use client";

import { Field, FieldLabel } from "@/registry/react/components/field";
import { InputOTP, InputOTPSlot } from "@/registry/react/components/input-otp";
import { LocaleProvider } from "@/registry/react/components/locale";

const InputOTPRtl = () => (
  <div dir="rtl">
    <LocaleProvider locale="ar-SA">
      <Field className="mx-auto max-w-xs">
        <FieldLabel htmlFor="input-otp-rtl">رمز التحقق</FieldLabel>
        <InputOTP
          defaultValue={["1", "2", "3", "4", "5", "6"]}
          dir="rtl"
          id="input-otp-rtl"
        >
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
          <InputOTPSlot index={3} />
          <InputOTPSlot index={4} />
          <InputOTPSlot index={5} />
        </InputOTP>
      </Field>
    </LocaleProvider>
  </div>
);

export default InputOTPRtl;
