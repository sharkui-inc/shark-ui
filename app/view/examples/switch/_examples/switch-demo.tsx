import { Field, FieldLabel } from "@/registry/react/components/field";
import { Switch } from "@/registry/react/components/switch";

const SwitchDemo = () => (
  <Field orientation="horizontal">
    <Switch />
    <FieldLabel>Airplane Mode</FieldLabel>
  </Field>
);

export default SwitchDemo;
