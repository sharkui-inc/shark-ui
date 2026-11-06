"use client";

import { parseDate } from "@ark-ui/react";
import React from "react";
import { Button } from "@/registry/react/components/button";
import {
  Card,
  CardContent,
  CardFooter,
} from "@/registry/react/components/card";
import {
  DateInput,
  DateInputLabel,
} from "@/registry/react/components/date-input";
import { Field } from "@/registry/react/components/field";
import { toast } from "@/registry/react/components/toast";

const Example = () => {
  const [value, setValue] = React.useState([parseDate("2025-04-15")]);

  const onSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    const submittedValue = new FormData(event.currentTarget).getAll("date");
    toast.info({
      description:
        submittedValue.filter(Boolean).join(", ") || "No date entered",
      title: "Form submitted",
    });
  };

  return (
    <Card asChild className="w-full max-w-md">
      <form onSubmit={onSubmit}>
        <CardContent>
          <Field>
            <DateInput
              name="date"
              onValueChange={({ value: nextValue }) => setValue(nextValue)}
              showClear
              value={value}
            >
              <DateInputLabel>Appointment date</DateInputLabel>
            </DateInput>
          </Field>
        </CardContent>
        <CardFooter className="justify-end">
          <Button onClick={() => setValue([])} type="button" variant="outline">
            Clear
          </Button>
          <Button type="submit">Submit</Button>
        </CardFooter>
      </form>
    </Card>
  );
};

export default Example;
