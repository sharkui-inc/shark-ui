import {
  Field,
  FieldContent,
  FieldDescription,
  FieldLabel,
} from "@/registry/react/components/field";
import {
  RadioGroup,
  RadioGroupItem,
} from "@/registry/react/components/radio-group";

const RadioGroupChoiceCard = () => (
  <RadioGroup className="w-full max-w-sm" defaultValue="plus">
    <FieldLabel>
      <Field>
        <FieldContent>
          <RadioGroupItem value="plus">Plus</RadioGroupItem>
          <FieldDescription>For individuals and small teams.</FieldDescription>
        </FieldContent>
      </Field>
    </FieldLabel>
    <FieldLabel>
      <Field>
        <FieldContent>
          <RadioGroupItem value="pro">Pro</RadioGroupItem>
          <FieldDescription>For growing businesses.</FieldDescription>
        </FieldContent>
      </Field>
    </FieldLabel>
    <FieldLabel>
      <Field>
        <FieldContent>
          <RadioGroupItem value="enterprise">Enterprise</RadioGroupItem>
          <FieldDescription>For large teams and enterprises.</FieldDescription>
        </FieldContent>
      </Field>
    </FieldLabel>
  </RadioGroup>
);

export default RadioGroupChoiceCard;
