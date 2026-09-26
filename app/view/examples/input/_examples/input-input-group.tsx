import { InfoIcon } from "lucide-react";
import { Field, FieldLabel } from "@/registry/react/components/field";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
} from "@/registry/react/components/input-group";

const InputInputGroup = () => (
  <Field className="w-full max-w-64">
    <FieldLabel>Website URL</FieldLabel>
    <InputGroup>
      <InputGroupInput placeholder="example.com" />
      <InputGroupAddon>
        <InputGroupText>https://</InputGroupText>
      </InputGroupAddon>
      <InputGroupAddon align="inline-end">
        <InfoIcon aria-hidden />
      </InputGroupAddon>
    </InputGroup>
  </Field>
);

export default InputInputGroup;
