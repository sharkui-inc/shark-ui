"use client";

import type React from "react";

import { Button } from "@/registry/react/components/button";
import {
  Card,
  CardContent,
  CardFooter,
} from "@/registry/react/components/card";
import {
  SegmentGroup,
  SegmentGroupItem,
  SegmentGroupItemText,
} from "@/registry/react/components/segment-group";
import { toast } from "@/registry/react/components/toast";

const Example = () => {
  const onSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    const value = new FormData(event.currentTarget).get("frequency");
    toast.info({
      description: String(value ?? "No selection"),
      title: "Form submitted",
    });
  };

  return (
    <Card asChild className="w-full max-w-md">
      <form onSubmit={onSubmit}>
        <CardContent className="flex justify-center">
          <SegmentGroup defaultValue="Weekly" name="frequency">
            {options.map((option) => (
              <SegmentGroupItem key={option} value={option}>
                <SegmentGroupItemText>{option}</SegmentGroupItemText>
              </SegmentGroupItem>
            ))}
          </SegmentGroup>
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

const options = ["Daily", "Weekly", "Monthly"];

export default Example;
