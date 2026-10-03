"use client";

import { Slider } from "@/registry/react/components/slider";

const SliderRtl = () => (
  <Slider
    className="mx-auto w-full max-w-xs"
    defaultValue={[75]}
    max={100}
    step={1}
  />
);

export default SliderRtl;
