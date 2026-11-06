"use client";

import { parseDate } from "@ark-ui/react";
import React from "react";
import {
  Calendar,
  CalendarMonthSelect,
  CalendarNextTrigger,
  CalendarPrevTrigger,
  CalendarTable,
  CalendarTableDays,
  CalendarViewControl,
  CalendarWeekDays,
  CalendarYearSelect,
} from "@/registry/react/components/calendar";
import { Card, CardContent } from "@/registry/react/components/card";

const CalendarBookedDates = () => {
  const [value, setValue] = React.useState([
    parseDate(new Date(new Date().getFullYear(), 0, 6)),
  ]);

  const bookedDates = Array.from(
    { length: 15 },
    (_, i) => new Date(new Date().getFullYear(), 0, 12 + i)
  );

  const isDateUnavailable = (date: {
    day: number;
    month: number;
    year: number;
  }) =>
    bookedDates.some(
      (booked) =>
        booked.getFullYear() === date.year &&
        booked.getMonth() + 1 === date.month &&
        booked.getDate() === date.day
    );

  return (
    <Card className="[--space:--spacing(2)]">
      <CardContent>
        <Calendar
          isDateUnavailable={isDateUnavailable}
          onValueChange={({ value: nextValue }) => setValue(nextValue)}
          value={value}
        >
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
        </Calendar>
      </CardContent>
    </Card>
  );
};

export default CalendarBookedDates;
