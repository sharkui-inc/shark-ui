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
} from "@/registry/react/components/date-picker";
import { Field } from "@/registry/react/components/field";

const Example = () => (
  <Field className="w-full max-w-64">
    <DatePicker className="w-full">
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
);

export default Example;
