import { IslamicUmalquraCalendar } from "@internationalized/date";
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

const CalendarHijri = () => (
  <div dir="rtl">
    <Card className="[--space:--spacing(2)]">
      <CardContent>
        <Calendar createCalendar={createCalendar} locale="ar-SA">
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
  </div>
);

const createCalendar = (identifier: string) => {
  switch (identifier) {
    case "islamic-umalqura":
      return new IslamicUmalquraCalendar();
    default:
      throw new Error(`Unsupported calendar: ${identifier}`);
  }
};

export default CalendarHijri;
