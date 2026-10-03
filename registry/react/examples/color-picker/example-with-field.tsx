import {
  ColorPicker,
  ColorPickerControl,
  ColorPickerInput,
  ColorPickerLabel,
} from "@/registry/react/components/color-picker";
import { Field, FieldHelper } from "@/registry/react/components/field";
import { Input } from "@/registry/react/components/input";

const Example = () => (
  <ColorPicker className="w-full max-w-64" defaultValue="#eb5e41">
    <Field>
      <ColorPickerLabel>Color</ColorPickerLabel>
      <ColorPickerControl>
        <ColorPickerInput asChild>
          <Input />
        </ColorPickerInput>
      </ColorPickerControl>
      <FieldHelper>Enter your brand's primary color</FieldHelper>
    </Field>
  </ColorPicker>
);

export default Example;
