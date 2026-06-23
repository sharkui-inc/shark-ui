"use client";

import type { DateValue } from "@ark-ui/react";
import React from "react";
import { DateInput } from "@/registry/react/components/date-input";

const Example = () => {
  const [value, setValue] = React.useState<DateValue[]>([]);

  return (
    <div className="flex w-full max-w-64 flex-col gap-2">
      <DateInput
        className="w-full max-w-64"
        onValueChange={(details) => setValue(details.value)}
        value={value}
      />
      <pre className="text-muted-foreground text-xs">
        {JSON.stringify(value, null, 2)}
      </pre>
    </div>
  );
};

export default Example;
