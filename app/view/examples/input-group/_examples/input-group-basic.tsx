import {
  Field,
  FieldGroup,
  FieldLabel,
} from "@/registry/react/components/field";
import { Input } from "@/registry/react/components/input";
import {
  InputGroup,
  InputGroupInput,
} from "@/registry/react/components/input-group";

const InputGroupBasic = () => (
  <FieldGroup className="w-full max-w-sm">
    <Field>
      <FieldLabel>Default (No Input Group)</FieldLabel>
      <Input placeholder="Placeholder" />
    </Field>
    <Field>
      <FieldLabel>Input Group</FieldLabel>
      <InputGroup>
        <InputGroupInput placeholder="Placeholder" />
      </InputGroup>
    </Field>
    <Field disabled>
      <FieldLabel>Disabled</FieldLabel>
      <InputGroup>
        <InputGroupInput disabled placeholder="This field is disabled" />
      </InputGroup>
    </Field>
    <Field invalid>
      <FieldLabel>Invalid</FieldLabel>
      <InputGroup>
        <InputGroupInput aria-invalid placeholder="This field is invalid" />
      </InputGroup>
    </Field>
  </FieldGroup>
);

export default InputGroupBasic;
