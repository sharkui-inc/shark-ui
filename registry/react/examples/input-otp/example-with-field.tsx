import { Field, FieldDescription } from "@/registry/react/components/field";
import {
  InputOTP,
  InputOTPLabel,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/registry/react/components/input-otp";

const Example = () => (
  <Field className="w-full max-w-sm">
    <InputOTP count={6}>
      <InputOTPLabel>Verification code</InputOTPLabel>
      <InputOTPSlot index={0} />
      <InputOTPSlot index={1} />
      <InputOTPSlot index={2} />
      <InputOTPSeparator />
      <InputOTPSlot index={3} />
      <InputOTPSlot index={4} />
      <InputOTPSlot index={5} />
    </InputOTP>
    <FieldDescription>Enter the six-digit code we sent you.</FieldDescription>
  </Field>
);

export default Example;
