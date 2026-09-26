"use client";

import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSet,
} from "@/registry/react/components/field";
import { Textarea } from "@/registry/react/components/textarea";

const FieldTextarea = () => (
  <FieldSet className="w-full max-w-xs">
    <FieldGroup>
      <Field>
        <FieldLabel>Feedback</FieldLabel>
        <Textarea placeholder="Your feedback helps us improve..." rows={4} />
        <FieldDescription>
          Share your thoughts about our service.
        </FieldDescription>
      </Field>
    </FieldGroup>
  </FieldSet>
);

export default FieldTextarea;
