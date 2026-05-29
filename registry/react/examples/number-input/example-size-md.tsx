import {
  NumberInput,
  NumberInputDecrement,
  NumberInputGroup,
  NumberInputIncrement,
  NumberInputInput,
} from "@/registry/react/components/number-input";

const Example = () => (
  <NumberInput className="w-full max-w-48" defaultValue="10" size="md">
    <NumberInputGroup>
      <NumberInputDecrement />
      <NumberInputInput />
      <NumberInputIncrement />
    </NumberInputGroup>
  </NumberInput>
);

export default Example;
