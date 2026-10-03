import {
  FieldDescription,
  FieldLegend,
  FieldSet,
} from "@/registry/react/components/field";
import {
  RadioGroup,
  RadioGroupItem,
} from "@/registry/react/components/radio-group";

const RadioGroupInvalid = () => (
  <FieldSet className="w-full max-w-xs">
    <FieldLegend variant="label">Notification Preferences</FieldLegend>
    <FieldDescription>
      Choose how you want to receive notifications.
    </FieldDescription>
    <RadioGroup defaultValue="email" invalid>
      <RadioGroupItem value="email">Email only</RadioGroupItem>
      <RadioGroupItem value="sms">SMS only</RadioGroupItem>
      <RadioGroupItem value="both">Both Email & SMS</RadioGroupItem>
    </RadioGroup>
  </FieldSet>
);

export default RadioGroupInvalid;
