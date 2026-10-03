import { Field } from "@/registry/react/components/field";
import {
  RadioGroup,
  RadioGroupItem,
  RadioGroupLabel,
} from "@/registry/react/components/radio-group";

const Example = () => (
  <Field className="w-full max-w-sm">
    <RadioGroup defaultValue="standard">
      <RadioGroupLabel>Shipping method</RadioGroupLabel>
      <RadioGroupItem value="standard">Standard shipping</RadioGroupItem>
      <RadioGroupItem value="express">Express shipping</RadioGroupItem>
    </RadioGroup>
  </Field>
);

export default Example;
