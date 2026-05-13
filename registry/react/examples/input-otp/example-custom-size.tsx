import { InputOTP, InputOTPSlot } from "@/registry/react/components/input-otp";

const Example = () => (
  <InputOTP className="*:data-[slot=input-otp-input]:size-12 *:data-[slot=input-otp-input]:text-lg">
    <InputOTPSlot index={0} />
    <InputOTPSlot index={1} />
    <InputOTPSlot index={2} />
    <InputOTPSlot index={3} />
  </InputOTP>
);

export default Example;
