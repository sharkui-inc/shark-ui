import {
  NumberInput,
  NumberInputDecrement,
  NumberInputGroup,
  NumberInputIncrement,
  NumberInputInput,
  NumberInputScrubber,
} from "@/registry/react/components/number-input";

const Example = () => (
  <NumberInput className="w-full max-w-40" defaultValue="10">
    <NumberInputScrubber>Quantity</NumberInputScrubber>
    <NumberInputGroup>
      <NumberInputDecrement />
      <NumberInputInput />
      <NumberInputIncrement />
    </NumberInputGroup>
  </NumberInput>
);

export default Example;
