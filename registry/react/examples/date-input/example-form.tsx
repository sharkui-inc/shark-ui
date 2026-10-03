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
  useDateInputContext,
} from "@/registry/react/components/date-input";
import { Field, FieldLabel } from "@/registry/react/components/field";
import { toast } from "@/registry/react/components/toast";

const Example = () => {
  const resetRef = React.useRef<(() => void) | null>(null);

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
            <FieldLabel>Appointment date</FieldLabel>
            <DateInput defaultValue={initialValue} name="date" showClear>
              <DateInputReset resetRef={resetRef} />
            </DateInput>
          </Field>
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

const DateInputReset = (props: {
  resetRef: { current: (() => void) | null };
}) => {
  const { resetRef } = props;
  const dateInput = useDateInputContext();

  React.useEffect(() => {
    resetRef.current = () => dateInput.setValue(initialValue);
    return () => {
      resetRef.current = null;
    };
  }, [dateInput, resetRef]);

  return null;
};

const initialValue = [parseDate("2025-04-15")];

export default Example;
