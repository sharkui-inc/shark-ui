"use client";

import {
  Calendar,
  CalendarNextTrigger,
  CalendarPrevTrigger,
  CalendarTable,
  CalendarTableDays,
  CalendarViewControl,
  CalendarViewDate,
  CalendarWeekDays,
} from "@/registry/react/components/calendar";
import { Card, CardContent } from "@/registry/react/components/card";
import { useLocale } from "@/registry/react/components/locale";

const Example = () => {
  const { locale } = useLocale();
  const language = locale.split("-")[0] as "ar" | "en" | "he";

  return (
    <Card className="[--space:--spacing(2)]">
      <CardContent>
        <Calendar dir={language === "en" ? "ltr" : "rtl"} locale={locale}>
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
      </CardContent>
    </Card>
  );
};

export default Example;
