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

const Example = () => (
  <Calendar className="w-fit">
    <CalendarLabel className="mb-2">Choose a date</CalendarLabel>
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
);

export default Example;
