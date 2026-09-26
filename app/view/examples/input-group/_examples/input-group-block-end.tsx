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

const InputGroupBlockEnd = () => (
  <FieldGroup className="w-full max-w-sm">
    <Field>
      <FieldLabel>Input</FieldLabel>
      <InputGroup className="h-auto">
        <InputGroupInput placeholder="Enter amount" />
        <InputGroupAddon align="block-end">
          <InputGroupText>USD</InputGroupText>
        </InputGroupAddon>
      </InputGroup>
      <FieldDescription>Footer positioned below the input.</FieldDescription>
    </Field>
    <Field>
      <FieldLabel>Textarea</FieldLabel>
      <InputGroup>
        <InputGroupTextarea placeholder="Write a comment..." />
        <InputGroupAddon align="block-end">
          <InputGroupText>0/280</InputGroupText>
          <InputGroupButton className="ml-auto" size="sm" variant="default">
            Post
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
      <FieldDescription>Footer positioned below the textarea.</FieldDescription>
    </Field>
  </FieldGroup>
);

export default InputGroupBlockEnd;
