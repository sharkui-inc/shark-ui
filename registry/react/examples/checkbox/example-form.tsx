"use client";

import type React from "react";

import { Button } from "@/registry/react/components/button";
import {
  Card,
  CardContent,
  CardFooter,
} from "@/registry/react/components/card";
import { Checkbox } from "@/registry/react/components/checkbox";
import { Field, FieldLabel } from "@/registry/react/components/field";
import { toast } from "@/registry/react/components/toast";

const Example = () => {
  const onSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    const submittedValue = new FormData(event.currentTarget).has("updates");
    toast.info({
      description: String(submittedValue),
      title: "Form submitted",
    });
  };

  return (
    <Card asChild className="w-full max-w-md">
      <form onSubmit={onSubmit}>
        <CardContent>
          <Field orientation="horizontal">
            <Checkbox defaultChecked={false} name="updates" />
            <FieldLabel>Receive product updates</FieldLabel>
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

export default Example;
