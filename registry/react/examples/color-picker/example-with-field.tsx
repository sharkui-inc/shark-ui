import {
  ColorPicker,
  ColorPickerControl,
  ColorPickerInput,
} from "@/registry/react/components/color-picker";
import {
  Field,
  FieldHelper,
  FieldLabel,
} from "@/registry/react/components/field";
import { Input } from "@/registry/react/components/input";

const Example = () => (
  <Field className="w-full max-w-64">
    <FieldLabel>Color</FieldLabel>
    <ColorPicker defaultValue="#eb5e41">
      <ColorPickerControl>
        <ColorPickerInput asChild>
          <Input />
        </ColorPickerInput>
      </ColorPickerControl>
    </ColorPicker>
    <FieldHelper>Enter your brand's primary color</FieldHelper>
  </Field>
);

export default Example;
