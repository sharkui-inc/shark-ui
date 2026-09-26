import {
  ArrowUpIcon,
  CodeIcon,
  CopyIcon,
  InfoIcon,
  RefreshCwIcon,
} from "lucide-react";
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
  InputGroupText,
  InputGroupTextarea,
} from "@/registry/react/components/input-group";
import { Textarea } from "@/registry/react/components/textarea";

const InputGroupTextareaExamples = () => (
  <FieldGroup>
    <Field>
      <FieldLabel>Default Textarea (No Input Group)</FieldLabel>
      <Textarea placeholder="Enter your text here..." />
    </Field>
    <Field>
      <FieldLabel>Input Group</FieldLabel>
      <InputGroup>
        <InputGroupTextarea placeholder="Enter your text here..." />
      </InputGroup>
      <FieldDescription>
        This is a description of the input group.
      </FieldDescription>
    </Field>
    <Field invalid>
      <FieldLabel>Invalid</FieldLabel>
      <InputGroup>
        <InputGroupTextarea
          aria-invalid
          placeholder="Enter your text here..."
        />
      </InputGroup>
      <FieldDescription>
        This is a description of the input group.
      </FieldDescription>
    </Field>
    <Field disabled>
      <FieldLabel>Disabled</FieldLabel>
      <InputGroup>
        <InputGroupTextarea disabled placeholder="Enter your text here..." />
      </InputGroup>
      <FieldDescription>
        This is a description of the input group.
      </FieldDescription>
    </Field>
    <Field>
      <FieldLabel>Addon (block-start)</FieldLabel>
      <InputGroup>
        <InputGroupTextarea />
        <InputGroupAddon align="block-start">
          <InputGroupText>Ask, Search or Chat...</InputGroupText>
          <InfoIcon aria-hidden className="ml-auto text-muted-foreground" />
        </InputGroupAddon>
      </InputGroup>
      <FieldDescription>
        This is a description of the input group.
      </FieldDescription>
    </Field>
    <Field>
      <FieldLabel>Addon (block-end)</FieldLabel>
      <InputGroup>
        <InputGroupTextarea placeholder="Enter your text here..." />
        <InputGroupAddon align="block-end">
          <InputGroupText>0/280 characters</InputGroupText>
          <InputGroupButton
            aria-label="Send"
            className="ml-auto rounded-full"
            size="icon-xs"
            variant="default"
          >
            <ArrowUpIcon />
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
    </Field>
    <Field>
      <FieldLabel>Addon (Buttons)</FieldLabel>
      <InputGroup>
        <InputGroupTextarea
          className="min-h-[120px]"
          placeholder="Share your thoughts..."
        />
        <InputGroupAddon align="block-end">
          <InputGroupButton className="ml-auto" size="sm" variant="ghost">
            Cancel
          </InputGroupButton>
          <InputGroupButton size="sm" variant="default">
            Post Comment
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
    </Field>
    <Field>
      <FieldLabel>Code Editor</FieldLabel>
      <InputGroup>
        <InputGroupTextarea
          className="min-h-[300px] py-3"
          placeholder="console.log('Hello, world!');"
        />
        <InputGroupAddon align="block-start" className="border-b">
          <InputGroupText className="font-medium font-mono">
            <CodeIcon aria-hidden />
            script.js
          </InputGroupText>
          <InputGroupButton
            aria-label="Refresh"
            className="ml-auto"
            size="icon-xs"
          >
            <RefreshCwIcon />
          </InputGroupButton>
          <InputGroupButton aria-label="Copy" size="icon-xs" variant="ghost">
            <CopyIcon />
          </InputGroupButton>
        </InputGroupAddon>
        <InputGroupAddon align="block-end" className="border-t">
          <InputGroupText>Line 1, Column 1</InputGroupText>
          <InputGroupText className="ml-auto">JavaScript</InputGroupText>
        </InputGroupAddon>
      </InputGroup>
    </Field>
  </FieldGroup>
);

export default InputGroupTextareaExamples;
