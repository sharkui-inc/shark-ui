import { Checkbox } from "@/registry/react/components/checkbox";
import {
  Field,
  FieldGroup,
  FieldLabel,
} from "@/registry/react/components/field";

const CheckboxBasic = () => (
  <FieldGroup className="mx-auto w-56">
    <Field orientation="horizontal">
      <Checkbox />
      <FieldLabel>Accept terms and conditions</FieldLabel>
    </Field>
  </FieldGroup>
);

export default CheckboxBasic;
