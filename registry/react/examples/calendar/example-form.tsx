"use client";

import { parseDate } from "@ark-ui/react";
import React from "react";
import { Button } from "@/registry/react/components/button";
import {
  Calendar,
  CalendarNextTrigger,
  CalendarPrevTrigger,
  CalendarTable,
  CalendarTableDays,
  CalendarViewControl,
  CalendarViewDate,
  CalendarWeekDays,
} from "@/registry/react/components/calendar";
import {
  Card,
  CardContent,
  CardFooter,
} from "@/registry/react/components/card";
import { toast } from "@/registry/react/components/toast";

const Example = () => {
  const [value, setValue] = React.useState(initialValue);

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
        <CardContent className="flex justify-center">
          <Calendar
            onValueChange={({ value: nextValue }) => setValue(nextValue)}
            value={value}
          >
            <CalendarViewControl>
              <CalendarPrevTrigger />
              <CalendarViewDate />
              <CalendarNextTrigger />
            </CalendarViewControl>
            <CalendarTable>
              <CalendarWeekDays />
              <CalendarTableDays />
            </CalendarTable>
          </Calendar>
        </CardContent>
        <CardFooter className="justify-end">
          <Button
            onClick={() => setValue(initialValue)}
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

const initialValue = [parseDate("2025-04-15")];

export default Example;
