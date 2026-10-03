import { Slider, SliderLabel } from "@/registry/react/components/slider";

const Example = () => (
  <Slider className="w-full max-w-xs" defaultValue={[20]}>
    <SliderLabel>Volume</SliderLabel>
  </Slider>
);

export default Example;
