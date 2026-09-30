import {
  CircularSlider,
  CircularSliderLabel,
  CircularSliderValue,
} from "@/registry/react/components/circular-slider";
import { Field } from "@/registry/react/components/field";

const Example = () => (
  <Field className="w-full max-w-56">
    <CircularSlider aria-label="Angle" defaultValue={45}>
      <CircularSliderLabel>Angle</CircularSliderLabel>
      <CircularSliderValue suffix="°" />
    </CircularSlider>
  </Field>
);

export default Example;
