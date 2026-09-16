import { Field, FieldLabel } from "@/registry/react/components/field";
import { Textarea } from "@/registry/react/components/textarea";

const TextareaDisabled = () => (
  <Field className="w-full max-w-xs" disabled>
    <FieldLabel htmlFor="textarea-disabled">Message</FieldLabel>
    <Textarea
      disabled
      id="textarea-disabled"
      placeholder="Type your message here."
    />
  </Field>
);

export default TextareaDisabled;
