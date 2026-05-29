import {
  NumberInput,
  NumberInputDecrement,
  NumberInputGroup,
  NumberInputIncrement,
  NumberInputInput,
} from "@/registry/react/components/number-input";

const Example = () => (
  <NumberInput className="w-full max-w-48" defaultValue="32" invalid>
    <NumberInputGroup>
      <NumberInputDecrement />
      <NumberInputInput />
      <NumberInputIncrement />
    </NumberInputGroup>
  </NumberInput>
);

export default Example;
