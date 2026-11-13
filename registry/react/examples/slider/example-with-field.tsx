import { Field } from "@/registry/react/components/field";
import { Slider, SliderLabel } from "@/registry/react/components/slider";

const Example = () => (
  <Field className="w-full max-w-sm">
    <Slider defaultValue={[40]}>
      <SliderLabel>Volume</SliderLabel>
    </Slider>
  </Field>
);

export default Example;
