import { SearchIcon } from "lucide-react";
import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@/registry/react/components/field";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/registry/react/components/input-group";

const InputGroupInlineStart = () => (
  <Field className="w-full max-w-sm">
    <FieldLabel>Input</FieldLabel>
    <InputGroup>
      <InputGroupInput placeholder="Search..." />
      <InputGroupAddon align="inline-start">
        <SearchIcon aria-hidden />
      </InputGroupAddon>
    </InputGroup>
    <FieldDescription>Icon positioned at the start.</FieldDescription>
  </Field>
);

export default InputGroupInlineStart;
