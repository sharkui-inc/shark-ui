"use client";

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

const Example = () => (
  <div className="flex flex-wrap justify-center gap-2">
    {placements.map((placement) => (
      <DatePicker key={placement} positioning={{ placement }}>
        <DatePickerTrigger asChild>
          <Button className="min-w-36 capitalize" variant="outline">
            <CalendarIcon />
            <DatePickerValue placeholder={placement} />
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
    ))}
  </div>
);

const placements = ["left", "top", "bottom", "right"] as const;

export default Example;
