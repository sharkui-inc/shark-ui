import { Field, FieldLabel } from "@/registry/react/components/field";
import { Switch } from "@/registry/react/components/switch";

const SwitchDisabled = () => (
  <Field className="w-fit" disabled orientation="horizontal">
    <Switch disabled />
    <FieldLabel>Disabled</FieldLabel>
  </Field>
);

export default SwitchDisabled;
