"use client";

import React from "react";
import {
  Slider,
  SliderLabel,
  SliderValue,
} from "@/registry/react/components/slider";

const SliderControlled = () => {
  const [value, setValue] = React.useState<number[]>([0.3, 0.7]);

  return (
    <Slider
      className="mx-auto w-full max-w-xs"
      max={1}
      min={0}
      onValueChange={({ value: next }) => setValue(next)}
      step={0.1}
      value={value}
    >
      <div className="flex items-center justify-between gap-2">
        <SliderLabel>Temperature</SliderLabel>
        <SliderValue />
      </div>
    </Slider>
  );
};

export default SliderControlled;
