import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@/registry/react/components/field";
import { Input } from "@/registry/react/components/input";

const InputDisabled = () => (
  <Field className="w-full max-w-64" disabled>
    <FieldLabel>Email</FieldLabel>
    <Input disabled placeholder="Email" type="email" />
    <FieldDescription>This field is currently disabled.</FieldDescription>
  </Field>
);

export default InputDisabled;
