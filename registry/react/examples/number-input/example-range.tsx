import {
  NumberInput,
  NumberInputDecrement,
  NumberInputGroup,
  NumberInputIncrement,
  NumberInputInput,
} from "@/registry/react/components/number-input";

const Example = () => (
  <NumberInput className="w-full max-w-48" defaultValue="5" max={10} min={0}>
    <NumberInputGroup>
      <NumberInputDecrement />
      <NumberInputInput />
      <NumberInputIncrement />
    </NumberInputGroup>
  </NumberInput>
);

export default Example;
