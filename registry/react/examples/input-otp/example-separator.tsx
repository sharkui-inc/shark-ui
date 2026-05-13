import {
  InputOTP,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/registry/react/components/input-otp";

const Example = () => (
  <InputOTP>
    <InputOTPSlot index={0} />
    <InputOTPSlot index={1} />
    <InputOTPSeparator />
    <InputOTPSlot index={2} />
    <InputOTPSlot index={3} />
    <InputOTPSeparator />
    <InputOTPSlot index={4} />
    <InputOTPSlot index={5} />
  </InputOTP>
);

export default Example;
