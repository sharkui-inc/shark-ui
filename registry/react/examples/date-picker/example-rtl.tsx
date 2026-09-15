"use client";

import { CalendarIcon } from "lucide-react";
import { usePreviewLocale } from "@/hooks/use-preview-locale";
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

const Example = () => {
  const { locale } = usePreviewLocale();

  const { values } = translations[locale];

  return (
    <DatePicker locale={locale}>
      <DatePickerTrigger asChild>
        <Button className="min-w-56" variant="outline">
          <CalendarIcon />
          <DatePickerValue placeholder={values.placeholder} />
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
};

const translations = {
  ar: {
    values: {
      placeholder: "اختر تاريخًا",
    },
  },
  en: {
    values: {
      placeholder: "Pick a date",
    },
  },
  he: {
    values: {
      placeholder: "בחר תאריך",
    },
  },
};

export default Example;
