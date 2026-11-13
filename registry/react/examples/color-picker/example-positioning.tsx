import { Button } from "@/registry/react/components/button";
import {
  ColorPicker,
  ColorPickerArea,
  ColorPickerContent,
  ColorPickerControl,
  ColorPickerSwatchPreview,
  ColorPickerTrigger,
} from "@/registry/react/components/color-picker";

const Example = () => (
  <div className="flex flex-wrap justify-center gap-2">
    {placements.map((placement) => (
      <ColorPicker
        defaultValue="#eb5e41"
        key={placement}
        positioning={{ placement }}
      >
        <ColorPickerControl>
          <ColorPickerTrigger asChild>
            <Button className="capitalize" size="lg" variant="ghost">
              <ColorPickerSwatchPreview className="size-6" />
              {placement}
            </Button>
          </ColorPickerTrigger>
        </ColorPickerControl>
        <ColorPickerContent>
          <ColorPickerArea />
        </ColorPickerContent>
      </ColorPicker>
    ))}
  </div>
);

const placements = ["left", "top", "bottom", "right"] as const;

export default Example;
