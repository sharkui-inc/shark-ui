# Shark Date Picker

## When to use

- Single date, range, or date+time selection with calendar popover and presets.
- Inputs that need parsing, validation, and locale-aware formatting.

## Install

```bash
npx shadcn@latest add @shark/date-picker
```

Manual deps from docs:

```bash
npm install @ark-ui/react lucide-react
```

## Canonical imports

```tsx
import {
  CalendarMonthSelect,
  CalendarNextTrigger,
  CalendarPrevTrigger,
  CalendarTable,
  CalendarTableDays,
  CalendarViewControl,
  CalendarWeekDays,
  CalendarYearSelect,
} from "@/components/ui/calendar"
import {
  DatePicker,
  DatePickerContent,
  DatePickerInput,
  DatePickerPresetTrigger,
  DatePickerTimer,
  DatePickerTrigger,
  DatePickerValue,
  useDatePicker,
} from "@/components/ui/date-picker"
```

## Minimal pattern

```tsx
<DatePicker>
  <DatePickerTrigger asChild>
    <Button className="min-w-56" variant="outline">
      <CalendarIcon aria-hidden />
      <DatePickerValue placeholder="Pick a date" />
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
```

Import `Calendar*` parts from `@/components/ui/calendar` per docs.

### Key patterns

`DatePicker` composes the Shark `Calendar`—mirror examples for range, time, presets, and custom format. `useDatePicker` exposes context for advanced composition.

## Common pitfalls

- Omitting `DatePickerContent` so the calendar never mounts in the popover.
- Mixing controlled `value` types (`DateValue[]` vs single) without matching the picker mode from docs.
- Forgetting `lucide-react` when examples import icons.

## Registry example files

- [`example-custom-format.tsx`](/registry/react/examples/date-picker/example-custom-format.tsx)
- [`example-default.tsx`](/registry/react/examples/date-picker/example-default.tsx)
- [`example-input.tsx`](/registry/react/examples/date-picker/example-input.tsx)
- [`example-range.tsx`](/registry/react/examples/date-picker/example-range.tsx)
- [`example-time.tsx`](/registry/react/examples/date-picker/example-time.tsx)
- [`example-with-presets.tsx`](/registry/react/examples/date-picker/example-with-presets.tsx)
