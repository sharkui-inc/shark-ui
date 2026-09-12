"use client";

import { CopyIcon } from "lucide-react";
import { useState } from "react";
import { toast } from "@/components/examples/example-toast";
import { Button } from "@/registry/react/components/button";
import {
  Card,
  CardContent,
  CardHeader,
} from "@/registry/react/components/card";
import {
  ColorPicker,
  ColorPickerArea,
  ColorPickerAreaThumb,
  ColorPickerControl,
  ColorPickerInput,
  ColorPickerSwatch,
  ColorPickerSwatchGroup,
  ColorPickerSwatchIndicator,
  ColorPickerSwatchPreview,
  ColorPickerSwatchTrigger,
  parseColor,
} from "@/registry/react/components/color-picker";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/registry/react/components/input-group";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/registry/react/components/tooltip";

export const ColorPickerExample = (props: React.ComponentProps<"div">) => {
  const [hex, setHex] = useState("#eb5e41");

  return (
    <Card {...props}>
      <CardHeader
        description="Accent used across the product."
        title="Brand color"
      />
      <CardContent>
        <ColorPicker
          className="w-full flex-col gap-4"
          defaultValue="#eb5e41"
          format="hsla"
          inline
          onValueChange={({ value }) => setHex(value.toString("hex"))}
        >
          <ColorPickerArea
            className="aspect-[5/3] h-auto w-full"
            xChannel="hue"
            yChannel="lightness"
          >
            <ColorPickerAreaThumb />
          </ColorPickerArea>
          <ColorPickerSwatchGroup className="w-full">
            {swatches.map((color) => (
              <ColorPickerSwatchTrigger
                aria-label={color}
                key={color}
                value={color}
              >
                <ColorPickerSwatch value={color}>
                  <ColorPickerSwatchIndicator />
                </ColorPickerSwatch>
              </ColorPickerSwatchTrigger>
            ))}
          </ColorPickerSwatchGroup>
          <ColorPickerControl className="w-full">
            <InputGroup>
              <InputGroupAddon align="inline-start">
                <ColorPickerSwatchPreview aria-hidden="true" />
              </InputGroupAddon>
              <ColorPickerInput asChild channel="hex">
                <InputGroupInput aria-label="Brand color" />
              </ColorPickerInput>
              <InputGroupAddon align="inline-end">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      aria-label="Copy hex"
                      onClick={async () => {
                        await navigator.clipboard.writeText(hex);
                        toast.success({
                          description: hex,
                          title: "Copied",
                        });
                      }}
                      size="icon-xs"
                      variant="ghost"
                    >
                      <CopyIcon aria-hidden="true" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>Copy hex</TooltipContent>
                </Tooltip>
              </InputGroupAddon>
            </InputGroup>
          </ColorPickerControl>
        </ColorPicker>
      </CardContent>
    </Card>
  );
};

const brandSaturation = parseColor("#eb5e41")
  .toFormat("hsla")
  .getChannelValue("saturation");

const swatches = [
  "#eb5e41",
  "#ef4444",
  "#f59e0b",
  "#22c55e",
  "#06b6d4",
  "#3b82f6",
  "#8b5cf6",
  "#ec4899",
].map((color) =>
  parseColor(color)
    .toFormat("hsla")
    .withChannelValue("saturation", brandSaturation)
    .toString("hex")
);
