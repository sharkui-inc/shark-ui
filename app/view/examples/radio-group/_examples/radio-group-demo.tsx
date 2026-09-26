import {
  RadioGroup,
  RadioGroupItem,
} from "@/registry/react/components/radio-group";

const RadioGroupDemo = () => (
  <RadioGroup className="w-fit" defaultValue="comfortable">
    <RadioGroupItem value="default">Default</RadioGroupItem>
    <RadioGroupItem value="comfortable">Comfortable</RadioGroupItem>
    <RadioGroupItem value="compact">Compact</RadioGroupItem>
  </RadioGroup>
);

export default RadioGroupDemo;
