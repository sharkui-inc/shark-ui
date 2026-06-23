"use client";

import { parseDate } from "@ark-ui/react";
import React from "react";
import { DateInput } from "@/registry/react/components/date-input";

const Example = () => {
  const [value, setValue] = React.useState([parseDate("2024-04-04")]);

  return (
    <DateInput
      className="w-full max-w-64"
      onValueChange={(details) => setValue(details.value)}
      showClear
      value={value}
    />
  );
};

export default Example;
