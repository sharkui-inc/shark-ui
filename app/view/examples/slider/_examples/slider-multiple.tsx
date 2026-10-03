import { Slider } from "@/registry/react/components/slider";

const SliderMultiple = () => (
  <Slider
    className="mx-auto w-full max-w-xs"
    defaultValue={[10, 20, 70]}
    max={100}
    step={10}
  />
);

export default SliderMultiple;
