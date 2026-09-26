"use client";

import React from "react";
import { Progress } from "@/registry/react/components/progress";
import { Slider } from "@/registry/react/components/slider";

const ProgressControlled = () => {
  const [value, setValue] = React.useState(50);

  return (
    <div className="flex w-full max-w-sm flex-col gap-4">
      <Progress className="w-full" value={value} />
      <Slider
        max={100}
        min={0}
        onValueChange={({ value: next }) => setValue(next[0])}
        step={1}
        value={[value]}
      />
    </div>
  );
};

export default ProgressControlled;
