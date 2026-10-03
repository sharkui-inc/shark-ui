"use client";

import type React from "react";

import { Button } from "@/registry/react/components/button";
import {
  Card,
  CardContent,
  CardFooter,
} from "@/registry/react/components/card";
import {
  ColorPicker,
  ColorPickerArea,
  ColorPickerAreaThumb,
  ColorPickerContent,
  ColorPickerControl,
  ColorPickerInput,
  ColorPickerSlider,
  ColorPickerSwatchPreview,
  ColorPickerTrigger,
  ColorPickerView,
} from "@/registry/react/components/color-picker";
import { Field, FieldLabel } from "@/registry/react/components/field";
import { Input } from "@/registry/react/components/input";
import { toast } from "@/registry/react/components/toast";

const Example = () => {
  const onSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    const value = new FormData(event.currentTarget).get("color");
    toast.info({
      description: String(value ?? "No color selected"),
      title: "Form submitted",
    });
  };

  return (
    <Card asChild className="w-full max-w-md">
      <form onSubmit={onSubmit}>
        <CardContent>
          <Field>
            <FieldLabel>Brand color</FieldLabel>
            <ColorPicker defaultValue={initialValue} name="color">
              <ColorPickerControl>
                <ColorPickerTrigger asChild>
                  <Button className="w-full justify-start" variant="outline">
                    <ColorPickerSwatchPreview />
                    Choose a color
                  </Button>
                </ColorPickerTrigger>
                <ColorPickerInput asChild>
                  <Input aria-label="Color value" />
                </ColorPickerInput>
              </ColorPickerControl>
              <ColorPickerContent>
                <ColorPickerArea>
                  <ColorPickerAreaThumb />
                </ColorPickerArea>
                <ColorPickerView format="hsla">
                  <ColorPickerSlider channel="hue" />
                  <ColorPickerSlider channel="alpha" />
                </ColorPickerView>
              </ColorPickerContent>
            </ColorPicker>
          </Field>
        </CardContent>
        <CardFooter className="justify-end">
          <Button type="reset" variant="outline">
            Clear
          </Button>
          <Button type="submit">Submit</Button>
        </CardFooter>
      </form>
    </Card>
  );
};

const initialValue = "#eb5e41";

export default Example;
