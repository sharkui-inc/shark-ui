"use client";

import React from "react";
import {
  Field,
  FieldDescription,
  FieldTitle,
} from "@/registry/react/components/field";
import { Slider } from "@/registry/react/components/slider";

const FieldSlider = () => {
  const [value, setValue] = React.useState<number[]>([200, 800]);

  return (
    <Field className="w-full max-w-xs">
      <FieldTitle>Price Range</FieldTitle>
      <FieldDescription>
        Set your budget range ($
        <span className="font-medium tabular-nums">{value[0]}</span> -{" "}
        <span className="font-medium tabular-nums">{value[1]}</span>).
      </FieldDescription>
      <Slider
        aria-label={["Price Range"]}
        className="mt-2 w-full"
        max={1000}
        min={0}
        onValueChange={({ value: nextValue }) => setValue(nextValue)}
        step={10}
        value={value}
      />
    </Field>
  );
};

export default FieldSlider;
