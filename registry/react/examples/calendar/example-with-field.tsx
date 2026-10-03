"use client";

import {
  Calendar,
  CalendarLabel,
  CalendarNextTrigger,
  CalendarPrevTrigger,
  CalendarTable,
  CalendarTableDays,
  CalendarViewControl,
  CalendarViewDate,
  CalendarWeekDays,
} from "@/registry/react/components/calendar";
import { Field } from "@/registry/react/components/field";

const Example = () => (
  <Field className="w-fit">
    <Calendar>
      <CalendarLabel>Choose a date</CalendarLabel>
      <CalendarViewControl>
        <CalendarPrevTrigger />
        <CalendarViewDate />
        <CalendarNextTrigger />
      </CalendarViewControl>
      <CalendarTable>
        <CalendarWeekDays />
        <CalendarTableDays />
      </CalendarTable>
    </Calendar>
  </Field>
);

export default Example;
