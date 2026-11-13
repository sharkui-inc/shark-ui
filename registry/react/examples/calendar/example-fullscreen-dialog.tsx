"use client";

import { type DateValue, getLocalTimeZone } from "@internationalized/date";
import React from "react";
import { Button } from "@/registry/react/components/button";
import {
  Calendar,
  CalendarContext,
  CalendarTable,
  CalendarTableDays,
  CalendarTableNextMonth,
  useCalendarContext,
} from "@/registry/react/components/calendar";
import {
  Dialog,
  DialogBody,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
} from "@/registry/react/components/dialog";

const MONTH_COUNT = 12;
const MONTH_OFFSETS = Array.from(
  { length: MONTH_COUNT },
  (_, offset) => offset
);

const Example = () => {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState<DateValue[]>([]);

  return (
    <div className="grid min-h-svh place-items-center p-6">
      <Dialog
        onOpenChange={({ open: nextOpen }) => setOpen(nextOpen)}
        open={open}
      >
        <DialogTrigger asChild>
          <Button variant="outline">{formatRangeLabel(value)}</Button>
        </DialogTrigger>

        <DialogContent bottomStickOnMobile={false} size="fullscreen">
          <DialogHeader title="Select dates" />

          <Calendar
            className="flex min-h-0 w-full flex-1 flex-col"
            numOfMonths={MONTH_COUNT}
            onValueChange={({ value: nextValue }) => setValue(nextValue)}
            selectionMode="range"
            showOutsideDays={false}
            value={value}
          >
            <WeekdayStrip />

            <DialogBody className="px-(--space)">
              <MonthList />
            </DialogBody>

            <SelectionFooter />
          </Calendar>
        </DialogContent>
      </Dialog>
    </div>
  );
};

const MonthList = () => (
  <CalendarContext>
    {(calendar) => (
      <div className="flex flex-col gap-8">
        {MONTH_OFFSETS.map((offset) => {
          const monthStart =
            offset === 0
              ? calendar.visibleRange.start
              : calendar.getOffset({ months: offset }).visibleRange.start;

          return <MonthSection key={monthStart.toString()} offset={offset} />;
        })}
      </div>
    )}
  </CalendarContext>
);

const WeekdayStrip = () => (
  <CalendarContext>
    {(calendar) => (
      <div className="shrink-0 border-b px-(--space) pb-2">
        <div className="grid grid-cols-7">
          {calendar.weekDays.map((weekDay) => (
            <div
              className="text-muted-foreground text-center text-xs font-medium"
              key={weekDay.short}
            >
              {weekDay.narrow}
            </div>
          ))}
        </div>
      </div>
    )}
  </CalendarContext>
);

const MonthSection = (props: { offset: number }) => {
  const { offset } = props;

  return (
    <CalendarContext>
      {(calendar) => {
        const monthStart =
          offset === 0
            ? calendar.visibleRange.start
            : calendar.getOffset({ months: offset }).visibleRange.start;

        return (
          <div className="flex flex-col gap-2">
            <h3 className="font-medium capitalize">
              {calendar.format(monthStart, {
                month: "long",
                year: "numeric",
              })}
            </h3>
            <CalendarTable>
              {offset === 0 ? (
                <CalendarTableDays />
              ) : (
                <CalendarTableNextMonth months={offset} />
              )}
            </CalendarTable>
          </div>
        );
      }}
    </CalendarContext>
  );
};

const SelectionFooter = () => {
  const calendar = useCalendarContext();
  const [start, end] = calendar.value;
  const canSelect = calendar.value.length === 2;

  return (
    <DialogFooter className="sm:flex-col sm:justify-stretch">
      <div className="grid w-full grid-cols-2 gap-4">
        <div className="flex flex-col gap-1">
          <span className="text-muted-foreground text-xs">Start date</span>
          <span className="text-sm font-medium">
            {start ? formatDate(start) : "—"}
          </span>
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-muted-foreground text-xs">End date</span>
          <span className="text-sm font-medium">
            {end ? formatDate(end) : "—"}
          </span>
        </div>
      </div>
      <DialogClose asChild>
        <Button className="w-full" disabled={!canSelect}>
          Select dates
        </Button>
      </DialogClose>
    </DialogFooter>
  );
};

const formatDate = (date: DateValue) =>
  date.toDate(getLocalTimeZone()).toLocaleDateString(undefined, {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

const formatRangeLabel = (value: DateValue[]) => {
  if (value.length === 0) {
    return "Select dates";
  }

  if (value.length === 1) {
    return formatDate(value[0]);
  }

  return `${formatDate(value[0])} – ${formatDate(value[1])}`;
};

export default Example;
