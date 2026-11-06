import { InputOTP, InputOTPSlot } from "@/registry/react/components/input-otp";

const InputOTPDemo = () => (
  <InputOTP defaultValue={["1", "2", "3", "4", "5", "6"]}>
    <InputOTPSlot index={0} />
    <InputOTPSlot index={1} />
    <InputOTPSlot index={2} />
    <InputOTPSlot index={3} />
    <InputOTPSlot index={4} />
    <InputOTPSlot index={5} />
  </InputOTP>
);

export default InputOTPDemo;
