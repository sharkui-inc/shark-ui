import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@/registry/react/components/field";
import { Input } from "@/registry/react/components/input";

const InputRequired = () => (
  <Field className="w-full max-w-64">
    <FieldLabel>
      Required Field <span className="text-destructive">*</span>
    </FieldLabel>
    <Input placeholder="This field is required" required />
    <FieldDescription>This field must be filled out.</FieldDescription>
  </Field>
);

export default InputRequired;
