import {
  NumberInput,
  NumberInputGroup,
  NumberInputInput,
} from "@/registry/react/components/number-input";

const Example = () => (
  <NumberInput className="w-full max-w-40" defaultValue="0">
    <NumberInputGroup>
      <NumberInputInput />
    </NumberInputGroup>
  </NumberInput>
);

export default Example;
