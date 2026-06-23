"use client";

import { parseDate } from "@ark-ui/react";
import { DateInput } from "@/registry/react/components/date-input";

const Example = () => (
  <DateInput
    className="w-full max-w-64"
    max={parseDate("2024-12-31")}
    min={parseDate("2024-01-01")}
  />
);

export default Example;
