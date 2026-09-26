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
      <InputGroup>
        <InputGroupInput id="input-button-14" />
        <InputGroupAddon>
          <InputGroupButton variant="outline">Outline</InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupInput id="input-button-15" />
        <InputGroupAddon>
          <InputGroupButton variant="secondary">Secondary</InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupInput id="input-button-16" />
        <InputGroupAddon align="inline-end">
          <InputGroupButton variant="secondary">Button</InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupInput id="input-button-17" />
        <InputGroupAddon align="inline-end">
          <InputGroupButton aria-label="Copy" size="icon-xs">
            <CopyIcon />
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupInput id="input-button-18" />
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
