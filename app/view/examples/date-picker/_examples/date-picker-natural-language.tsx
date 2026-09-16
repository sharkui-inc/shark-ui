"use client";

import { type DateValue, parseDate } from "@ark-ui/react";
import { addDays, addMonths, addYears } from "date-fns";
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
  useDatePicker,
} from "@/registry/react/components/date-picker";
import { Field, FieldLabel } from "@/registry/react/components/field";

const DatePickerNaturalLanguage = () => (
  <Field className="mx-auto w-full max-w-72">
    <FieldLabel>Schedule Date</FieldLabel>
    <DatePicker
      defaultValue={[parseDate(addDays(new Date(), 2))]}
      format={formatDate}
      parse={parseNaturalLanguage}
    >
      <DatePickerInput placeholder="Tomorrow or next week" />
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
      <PublishedDate />
    </DatePicker>
  </Field>
);

const PublishedDate = () => {
  const { value } = useDatePicker();

  return (
    <p className="px-1 text-muted-foreground text-sm">
      Your post will be published on{" "}
      <span className="font-medium">{formatDate(value[0])}</span>.
    </p>
  );
};

const formatDate = (date: DateValue | undefined) => {
  if (!date) {
    return "a date";
  }

  return date.toDate("UTC").toLocaleDateString("en-US", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
};

const parseNaturalLanguage = (value: string) => {
  const date = parseDateString(value);
  return date ? parseDate(date) : undefined;
};

const relativeDatePattern = /^in (\d+) (day|week|month|year)s?$/;

const parseDateString = (value: string): Date | undefined => {
  const trimmed = value.trim().toLowerCase();

  if (!trimmed) {
    return undefined;
  }

  const today = new Date();

  switch (trimmed) {
    case "today":
    case "tonight":
      return today;
    case "tomorrow":
    case "tmr":
      return addDays(today, 1);
    case "next week":
      return addDays(today, 7);
    case "next month":
      return addMonths(today, 1);
    case "next year":
      return addYears(today, 1);
    default:
      break;
  }

  const inMatch = trimmed.match(relativeDatePattern);

  if (inMatch) {
    const [, amount, unit] = inMatch;
    const count = Number(amount ?? "1");

    switch (unit) {
      case "week":
        return addDays(today, count * 7);
      case "month":
        return addMonths(today, count);
      case "year":
        return addYears(today, count);
      default:
        return addDays(today, count);
    }
  }

  const parsed = new Date(value);
  return Number.isNaN(parsed.getTime()) ? undefined : parsed;
};

export default DatePickerNaturalLanguage;
