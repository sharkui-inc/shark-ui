import { FieldLegend, FieldSet } from "@/registry/react/components/field";
import {
  RadioGroup,
  RadioGroupItem,
} from "@/registry/react/components/radio-group";

const Example = () => (
  <FieldSet className="w-full max-w-sm">
    <FieldLegend variant="label">Shipping method</FieldLegend>
    <RadioGroup defaultValue="standard">
      <RadioGroupItem value="standard">Standard shipping</RadioGroupItem>
      <RadioGroupItem value="express">Express shipping</RadioGroupItem>
    </RadioGroup>
  </FieldSet>
);

export default Example;
