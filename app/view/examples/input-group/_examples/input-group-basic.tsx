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
      <FieldLabel htmlFor="input-default-01">
        Default (No Input Group)
      </FieldLabel>
      <Input id="input-default-01" placeholder="Placeholder" />
    </Field>
    <Field>
      <FieldLabel htmlFor="input-group-02">Input Group</FieldLabel>
      <InputGroup>
        <InputGroupInput id="input-group-02" placeholder="Placeholder" />
      </InputGroup>
    </Field>
    <Field disabled>
      <FieldLabel htmlFor="input-disabled-03">Disabled</FieldLabel>
      <InputGroup>
        <InputGroupInput
          disabled
          id="input-disabled-03"
          placeholder="This field is disabled"
        />
      </InputGroup>
    </Field>
    <Field invalid>
      <FieldLabel htmlFor="input-invalid-04">Invalid</FieldLabel>
      <InputGroup>
        <InputGroupInput
          aria-invalid
          id="input-invalid-04"
          placeholder="This field is invalid"
        />
      </InputGroup>
    </Field>
  </FieldGroup>
);

export default InputGroupBasic;
