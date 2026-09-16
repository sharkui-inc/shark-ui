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
import { LocaleProvider } from "@/registry/react/components/locale";

const CalendarRtl = () => (
  <div dir="rtl">
    <LocaleProvider locale="ar-SA">
      <Card className="[--space:--spacing(2)]">
        <CardContent>
          <Calendar dir="rtl" locale="ar-SA">
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
    </LocaleProvider>
  </div>
);

export default CalendarRtl;
