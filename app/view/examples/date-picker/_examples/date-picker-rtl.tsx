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
import { LocaleProvider } from "@/registry/react/components/locale";

const DatePickerRtl = () => (
  <div dir="rtl">
    <LocaleProvider locale="ar-SA">
      <DatePicker dir="rtl" locale="ar-SA">
        <DatePickerTrigger asChild>
          <Button className="w-56" variant="outline">
            <DatePickerValue placeholder="اختر تاريخًا" />
            <ChevronDownIcon aria-hidden="true" data-icon="inline-end" />
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
    </LocaleProvider>
  </div>
);

export default DatePickerRtl;
