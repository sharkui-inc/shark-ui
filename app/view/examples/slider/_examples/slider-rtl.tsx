"use client";

import { LocaleProvider } from "@/registry/react/components/locale";
import { Slider } from "@/registry/react/components/slider";

const SliderRtl = () => (
  <div dir="rtl">
    <LocaleProvider locale="ar-SA">
      <Slider
        className="mx-auto w-full max-w-xs"
        defaultValue={[75]}
        max={100}
        step={1}
      />
    </LocaleProvider>
  </div>
);

export default SliderRtl;
