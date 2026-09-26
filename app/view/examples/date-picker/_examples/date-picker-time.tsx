import { ChevronDownIcon } from "lucide-react";
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
  DatePickerTimer,
  DatePickerTrigger,
  DatePickerValue,
} from "@/registry/react/components/date-picker";
import {
  Field,
  FieldGroup,
  FieldLabel,
} from "@/registry/react/components/field";

const DatePickerTime = () => (
  <FieldGroup className="w-fit max-w-full sm:flex-row">
    <Field className="w-44">
      <FieldLabel>Date</FieldLabel>
      <DatePicker>
        <DatePickerTrigger asChild>
          <Button className="w-full justify-between" variant="outline">
            <DatePickerValue placeholder="Select date" />
            <ChevronDownIcon aria-hidden data-icon="inline-end" />
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
    <Field className="w-44">
      <FieldLabel>Time</FieldLabel>
      <DatePickerTimer defaultValue="10:30:00" />
    </Field>
  </FieldGroup>
);

export default DatePickerTime;
