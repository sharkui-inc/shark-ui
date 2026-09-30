"use client";

import { CalendarIcon } from "lucide-react";
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
  DatePickerInput,
  DatePickerLabel,
  DatePickerTrigger,
  DatePickerValue,
} from "@/registry/react/components/date-picker";
import { Field } from "@/registry/react/components/field";

const Example = () => (
  <div className="flex w-full max-w-64 flex-col gap-6">
    <Field>
      <DatePicker>
        <DatePickerLabel>Date of birth</DatePickerLabel>
        <DatePickerTrigger asChild>
          <Button className="w-full justify-start" variant="outline">
            <CalendarIcon />
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
    <Field>
      <DatePicker>
        <DatePickerLabel>Appointment date</DatePickerLabel>
        <DatePickerInput placeholder="Select date" />
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
  </div>
);

export default Example;
