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
} from "@/registry/react/components/circular-slider";
import { toast } from "@/registry/react/components/toast";

const Example = () => {
  const [value, setValue] = React.useState(45);

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
          <CircularSlider
            aria-label="Angle"
            name="angle"
            onValueChange={({ value: nextValue }) => setValue(nextValue)}
            value={value}
          >
            <CircularSliderValue suffix="°" />
          </CircularSlider>
        </CardContent>
        <CardFooter className="justify-end">
          <Button onClick={() => setValue(0)} type="button" variant="outline">
            Clear
          </Button>
          <Button type="submit">Submit</Button>
        </CardFooter>
      </form>
    </Card>
  );
};

export default Example;
