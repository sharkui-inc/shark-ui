import {
  InputOTP,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/registry/react/components/input-otp";

const InputOTPDisabled = () => (
  <InputOTP defaultValue={["1", "2", "3", "4", "5", "6"]} disabled>
    <InputOTPSlot index={0} />
    <InputOTPSlot index={1} />
    <InputOTPSlot index={2} />
    <InputOTPSeparator />
    <InputOTPSlot index={3} />
    <InputOTPSlot index={4} />
    <InputOTPSlot index={5} />
  </InputOTP>
);

export default InputOTPDisabled;
