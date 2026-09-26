import { Checkbox } from "@/registry/react/components/checkbox";
import {
  Field,
  FieldGroup,
  FieldLabel,
} from "@/registry/react/components/field";

const CheckboxDisabled = () => (
  <FieldGroup className="mx-auto w-56">
    <Field disabled orientation="horizontal">
      <Checkbox disabled />
      <FieldLabel>Enable notifications</FieldLabel>
    </Field>
  </FieldGroup>
);

export default CheckboxDisabled;
