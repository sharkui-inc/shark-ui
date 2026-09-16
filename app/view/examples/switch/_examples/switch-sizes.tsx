import {
  Field,
  FieldGroup,
  FieldLabel,
} from "@/registry/react/components/field";
import { Switch } from "@/registry/react/components/switch";

const SwitchSizes = () => (
  <FieldGroup className="w-full max-w-[10rem]">
    <Field orientation="horizontal">
      <Switch className="[--size:--spacing(4)]" />
      <FieldLabel>Small</FieldLabel>
    </Field>
    <Field orientation="horizontal">
      <Switch />
      <FieldLabel>Default</FieldLabel>
    </Field>
  </FieldGroup>
);

export default SwitchSizes;
