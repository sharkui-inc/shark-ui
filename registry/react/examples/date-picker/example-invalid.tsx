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
import { Field, FieldError } from "@/registry/react/components/field";

const Example = () => (
  <Field className="w-full max-w-64" invalid>
    <DatePicker className="w-full" invalid>
      <DatePickerLabel>Appointment</DatePickerLabel>
      <DatePickerInput placeholder="Pick a date" />
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
    <FieldError>Select a valid date.</FieldError>
  </Field>
);

export default Example;
