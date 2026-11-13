import { Slider, SliderLabel } from "@/registry/react/components/slider";

const Example = () => (
  <Slider className="w-full max-w-xs" defaultValue={[50]} disabled>
    <SliderLabel>Volume</SliderLabel>
  </Slider>
);

export default Example;
