"use client";

import React from "react";

import { Button } from "@/registry/react/components/button";
import {
  Card,
  CardContent,
  CardFooter,
} from "@/registry/react/components/card";
import {
  CircularSlider,
  CircularSliderValue,
  useCircularSliderContext,
} from "@/registry/react/components/circular-slider";
import { toast } from "@/registry/react/components/toast";

const Example = () => {
  const resetRef = React.useRef<(() => void) | null>(null);

  const onSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    const submittedValue = new FormData(event.currentTarget).get("angle");
    toast.info({
      description: `${submittedValue ?? "No angle selected"}°`,
      title: "Form submitted",
    });
  };

  return (
    <Card asChild className="w-full max-w-md">
      <form onSubmit={onSubmit}>
        <CardContent className="flex justify-center">
          <CircularSlider aria-label="Angle" defaultValue={45} name="angle">
            <CircularSliderValue suffix="°" />
            <CircularSliderReset resetRef={resetRef} />
          </CircularSlider>
        </CardContent>
        <CardFooter className="justify-end">
          <Button
            onClick={() => resetRef.current?.()}
            type="button"
            variant="outline"
          >
            Clear
          </Button>
          <Button type="submit">Submit</Button>
        </CardFooter>
      </form>
    </Card>
  );
};

const CircularSliderReset = (props: {
  resetRef: { current: (() => void) | null };
}) => {
  const { resetRef } = props;
  const circularSlider = useCircularSliderContext();

  React.useEffect(() => {
    resetRef.current = () => circularSlider.setValue(45);
    return () => {
      resetRef.current = null;
    };
  }, [circularSlider, resetRef]);

  return null;
};

export default Example;
