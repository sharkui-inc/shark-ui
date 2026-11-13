import { Field, FieldGroup } from "@/registry/react/components/field";
import { Slider, SliderLabel } from "@/registry/react/components/slider";

const Example = () => (
  <FieldGroup className="w-full max-w-xs">
    <Field>
      <Slider defaultValue={[30, 70]} thumbCollisionBehavior="none">
        <SliderLabel>None</SliderLabel>
      </Slider>
    </Field>
    <Field>
      <Slider defaultValue={[30, 70]} thumbCollisionBehavior="push">
        <SliderLabel>Push</SliderLabel>
      </Slider>
    </Field>
    <Field>
      <Slider defaultValue={[30, 70]} thumbCollisionBehavior="swap">
        <SliderLabel>Swap</SliderLabel>
      </Slider>
    </Field>
  </FieldGroup>
);

export default Example;
