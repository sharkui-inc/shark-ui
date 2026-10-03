import { Slider } from "@/registry/react/components/slider";

const SliderDemo = () => (
  <Slider
    className="mx-auto w-full max-w-xs"
    defaultValue={[75]}
    max={100}
    step={1}
  />
);

export default SliderDemo;
