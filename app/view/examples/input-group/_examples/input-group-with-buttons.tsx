import { CopyIcon, TrashIcon } from "lucide-react";
import {
  Field,
  FieldGroup,
  FieldLabel,
} from "@/registry/react/components/field";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/registry/react/components/input-group";

const InputGroupWithButtons = () => (
  <FieldGroup>
    <Field>
      <FieldLabel>Button</FieldLabel>
      <InputGroup>
        <InputGroupInput />
        <InputGroupAddon>
          <InputGroupButton>Default</InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
    </Field>
    <Field>
      <FieldLabel className="sr-only">Outline button input</FieldLabel>
      <InputGroup>
        <InputGroupInput />
        <InputGroupAddon>
          <InputGroupButton variant="outline">Outline</InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
    </Field>
    <Field>
      <FieldLabel className="sr-only">Secondary button input</FieldLabel>
      <InputGroup>
        <InputGroupInput />
        <InputGroupAddon>
          <InputGroupButton variant="secondary">Secondary</InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
    </Field>
    <Field>
      <FieldLabel className="sr-only">Inline secondary button input</FieldLabel>
      <InputGroup>
        <InputGroupInput />
        <InputGroupAddon align="inline-end">
          <InputGroupButton variant="secondary">Button</InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
    </Field>
    <Field>
      <FieldLabel className="sr-only">Copy button input</FieldLabel>
      <InputGroup>
        <InputGroupInput />
        <InputGroupAddon align="inline-end">
          <InputGroupButton aria-label="Copy" size="icon-xs">
            <CopyIcon />
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
    </Field>
    <Field>
      <FieldLabel className="sr-only">Delete button input</FieldLabel>
      <InputGroup>
        <InputGroupInput />
        <InputGroupAddon align="inline-end">
          <InputGroupButton
            aria-label="Delete"
            size="icon-xs"
            variant="secondary"
          >
            <TrashIcon />
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
    </Field>
  </FieldGroup>
);

export default InputGroupWithButtons;
