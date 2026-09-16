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
      <FieldLabel htmlFor="textarea-header-footer-12">
        Default Textarea (No Input Group)
      </FieldLabel>
      <Textarea
        id="textarea-header-footer-12"
        placeholder="Enter your text here..."
      />
    </Field>
    <Field>
      <FieldLabel htmlFor="textarea-header-footer-13">Input Group</FieldLabel>
      <InputGroup>
        <InputGroupTextarea
          id="textarea-header-footer-13"
          placeholder="Enter your text here..."
        />
      </InputGroup>
      <FieldDescription>
        This is a description of the input group.
      </FieldDescription>
    </Field>
    <Field invalid>
      <FieldLabel htmlFor="textarea-header-footer-14">Invalid</FieldLabel>
      <InputGroup>
        <InputGroupTextarea
          aria-invalid
          id="textarea-header-footer-14"
          placeholder="Enter your text here..."
        />
      </InputGroup>
      <FieldDescription>
        This is a description of the input group.
      </FieldDescription>
    </Field>
    <Field disabled>
      <FieldLabel htmlFor="textarea-header-footer-15">Disabled</FieldLabel>
      <InputGroup>
        <InputGroupTextarea
          disabled
          id="textarea-header-footer-15"
          placeholder="Enter your text here..."
        />
      </InputGroup>
      <FieldDescription>
        This is a description of the input group.
      </FieldDescription>
    </Field>
    <Field>
      <FieldLabel htmlFor="prompt-31">Addon (block-start)</FieldLabel>
      <InputGroup>
        <InputGroupTextarea id="prompt-31" />
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
      <FieldLabel htmlFor="textarea-header-footer-30">
        Addon (block-end)
      </FieldLabel>
      <InputGroup>
        <InputGroupTextarea
          id="textarea-header-footer-30"
          placeholder="Enter your text here..."
        />
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
      <FieldLabel htmlFor="textarea-comment-31">Addon (Buttons)</FieldLabel>
      <InputGroup>
        <InputGroupTextarea
          className="min-h-[120px]"
          id="textarea-comment-31"
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
      <FieldLabel htmlFor="textarea-code-32">Code Editor</FieldLabel>
      <InputGroup>
        <InputGroupTextarea
          className="min-h-[300px] py-3"
          id="textarea-code-32"
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
