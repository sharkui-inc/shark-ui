"use client";

import { DatePicker as ArkCalendar } from "@ark-ui/react/date-picker";
import { getDay } from "date-fns";
import {
  Calendar,
  CalendarContext,
  CalendarMonthSelect,
  CalendarNextTrigger,
  CalendarPrevTrigger,
  CalendarViewControl,
  CalendarWeekDays,
  CalendarYearSelect,
} from "@/registry/react/components/calendar";
import { Card, CardContent } from "@/registry/react/components/card";

const CalendarCustomDays = () => (
  <Card className="[--space:--spacing(2)]">
    <CardContent>
      <Calendar className="[--cell-size:--spacing(10)]" selectionMode="range">
        <CalendarViewControl>
          <CalendarPrevTrigger />
          <CalendarMonthSelect />
          <CalendarYearSelect />
          <CalendarNextTrigger />
        </CalendarViewControl>
        <ArkCalendar.Table className="group w-full min-w-60 border-collapse">
          <CalendarWeekDays />
          <CalendarContext>
            {(calendar) => (
              <ArkCalendar.TableBody>
                {calendar.weeks.map((week) => (
                  <ArkCalendar.TableRow
                    className="mt-1 flex w-full"
                    key={week.toString()}
                  >
                    {week.map((day) => (
                      <ArkCalendar.TableCell
                        className="relative flex h-[calc(var(--cell-size)*1.5)] w-full select-none items-center justify-center text-center"
                        key={day.toString()}
                        value={day}
                        visibleRange={calendar.visibleRange}
                      >
                        <ArkCalendar.TableCellTrigger className="inline-flex size-full select-none flex-col items-center justify-center gap-0.5 rounded-lg border border-transparent font-normal text-sm leading-none outline-hidden hover:bg-accent hover:text-accent-foreground data-selected:bg-primary data-selected:text-primary-foreground">
                          {day.day}
                          <span className="text-xs opacity-64">
                            {isWeekend(day) ? "$120" : "$100"}
                          </span>
                        </ArkCalendar.TableCellTrigger>
                      </ArkCalendar.TableCell>
                    ))}
                  </ArkCalendar.TableRow>
                ))}
              </ArkCalendar.TableBody>
            )}
          </CalendarContext>
        </ArkCalendar.Table>
      </Calendar>
    </CardContent>
  </Card>
);

const isWeekend = (date: { day: number; month: number; year: number }) => {
  const dayOfWeek = getDay(new Date(date.year, date.month - 1, date.day));
  return dayOfWeek === 0 || dayOfWeek === 6;
};

export default CalendarCustomDays;
