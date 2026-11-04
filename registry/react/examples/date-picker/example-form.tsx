"use client";

import { parseDate } from "@ark-ui/react";
import { CalendarIcon } from "lucide-react";
import React from "react";
import { Button } from "@/registry/react/components/button";
import {
  CalendarMonthSelect,
  CalendarNextTrigger,
  CalendarPrevTrigger,
  CalendarTable,
  CalendarTableDays,
  CalendarViewControl,
  CalendarWeekDays,
  CalendarYearSelect,
} from "@/registry/react/components/calendar";
import {
  Card,
  CardContent,
  CardFooter,
} from "@/registry/react/components/card";
import {
  DatePicker,
  DatePickerContent,
  DatePickerLabel,
  DatePickerTrigger,
  DatePickerValue,
} from "@/registry/react/components/date-picker";
import { Field } from "@/registry/react/components/field";
import { toast } from "@/registry/react/components/toast";

const Example = () => {
  const [value, setValue] = React.useState([parseDate("2025-04-15")]);

  const onSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    toast.info({
      description:
        value.map((date) => date.toString()).join(", ") || "No date selected",
      title: "Form submitted",
    });
  };

  return (
    <Card asChild className="w-full max-w-md">
      <form onSubmit={onSubmit}>
        <CardContent>
          <Field>
            <DatePicker
              onValueChange={({ value: nextValue }) => setValue(nextValue)}
              value={value}
            >
              <DatePickerLabel>Appointment date</DatePickerLabel>
              <DatePickerTrigger asChild>
                <Button className="w-full justify-start" variant="outline">
                  <CalendarIcon aria-hidden="true" />
                  <DatePickerValue placeholder="Pick a date" />
                </Button>
              </DatePickerTrigger>
              <DatePickerContent>
                <CalendarViewControl>
                  <CalendarPrevTrigger />
                  <CalendarMonthSelect />
                  <CalendarYearSelect />
                  <CalendarNextTrigger />
                </CalendarViewControl>
                <CalendarTable>
                  <CalendarWeekDays />
                  <CalendarTableDays />
                </CalendarTable>
              </DatePickerContent>
            </DatePicker>
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
