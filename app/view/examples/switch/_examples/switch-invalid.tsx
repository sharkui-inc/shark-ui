import {
  Field,
  FieldContent,
  FieldDescription,
  FieldLabel,
} from "@/registry/react/components/field";
import { Switch } from "@/registry/react/components/switch";

const SwitchInvalid = () => (
  <Field className="max-w-sm" invalid orientation="horizontal">
    <FieldContent>
      <FieldLabel>Accept terms and conditions</FieldLabel>
      <FieldDescription>
        You must accept the terms and conditions to continue.
      </FieldDescription>
    </FieldContent>
    <Switch />
  </Field>
);

export default SwitchInvalid;
