import { EyeOffIcon } from "lucide-react";
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

const InputGroupInlineEnd = () => (
  <Field className="w-full max-w-sm">
    <FieldLabel>Input</FieldLabel>
    <InputGroup>
      <InputGroupInput placeholder="Enter password" type="password" />
      <InputGroupAddon align="inline-end">
        <EyeOffIcon aria-hidden />
      </InputGroupAddon>
    </InputGroup>
    <FieldDescription>Icon positioned at the end.</FieldDescription>
  </Field>
);

export default InputGroupInlineEnd;
