import {
  Field,
  FieldGroup,
  FieldLabel,
} from "@/registry/react/components/field";
import { Input } from "@/registry/react/components/input";

const InputGrid = () => (
  <FieldGroup className="grid w-full max-w-sm grid-cols-2">
    <Field>
      <FieldLabel htmlFor="first-name">First Name</FieldLabel>
      <Input id="first-name" placeholder="Jordan" />
    </Field>
    <Field>
      <FieldLabel htmlFor="last-name">Last Name</FieldLabel>
      <Input id="last-name" placeholder="Lee" />
    </Field>
  </FieldGroup>
);

export default InputGrid;
