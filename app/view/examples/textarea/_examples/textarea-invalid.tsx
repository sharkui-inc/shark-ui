import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@/registry/react/components/field";
import { Textarea } from "@/registry/react/components/textarea";

const TextareaInvalid = () => (
  <Field className="w-full max-w-xs" invalid>
    <FieldLabel>Message</FieldLabel>
    <Textarea aria-invalid placeholder="Type your message here." />
    <FieldDescription>Please enter a valid message.</FieldDescription>
  </Field>
);

export default TextareaInvalid;
