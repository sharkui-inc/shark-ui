"use client";

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
  DatePicker,
  DatePickerContent,
  DatePickerTrigger,
  DatePickerValue,
} from "@/registry/react/components/date-picker";
import { Field, FieldLabel } from "@/registry/react/components/field";

const DatePickerDob = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <Field className="mx-auto w-56">
      <FieldLabel>Date of birth</FieldLabel>
      <DatePicker
        closeOnSelect
        onOpenChange={({ open: isOpen }) => setOpen(isOpen)}
        open={open}
      >
        <DatePickerTrigger asChild>
          <Button variant="outline">
            <CalendarIcon aria-hidden="true" data-icon="inline-start" />
            <DatePickerValue placeholder="Select date" />
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
  );
};

export default DatePickerDob;
