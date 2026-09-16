import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@/registry/react/components/field";
import { Input } from "@/registry/react/components/input";

const InputInvalid = () => (
  <Field className="w-full max-w-64" invalid>
    <FieldLabel htmlFor="input-invalid">Invalid Input</FieldLabel>
    <Input aria-invalid id="input-invalid" placeholder="Error" />
    <FieldDescription>This field contains validation errors.</FieldDescription>
  </Field>
);

export default InputInvalid;
