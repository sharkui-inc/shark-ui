import { FieldLabel } from "@/registry/react/components/field";
import {
  NumberInput,
  NumberInputDecrement,
  NumberInputGroup,
  NumberInputIncrement,
  NumberInputInput,
} from "@/registry/react/components/number-input";

const Example = () => (
  <div className="flex flex-col gap-6">
    <NumberInput className="w-full max-w-48" defaultValue="0" step={5}>
      <FieldLabel>Step 5</FieldLabel>
      <NumberInputGroup>
        <NumberInputDecrement />
        <NumberInputInput />
        <NumberInputIncrement />
      </NumberInputGroup>
    </NumberInput>
    <NumberInput className="w-full max-w-48" defaultValue="0.1" step={0.1}>
      <FieldLabel>Step 0.1</FieldLabel>
      <NumberInputGroup>
        <NumberInputDecrement />
        <NumberInputInput />
        <NumberInputIncrement />
      </NumberInputGroup>
    </NumberInput>
  </div>
);

export default Example;
