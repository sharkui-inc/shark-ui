"use client";

import React from "react";
import {
  NumberInput,
  NumberInputDecrement,
  NumberInputGroup,
  NumberInputIncrement,
  NumberInputInput,
} from "@/registry/react/components/number-input";

const Example = () => {
  const [value, setValue] = React.useState("1");

  const isNumberFive = value === "3";

  return (
    <div className="flex w-full max-w-48 flex-col gap-4 text-center text-sm">
      <p>Select the number 3</p>
      <NumberInput onValueChange={({ value }) => setValue(value)} value={value}>
        <NumberInputGroup>
          <NumberInputDecrement />
          <NumberInputInput />
          <NumberInputIncrement />
        </NumberInputGroup>
      </NumberInput>
      <p className="text-center">{isNumberFive ? "✅" : "❌"}</p>
    </div>
  );
};

export default Example;
