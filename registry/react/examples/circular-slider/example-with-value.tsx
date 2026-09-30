"use client";

import { ThermometerIcon } from "lucide-react";
import {
  CircularSlider,
  CircularSliderValue,
} from "@/registry/react/components/circular-slider";

function Example() {
  return (
    <CircularSlider
      aria-label="Angle"
      defaultValue={90}
      size={120}
      thickness={10}
    >
      <CircularSliderValue
        prefix={<ThermometerIcon className="size-4" />}
        suffix="°"
      />
    </CircularSlider>
  );
}

export default Example;
