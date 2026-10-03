"use client";

import type React from "react";

import { Button } from "@/registry/react/components/button";
import {
  Card,
  CardContent,
  CardFooter,
} from "@/registry/react/components/card";
import {
  Field,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@/registry/react/components/field";
import {
  RadioGroup,
  RadioGroupItem,
} from "@/registry/react/components/radio-group";
import { toast } from "@/registry/react/components/toast";

const Example = () => {
  const onSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    const submittedValue = new FormData(event.currentTarget).get("contact");
    toast.info({
      description: String(submittedValue ?? "No selection"),
      title: "Form submitted",
    });
  };

  return (
    <Card asChild className="w-full max-w-md">
      <form onSubmit={onSubmit}>
        <CardContent>
          <FieldSet>
            <FieldLegend variant="label">Contact preference</FieldLegend>
            <RadioGroup defaultValue="email" name="contact">
              <Field orientation="horizontal">
                <RadioGroupItem value="email" />
                <FieldLabel>Email</FieldLabel>
              </Field>
              <Field orientation="horizontal">
                <RadioGroupItem value="phone" />
                <FieldLabel>Phone</FieldLabel>
              </Field>
            </RadioGroup>
          </FieldSet>
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
