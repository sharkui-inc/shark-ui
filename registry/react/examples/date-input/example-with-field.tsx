"use client";

import { DateInput } from "@/registry/react/components/date-input";
import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@/registry/react/components/field";

const Example = () => (
  <Field className="w-full max-w-64">
    <FieldLabel>Date of birth</FieldLabel>
    <DateInput />
    <FieldDescription>Use your local date format.</FieldDescription>
  </Field>
);

export default Example;
