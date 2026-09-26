import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@/registry/react/components/field";
import { Input } from "@/registry/react/components/input";

const InputField = () => (
  <Field className="w-full max-w-64">
    <FieldLabel>Username</FieldLabel>
    <Input placeholder="Enter your username" type="text" />
    <FieldDescription>
      Choose a unique username for your account.
    </FieldDescription>
  </Field>
);

export default InputField;
