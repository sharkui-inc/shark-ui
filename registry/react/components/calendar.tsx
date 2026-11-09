"use client";

import {
  DatePicker as ArkCalendar,
  useDatePickerContext as useArkDatePickerContext,
} from "@ark-ui/react/date-picker";
import { getLocalTimeZone } from "@internationalized/date";
import {
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "lucide-react";
import type React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/registry/react/components/button";
import { fieldLabelVariants } from "@/registry/react/components/field";
import { FormatNumber } from "@/registry/react/components/format";
import { nativeSelectVariants } from "@/registry/react/components/native-select";

export const useCalendarContext = useArkDatePickerContext;

interface CalendarProps
  extends Omit<React.ComponentProps<typeof ArkCalendar.Root>, "inline"> {
  /**
   * Show days from adjacent months.
   *
   * @default true
   */
  showOutsideDays?: boolean;
}

export const Calendar = (props: CalendarProps) => {
  const {
    lazyMount = true,
    unmountOnExit = true,
    timeZone = getLocalTimeZone(),
    showOutsideDays = true,
    className,
    ...rest
  } = props;

  return (
    <ArkCalendar.Root
      className={cn(
        "[--cell-size:--spacing(9)]",
        "w-fit",
        !showOutsideDays &&
          "**:data-[slot=calendar-table-cell-trigger]:data-outside-range:invisible",
        className
      )}
      data-hide-outside={showOutsideDays ? undefined : true}
      data-slot="calendar"
      lazyMount={lazyMount}
      unmountOnExit={unmountOnExit}
      {...rest}
      inline
      timeZone={timeZone}
    />
  );
};

export const CalendarControl = (
  props: React.ComponentProps<typeof ArkCalendar.Control>
) => {
  const { className, ...rest } = props;

  return (
    <ArkCalendar.Control
      className={cn("inline-flex items-center gap-2", className)}
      data-slot="calendar-control"
      {...rest}
    />
  );
};

export const CalendarLabel = (
  props: React.ComponentProps<typeof ArkCalendar.Label>
) => {
  const { className, ...rest } = props;

  return (
    // biome-ignore lint/a11y/noLabelWithoutControl: Ark UI label is associated with its field through context
    <ArkCalendar.Label
      className={cn(fieldLabelVariants(), className)}
      data-slot="calendar-label"
      {...rest}
    />
  );
};

export const CalendarTrigger = (
  props: React.ComponentProps<typeof ArkCalendar.Trigger>
) => <ArkCalendar.Trigger data-slot="calendar-trigger" {...props} />;

export const CalendarPresetTrigger = (
  props: React.ComponentProps<typeof ArkCalendar.PresetTrigger>
) => (
  <ArkCalendar.PresetTrigger data-slot="calendar-preset-trigger" {...props} />
);

export const CalendarViewDate = (
  props: React.ComponentProps<typeof ArkCalendar.RangeText>
) => {
  const { className, ...rest } = props;

  return (
    <ArkCalendar.RangeText
      className={cn("text-sm font-medium", className)}
      data-slot="calendar-range-text"
      {...rest}
    />
  );
};

export const CalendarTodayTrigger = (
  props: React.ComponentProps<typeof Button>
) => {
  const { variant = "outline", size = "lg", onClick, ...rest } = props;

  const calendar = useCalendarContext();

  return (
    <Button
      data-slot="calendar-today-trigger"
      size={size}
      variant={variant}
      {...rest}
      onClick={(event) => {
        onClick?.(event);
        if (event.defaultPrevented) {
          return;
        }
        calendar.selectToday();
      }}
    >
      Today
    </Button>
  );
};

export const CalendarClearTrigger = (
  props: React.ComponentProps<typeof ArkCalendar.ClearTrigger>
) => <ArkCalendar.ClearTrigger data-slot="calendar-clear-trigger" {...props} />;

export const CalendarYearSelect = (
  props: React.ComponentProps<typeof ArkCalendar.YearSelect>
) => {
  const { className, ...rest } = props;

  return (
    <div
      className={cn("relative", "w-fit", "has-[select:disabled]:opacity-64")}
      data-slot="calendar-year-select-wrapper"
    >
      <ArkCalendar.YearSelect
        className={cn(nativeSelectVariants(), className)}
        data-slot="calendar-year-select"
        {...rest}
      />
      <ChevronDownIcon
        aria-hidden="true"
        className={cn(
          "absolute inset-e-2.5 top-1/2",
          "size-4",
          "text-muted-foreground",
          "pointer-events-none select-none",
          "-translate-y-1/2"
        )}
        data-slot="calendar-year-select-icon"
      />
    </div>
  );
};

export const CalendarMonthSelect = (
  props: React.ComponentProps<typeof ArkCalendar.MonthSelect>
) => {
  const { className, ...rest } = props;

  return (
    <div
      className={cn("relative", "w-fit", "has-[select:disabled]:opacity-64")}
      data-slot="calendar-month-select-wrapper"
    >
      <ArkCalendar.MonthSelect
        className={cn(nativeSelectVariants(), className)}
        data-slot="calendar-month-select"
        {...rest}
      />
      <ChevronDownIcon
        aria-hidden="true"
        className={cn(
          "absolute inset-e-2.5 top-1/2",
          "size-4",
          "text-muted-foreground",
          "pointer-events-none select-none",
          "-translate-y-1/2"
        )}
        data-slot="calendar-month-select-icon"
      />
    </div>
  );
};

export const CalendarView = (
  props: React.ComponentProps<typeof ArkCalendar.View>
) => {
  const { className, ...rest } = props;

  return (
    <ArkCalendar.View
      className={cn("flex flex-col gap-1", className)}
      data-slot="calendar-view"
      {...rest}
    />
  );
};

export const CalendarContext = ArkCalendar.Context;

export const CalendarViewControl = (
  props: React.ComponentProps<typeof ArkCalendar.ViewControl>
) => {
  const { className, ...rest } = props;

  return (
    <ArkCalendar.ViewControl
      className={cn(
        "relative",
        "h-auto w-full",
        "flex items-center gap-1.5",
        className
      )}
      data-slot="calendar-view-control"
      {...rest}
    />
  );
};

export const CalendarPrevTrigger = (
  props: React.ComponentProps<typeof ArkCalendar.PrevTrigger>
) => (
  <ArkCalendar.PrevTrigger asChild data-slot="calendar-prev-trigger" {...props}>
    <Button className="me-auto" size="icon-md" variant="ghost">
      <ChevronLeftIcon aria-hidden="true" className="rtl:rotate-180" />
    </Button>
  </ArkCalendar.PrevTrigger>
);

export const CalendarNextTrigger = (
  props: React.ComponentProps<typeof ArkCalendar.NextTrigger>
) => (
  <ArkCalendar.NextTrigger asChild data-slot="calendar-next-trigger" {...props}>
    <Button className="ms-auto" size="icon-md" variant="ghost">
      <ChevronRightIcon aria-hidden="true" className="rtl:rotate-180" />
    </Button>
  </ArkCalendar.NextTrigger>
);

export const CalendarTable = (
  props: React.ComponentProps<typeof ArkCalendar.Table>
) => {
  const { "aria-labelledby": ariaLabelledBy, className, ...rest } = props;

  const calendar = useCalendarContext();
  const labelId = calendar.getLabelProps().id;
  const labelledBy = [ariaLabelledBy, labelId].filter(Boolean).join(" ");

  return (
    <ArkCalendar.Table
      aria-labelledby={labelledBy || undefined}
      className={cn("group", "w-full min-w-60", "border-collapse", className)}
      data-slot="calendar-table"
      {...rest}
    />
  );
};

interface CalendarWeekDaysProps
  extends React.ComponentProps<typeof ArkCalendar.TableHead> {
  /**
   * The format of the week days
   *
   * @default 'narrow'
   */
  format?: "narrow" | "short" | "long";
}

export const CalendarWeekDays = (props: CalendarWeekDaysProps) => {
  const { format = "narrow", ...rest } = props;

  return (
    <CalendarContext>
      {(calendar) => (
        <CalendarTableHead data-slot="calendar-table-head" {...rest}>
          <CalendarTableRow>
            {calendar.showWeekNumbers ? <CalendarWeekNumberHeaderCell /> : null}
            {calendar.weekDays.map((weekDay) => (
              <CalendarTableHeader key={weekDay.short}>
                {weekDay[format]}
              </CalendarTableHeader>
            ))}
          </CalendarTableRow>
        </CalendarTableHead>
      )}
    </CalendarContext>
  );
};

export const CalendarTableDays = (
  props: React.ComponentProps<typeof CalendarTableBody>
) => {
  const { tabIndex, ...rest } = props;

  return (
    <CalendarContext>
      {(calendar) => (
        <CalendarTableBody {...rest}>
          {calendar.weeks.map((week, index) => (
            <CalendarTableRow key={week[0].toString()}>
              {calendar.showWeekNumbers ? (
                <CalendarWeekNumberCell week={week} weekIndex={index}>
                  <FormatNumber
                    useGrouping={false}
                    value={calendar.getWeekNumber(week)}
                  />
                </CalendarWeekNumberCell>
              ) : null}
              {week.map((day) => (
                <CalendarTableCell
                  key={day.day}
                  tabIndex={tabIndex ?? undefined}
                  value={day}
                >
                  <FormatNumber useGrouping={false} value={day.day} />
                </CalendarTableCell>
              ))}
            </CalendarTableRow>
          ))}
        </CalendarTableBody>
      )}
    </CalendarContext>
  );
};

interface CalendarTableNextMonthProps
  extends React.ComponentProps<typeof CalendarTableBody> {
  /**
   * The number of months to offset
   *
   * @default 1
   */
  months?: number;
}

export const CalendarTableNextMonth = (props: CalendarTableNextMonthProps) => {
  const { months = 1, tabIndex, ...rest } = props;

  return (
    <CalendarContext>
      {(calendar) => {
        const offset = calendar.getOffset({ months });

        return (
          <CalendarTableBody {...rest}>
            {offset.weeks.map((week, index) => (
              <CalendarTableRow key={week[0].toString()}>
                {calendar.showWeekNumbers ? (
                  <CalendarWeekNumberCell week={week} weekIndex={index}>
                    <FormatNumber
                      useGrouping={false}
                      value={calendar.getWeekNumber(week)}
                    />
                  </CalendarWeekNumberCell>
                ) : null}
                {week.map((day) => (
                  <CalendarTableCell
                    key={day.day}
                    tabIndex={tabIndex ?? undefined}
                    value={day}
                    visibleRange={offset.visibleRange}
                  >
                    <FormatNumber useGrouping={false} value={day.day} />
                  </CalendarTableCell>
                ))}
              </CalendarTableRow>
            ))}
          </CalendarTableBody>
        );
      }}
    </CalendarContext>
  );
};

export const CalendarWeekNumberHeaderCell = (
  props: React.ComponentProps<typeof ArkCalendar.WeekNumberHeaderCell>
) => {
  const { className, children, ...rest } = props;

  return (
    <ArkCalendar.WeekNumberHeaderCell
      className={cn(
        "h-(--cell-size) w-full min-w-(--cell-size)",
        "flex items-center justify-center",
        "text-muted-foreground text-xs font-medium",
        "select-none",
        className
      )}
      data-slot="calendar-week-number-header"
      {...rest}
    >
      {children}
    </ArkCalendar.WeekNumberHeaderCell>
  );
};

export const CalendarWeekNumberCell = (
  props: React.ComponentProps<typeof ArkCalendar.WeekNumberCell>
) => {
  const { className, ...rest } = props;

  return (
    <ArkCalendar.WeekNumberCell
      className={cn(
        "h-(--cell-size) w-full min-w-(--cell-size)",
        "flex items-center justify-center",
        "text-muted-foreground text-xs font-medium tabular-nums",
        "select-none",
        className
      )}
      data-slot="calendar-week-number-cell"
      {...rest}
    />
  );
};

export const CalendarTableHead = (
  props: React.ComponentProps<typeof ArkCalendar.TableHead>
) => <ArkCalendar.TableHead data-slot="calendar-table-head" {...props} />;

export const CalendarTableRow = (
  props: React.ComponentProps<typeof ArkCalendar.TableRow>
) => {
  const { className, ...rest } = props;

  return (
    <ArkCalendar.TableRow
      className={cn("w-full", "flex", "mt-1", className)}
      data-slot="calendar-table-row"
      {...rest}
    />
  );
};

export const CalendarTableHeader = (
  props: React.ComponentProps<typeof ArkCalendar.TableHeader>
) => {
  const { className, ...rest } = props;

  return (
    <ArkCalendar.TableHeader
      className={cn(
        "h-(--cell-size) w-full",
        "flex items-center justify-center",
        "text-muted-foreground text-xs font-medium",
        "select-none",
        "rounded-lg",
        className
      )}
      data-slot="calendar-table-header"
      {...rest}
    />
  );
};

export const CalendarTableBody = (
  props: React.ComponentProps<typeof ArkCalendar.TableBody>
) => <ArkCalendar.TableBody data-slot="calendar-table-body" {...props} />;

export const CalendarTableCell = (
  props: React.ComponentProps<typeof ArkCalendar.TableCell>
) => {
  const { value, visibleRange, className, ...rest } = props;

  return (
    <ArkCalendar.TableCell
      className={cn(
        "relative",
        "h-(--cell-size) w-full",
        "text-center",
        "select-none"
      )}
      data-slot="calendar-table-cell"
      value={value}
      visibleRange={visibleRange}
    >
      <ArkCalendar.TableCellTrigger
        className={cn(
          "inline-flex items-center justify-center gap-1",
          "h-(--cell-size) w-full min-w-(--cell-size)",
          "data-[view=day]:h-(--cell-size)",
          "text-foreground text-base leading-none font-normal whitespace-nowrap sm:text-sm",
          "select-none",
          "rounded-lg border border-transparent",
          "hover:bg-accent hover:text-accent-foreground",
          "data-today:data-selected:after:bg-background data-today:after:bg-primary data-today:after:absolute data-today:after:bottom-1 data-today:after:left-1/2 data-today:after:size-1 data-today:after:-translate-x-1/2 data-today:after:rounded-full",
          "data-focus:not-data-today:border-ring/64 data-focus:not-data-today:bg-accent data-focus:not-data-today:text-foreground data-focus:not-data-today:ring-ring/24 data-focus:not-data-today:ring-2",
          "outline-hidden",
          "focus-visible:not-data-today:border-ring/64 focus-visible:not-data-today:ring-ring/24 focus-visible:not-data-today:ring-2",
          "data-disabled:pointer-events-none data-disabled:opacity-64",
          "data-unavailable:pointer-events-none data-unavailable:line-through data-unavailable:opacity-64",
          "data-outside-range:text-muted-foreground",
          "data-[view=day]:data-in-range:not-data-selected:bg-primary/8",
          "data-selected:bg-primary data-selected:text-primary-foreground data-selected:border-transparent data-selected:ring-0",
          "data-selected:hover:bg-primary data-selected:hover:text-primary-foreground data-selected:hover:border-transparent",
          "data-selected:data-focus:not-data-today:bg-primary data-selected:data-focus:not-data-today:text-primary-foreground data-selected:data-focus:not-data-today:border-transparent data-selected:data-focus:not-data-today:ring-0",
          "data-selected:focus-visible:not-data-today:border-transparent data-selected:focus-visible:not-data-today:ring-0",
          "in-[:is([data-slot=calendar]:not([data-hide-outside]),[data-slot=date-picker-content])]:data-[view=day]:[[data-slot=calendar-table-cell]:not(:first-child):not([data-slot=calendar-week-number-cell]+[data-slot=calendar-table-cell])>&]:data-in-range:not-data-range-start:not-data-hover-range-start:rounded-s-none",
          "in-[:is([data-slot=calendar]:not([data-hide-outside]),[data-slot=date-picker-content])]:data-[view=day]:[[data-slot=calendar-table-cell]:not(:last-child)>&]:data-in-range:not-data-range-end:not-data-hover-range-end:rounded-e-none",
          "in-[[data-slot=calendar][data-hide-outside]]:data-[view=day]:[[data-slot=calendar-table-cell]:has([data-slot=calendar-table-cell-trigger]:not([data-outside-range]))+[data-slot=calendar-table-cell]>&]:data-in-range:not-data-range-start:not-data-hover-range-start:rounded-s-none",
          "in-[[data-slot=calendar][data-hide-outside]]:data-[view=day]:[[data-slot=calendar-table-cell]:has(+[data-slot=calendar-table-cell]_[data-slot=calendar-table-cell-trigger]:not([data-outside-range]))>&]:data-in-range:not-data-range-end:not-data-hover-range-end:rounded-e-none",
          "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
          className
        )}
        data-slot="calendar-table-cell-trigger"
        {...rest}
      />
    </ArkCalendar.TableCell>
  );
};
