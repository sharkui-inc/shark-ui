import { Slider, SliderLabel } from "@/registry/react/components/slider";

const Example = () => (
  <Slider className="max-w-sm" defaultValue={[40]}>
    <SliderLabel>Volume</SliderLabel>
  </Slider>
);

export default Example;
