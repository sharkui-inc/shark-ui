"use client";

import { parseDate } from "@ark-ui/react";
import { DateInput } from "@/registry/react/components/date-input";

const Example = () => (
  <DateInput
    className="w-full max-w-64"
    defaultValue={[parseDate(new Date(Date.now()))]}
    showClear
  />
);

export default Example;
