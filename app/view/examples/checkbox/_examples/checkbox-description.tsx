import { Checkbox } from "@/registry/react/components/checkbox";
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/registry/react/components/field";

const CheckboxDescription = () => (
  <FieldGroup className="mx-auto w-72">
    <Field orientation="horizontal">
      <Checkbox defaultChecked />
      <FieldContent>
        <FieldLabel>Accept terms and conditions</FieldLabel>
        <FieldDescription>
          By clicking this checkbox, you agree to the terms and conditions.
        </FieldDescription>
      </FieldContent>
    </Field>
  </FieldGroup>
);

export default CheckboxDescription;
