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
    <FieldLabel htmlFor="inline-end-input">Input</FieldLabel>
    <InputGroup>
      <InputGroupInput
        id="inline-end-input"
        placeholder="Enter password"
        type="password"
      />
      <InputGroupAddon align="inline-end">
        <EyeOffIcon aria-hidden />
      </InputGroupAddon>
    </InputGroup>
    <FieldDescription>Icon positioned at the end.</FieldDescription>
  </Field>
);

export default InputGroupInlineEnd;
