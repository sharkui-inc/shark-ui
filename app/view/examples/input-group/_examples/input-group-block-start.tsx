import { CopyIcon, FileCodeIcon } from "lucide-react";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/registry/react/components/field";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
  InputGroupTextarea,
} from "@/registry/react/components/input-group";

const InputGroupBlockStart = () => (
  <FieldGroup className="w-full max-w-sm">
    <Field>
      <FieldLabel>Input</FieldLabel>
      <InputGroup className="h-auto">
        <InputGroupInput placeholder="Enter your name" />
        <InputGroupAddon align="block-start">
          <InputGroupText>Full Name</InputGroupText>
        </InputGroupAddon>
      </InputGroup>
      <FieldDescription>Header positioned above the input.</FieldDescription>
    </Field>
    <Field>
      <FieldLabel>Textarea</FieldLabel>
      <InputGroup>
        <InputGroupTextarea
          className="font-mono text-sm"
          placeholder="console.log('Hello, world!');"
        />
        <InputGroupAddon align="block-start">
          <FileCodeIcon className="text-muted-foreground" />
          <InputGroupText className="font-mono">script.js</InputGroupText>
          <InputGroupButton className="ml-auto" size="icon-xs">
            <CopyIcon />
            <span className="sr-only">Copy</span>
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
      <FieldDescription>Header positioned above the textarea.</FieldDescription>
    </Field>
  </FieldGroup>
);

export default InputGroupBlockStart;
