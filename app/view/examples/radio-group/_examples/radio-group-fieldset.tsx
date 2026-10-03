import {
  FieldDescription,
  FieldLegend,
  FieldSet,
} from "@/registry/react/components/field";
import {
  RadioGroup,
  RadioGroupItem,
} from "@/registry/react/components/radio-group";

const RadioGroupFieldset = () => (
  <FieldSet className="w-full max-w-xs">
    <FieldLegend variant="label">Subscription Plan</FieldLegend>
    <FieldDescription>
      Yearly and lifetime plans offer significant savings.
    </FieldDescription>
    <RadioGroup defaultValue="monthly">
      <RadioGroupItem value="monthly">Monthly ($9.99/month)</RadioGroupItem>
      <RadioGroupItem value="yearly">Yearly ($99.99/year)</RadioGroupItem>
      <RadioGroupItem value="lifetime">Lifetime ($299.99)</RadioGroupItem>
    </RadioGroup>
  </FieldSet>
);

export default RadioGroupFieldset;
