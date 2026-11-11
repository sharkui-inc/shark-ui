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
} from "@/registry/react/components/date-picker";

const Example = () => (
  <DatePicker className="w-full max-w-64">
    <DatePickerInput placeholder="Pick a date" size="lg" />
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

export default Example;
