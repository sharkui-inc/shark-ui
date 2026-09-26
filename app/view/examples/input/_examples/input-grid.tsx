import {
  Field,
  FieldGroup,
  FieldLabel,
} from "@/registry/react/components/field";
import { Input } from "@/registry/react/components/input";

const InputGrid = () => (
  <FieldGroup className="grid w-full max-w-sm grid-cols-2">
    <Field>
      <FieldLabel>First Name</FieldLabel>
      <Input placeholder="Jordan" />
    </Field>
    <Field>
      <FieldLabel>Last Name</FieldLabel>
      <Input placeholder="Lee" />
    </Field>
  </FieldGroup>
);

export default InputGrid;
