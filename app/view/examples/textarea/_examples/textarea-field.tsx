import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@/registry/react/components/field";
import { Textarea } from "@/registry/react/components/textarea";

const TextareaField = () => (
  <Field className="w-full max-w-xs">
    <FieldLabel>Message</FieldLabel>
    <FieldDescription>Enter your message below.</FieldDescription>
    <Textarea placeholder="Type your message here." />
  </Field>
);

export default TextareaField;
