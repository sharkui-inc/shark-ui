"use client";

import { parseDate } from "@ark-ui/react";
import {
  DateInput,
  DateInputLabel,
} from "@/registry/react/components/date-input";
import { Field, FieldDescription } from "@/registry/react/components/field";

const Example = () => (
  <Field className="w-full max-w-64">
    <DateInput max={parseDate("2027-12-31")} min={parseDate("2027-01-01")}>
      <DateInputLabel>Date</DateInputLabel>
    </DateInput>
    <FieldDescription>January 1 - December 31, 2027</FieldDescription>
  </Field>
);

export default Example;
