import { Field, FieldDescription } from "@/registry/react/components/field";
import {
  RadioGroup,
  RadioGroupItem,
} from "@/registry/react/components/radio-group";

const RadioGroupDescription = () => (
  <RadioGroup className="w-fit" defaultValue="comfortable">
    <Field>
      <RadioGroupItem value="default">Default</RadioGroupItem>
      <FieldDescription>Standard spacing for most use cases.</FieldDescription>
    </Field>
    <Field>
      <RadioGroupItem value="comfortable">Comfortable</RadioGroupItem>
      <FieldDescription>More space between elements.</FieldDescription>
    </Field>
    <Field>
      <RadioGroupItem value="compact">Compact</RadioGroupItem>
      <FieldDescription>Minimal spacing for dense layouts.</FieldDescription>
    </Field>
  </RadioGroup>
);

export default RadioGroupDescription;
