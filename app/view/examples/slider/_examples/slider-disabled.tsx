import { Slider } from "@/registry/react/components/slider";

const SliderDisabled = () => (
  <Slider
    className="mx-auto w-full max-w-xs"
    defaultValue={[50]}
    disabled
    max={100}
    step={1}
  />
);

export default SliderDisabled;
