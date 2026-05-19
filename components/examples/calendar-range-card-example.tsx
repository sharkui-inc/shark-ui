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

export const CalendarRangeCardExample = (
  props: React.ComponentProps<"div">
) => (
  <Card
    className="[--space:--spacing(2)]"
    data-slot="example-calendar-range-card"
    {...props}
  >
    <CardContent>
      <Calendar selectionMode="range">
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
