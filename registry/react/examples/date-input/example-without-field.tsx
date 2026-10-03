"use client";

import {
  DateInput,
  DateInputLabel,
} from "@/registry/react/components/date-input";

const Example = () => (
  <div className="w-full max-w-64">
    <DateInput>
      <DateInputLabel>Date of birth</DateInputLabel>
    </DateInput>
  </div>
);

export default Example;
