import { Slider, SliderLabel } from "@/registry/react/components/slider";

const Example = () => (
  <Slider className="w-full max-w-xs" defaultValue={[40, 60]}>
    <SliderLabel>Price range</SliderLabel>
  </Slider>
);

export default Example;
