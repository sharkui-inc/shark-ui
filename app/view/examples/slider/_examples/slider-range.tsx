import { Slider } from "@/registry/react/components/slider";

const SliderRange = () => (
  <Slider
    className="mx-auto w-full max-w-xs"
    defaultValue={[25, 50]}
    max={100}
    step={5}
  />
);

export default SliderRange;
