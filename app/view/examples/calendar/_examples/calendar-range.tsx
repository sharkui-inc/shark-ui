import { parseDate } from "@ark-ui/react";
import {
  Calendar,
  CalendarNextTrigger,
  CalendarPrevTrigger,
  CalendarTable,
  CalendarTableDays,
  CalendarTableNextMonth,
  CalendarViewControl,
  CalendarViewDate,
  CalendarWeekDays,
} from "@/registry/react/components/calendar";
import { Card, CardContent } from "@/registry/react/components/card";

const CalendarRange = () => {
  const year = new Date().getFullYear();

  return (
    <Card className="[--space:--spacing(2)]">
      <CardContent>
        <Calendar
          defaultValue={[
            parseDate(new Date(year, 0, 12)),
            parseDate(new Date(year, 0, 42)),
          ]}
          numOfMonths={2}
          selectionMode="range"
        >
          <CalendarViewControl>
            <CalendarPrevTrigger />
            <CalendarViewDate />
            <CalendarNextTrigger />
          </CalendarViewControl>
          <div className="flex gap-4">
            <CalendarTable>
              <CalendarWeekDays />
              <CalendarTableDays />
            </CalendarTable>
            <CalendarTable>
              <CalendarWeekDays />
              <CalendarTableNextMonth />
            </CalendarTable>
          </div>
        </Calendar>
      </CardContent>
    </Card>
  );
};

export default CalendarRange;
