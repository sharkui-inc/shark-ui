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

const DatePickerBasic = () => (
  <DatePicker>
    <DatePickerTrigger asChild>
      <Button className="min-w-56" variant="outline">
        <CalendarIcon aria-hidden data-icon="inline-start" />
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
);

export default DatePickerBasic;
