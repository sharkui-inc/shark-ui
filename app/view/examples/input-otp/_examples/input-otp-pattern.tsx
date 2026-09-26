import { Field, FieldLabel } from "@/registry/react/components/field";
import { InputOTP, InputOTPSlot } from "@/registry/react/components/input-otp";

const InputOTPPattern = () => (
  <Field className="w-full max-w-64">
    <FieldLabel>Digits Only</FieldLabel>
    <InputOTP pattern="^\d+$">
      <InputOTPSlot index={0} />
      <InputOTPSlot index={1} />
      <InputOTPSlot index={2} />
      <InputOTPSlot index={3} />
      <InputOTPSlot index={4} />
      <InputOTPSlot index={5} />
    </InputOTP>
  </Field>
);

export default InputOTPPattern;
