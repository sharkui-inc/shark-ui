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
  DatePickerTrigger,
  DatePickerValue,
} from "@/registry/react/components/date-picker";

const DatePickerRtl = () => (
  <DatePicker>
    <DatePickerTrigger asChild>
      <Button className="w-56" variant="outline">
        <DatePickerValue placeholder="اختر تاريخًا" />
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
);

export default DatePickerRtl;
