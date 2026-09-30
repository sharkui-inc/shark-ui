import { Checkbox } from "@/registry/react/components/checkbox";
import {
  Field,
  FieldGroup,
  FieldLabel,
} from "@/registry/react/components/field";

const CheckboxInvalid = () => (
  <FieldGroup className="mx-auto min-w-56">
    <Field invalid orientation="horizontal">
      <Checkbox />
      <FieldLabel>Accept terms and conditions</FieldLabel>
    </Field>
  </FieldGroup>
);

export default CheckboxInvalid;
