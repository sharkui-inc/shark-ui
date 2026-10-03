import {
  Field,
  FieldContent,
  FieldDescription,
  FieldLabel,
} from "@/registry/react/components/field";
import { Switch } from "@/registry/react/components/switch";

const SwitchDescription = () => (
  <Field className="max-w-sm" orientation="horizontal">
    <FieldContent>
      <FieldLabel>Share across devices</FieldLabel>
      <FieldDescription>
        Focus is shared across devices, and turns off when you leave the app.
      </FieldDescription>
    </FieldContent>
    <Switch />
  </Field>
);

export default SwitchDescription;
