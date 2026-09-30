import {
  RadioGroup,
  RadioGroupItem,
  RadioGroupLabel,
} from "@/registry/react/components/radio-group";

const Example = () => (
  <RadioGroup className="max-w-sm" defaultValue="standard">
    <RadioGroupLabel>Shipping method</RadioGroupLabel>
    <RadioGroupItem value="standard">Standard shipping</RadioGroupItem>
    <RadioGroupItem value="express">Express shipping</RadioGroupItem>
  </RadioGroup>
);

export default Example;
