import {
  Slider,
  SliderLabel,
  SliderValue,
} from "@/registry/react/components/slider";

const Example = () => (
  <Slider
    className="w-full max-w-xs"
    defaultValue={[40]}
    largeStep={20}
    step={1}
  >
    <div className="flex items-center justify-between">
      <SliderLabel>Volume</SliderLabel>
      <SliderValue />
    </div>
  </Slider>
);

export default Example;
