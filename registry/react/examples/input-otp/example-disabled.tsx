import { InputOTP, InputOTPSlot } from "@/registry/react/components/input-otp";

const Example = () => (
  <InputOTP defaultValue={["1", "2", "3", "4"]} disabled>
    <InputOTPSlot index={0} />
    <InputOTPSlot index={1} />
    <InputOTPSlot index={2} />
    <InputOTPSlot index={3} />
  </InputOTP>
);

export default Example;
