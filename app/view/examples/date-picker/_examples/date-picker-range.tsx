import { parseDate } from "@ark-ui/react";
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
  DatePickerTrigger,
  DatePickerValue,
} from "@/registry/react/components/date-picker";
import { Field, FieldLabel } from "@/registry/react/components/field";

const DatePickerRange = () => {
  const year = new Date().getFullYear();

  return (
    <Field className="mx-auto w-64">
      <FieldLabel>Date Picker Range</FieldLabel>
      <DatePicker
        defaultValue={[
          parseDate(new Date(year, 0, 20)),
          parseDate(new Date(year, 0, 40)),
        ]}
        focusedValue={parseDate(new Date(year, 0, 20))}
        selectionMode="range"
      >
        <DatePickerTrigger asChild>
          <Button className="min-w-56" variant="outline">
            <CalendarIcon aria-hidden data-icon="inline-start" />
            <DatePickerValue placeholder="Pick a date range" />
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

export default DatePickerRange;
