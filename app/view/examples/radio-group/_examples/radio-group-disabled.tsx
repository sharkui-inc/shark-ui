import { Field } from "@/registry/react/components/field";
import {
  RadioGroup,
  RadioGroupItem,
} from "@/registry/react/components/radio-group";

const RadioGroupDisabled = () => (
  <RadioGroup className="w-fit" defaultValue="option2">
    <Field disabled>
      <RadioGroupItem disabled value="option1">
        Disabled
      </RadioGroupItem>
    </Field>
    <Field>
      <RadioGroupItem value="option2">Option 2</RadioGroupItem>
    </Field>
    <Field>
      <RadioGroupItem value="option3">Option 3</RadioGroupItem>
    </Field>
  </RadioGroup>
);

export default RadioGroupDisabled;
