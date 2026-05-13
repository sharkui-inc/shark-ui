# Shark Calendar

## When to use

- Date selection interfaces and calendar-based scheduling UIs.
- Single-date, range, and constrained date picking patterns.

## Install

```bash
npx shadcn@latest add @shark/calendar
```

Manual deps from docs:

```bash
npm install @ark-ui/react lucide-react
```

## Canonical imports

```tsx
import {
  Calendar,
  CalendarViewControl,
  CalendarPrevTrigger,
  CalendarViewDate,
  CalendarNextTrigger,
  CalendarTable,
  CalendarWeekDays,
  CalendarTableDays,
  parseDate
} from "@/components/ui/calendar"
```

## Minimal pattern

```tsx
<Calendar>
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
```

### Key patterns

Single date selection with state:

```tsx
const [date, setDate] = useState<Date | undefined>(parseDate(new Date(Date.now())))

<Calendar    
  onValueChange={({ value }) => setDate(value)}
  value={date}
>
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
```

Date range selection:

```tsx
<Calendar selectionMode="range">
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
```

## Common pitfalls

- Using calendar for free-text date input flows better handled by date fields.
- Missing locale/disabled-date constraints for business rules.
- Treating calendar as date-time picker without explicit time UI.

## Registry example files

- [`example-booked-dates.tsx`](/registry/react/examples/calendar/example-booked-dates.tsx)
- [`example-controlled.tsx`](/registry/react/examples/calendar/example-controlled.tsx)
- [`example-custom-cell-size.tsx`](/registry/react/examples/calendar/example-custom-cell-size.tsx)
- [`example-default.tsx`](/registry/react/examples/calendar/example-default.tsx)
- [`example-fixed-weeks.tsx`](/registry/react/examples/calendar/example-fixed-weeks.tsx)
- [`example-min-max.tsx`](/registry/react/examples/calendar/example-min-max.tsx)
- [`example-month-year-selector.tsx`](/registry/react/examples/calendar/example-month-year-selector.tsx)
- [`example-multiple-months.tsx`](/registry/react/examples/calendar/example-multiple-months.tsx)
- [`example-presets.tsx`](/registry/react/examples/calendar/example-presets.tsx)
- [`example-range.tsx`](/registry/react/examples/calendar/example-range.tsx)
- [`example-select-today.tsx`](/registry/react/examples/calendar/example-select-today.tsx)
