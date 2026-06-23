"use client";

import { useDateFormatter } from "@ark-ui/react";
import { DateInput } from "@/registry/react/components/date-input";

const Example = () => {
  const formatter = useDateFormatter({
    hour: "numeric",
    minute: "2-digit",
    hourCycle: "h12",
  });

  return (
    <DateInput
      className="w-full max-w-64"
      formatter={formatter}
      granularity="minute"
      hourCycle={12}
    />
  );
};

export default Example;
