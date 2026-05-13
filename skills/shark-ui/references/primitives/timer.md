# Shark Timer

## When to use

- Countdowns, stopwatches, pomodoro timers, or interval-driven clocks.
- Multi-segment displays with labels, separators, and play/pause/reset controls.

## Install

```bash
npx shadcn@latest add @shark/timer
```

Manual deps from docs:

```bash
npm install @ark-ui/react lucide-react
```

## Canonical imports

```tsx
import {
  Timer,
  TimerActionTrigger,
  TimerArea,
  TimerControl,
  TimerItem,
  TimerItemGroup,
  TimerItemLabel,
  TimerPause,
  TimerReset,
  TimerResume,
  TimerSeparator,
  TimerStart,
  useTimer,
} from "@/components/ui/timer"
```

## Minimal pattern

```tsx
<Timer autoStart>
  <TimerArea>
    <TimerItemGroup>
      <TimerItem type="minutes" />
      <TimerItemLabel>Minutes</TimerItemLabel>
    </TimerItemGroup>
    <TimerSeparator>:</TimerSeparator>
    <TimerItemGroup>
      <TimerItem type="seconds" />
      <TimerItemLabel>Seconds</TimerItemLabel>
    </TimerItemGroup>
  </TimerArea>
</Timer>
```

### Key patterns

`useTimer` exposes machine state for fully custom UIs. `remainingMsUntilDate` helper supports countdown-to-date examples. Orient segments horizontally or vertically per examples.

## Common pitfalls

- Mixing up **countdown** vs **count-up** props—confirm mode in MDX before wiring controls.
- Omitting `TimerItem` `type` values—each segment must map to the timer machine fields you need.
- Missing `lucide-react` for packaged demos that rely on icons.

## Registry example files

- [`example-controlled.tsx`](/registry/react/examples/timer/example-controlled.tsx)
- [`example-countdown-date.tsx`](/registry/react/examples/timer/example-countdown-date.tsx)
- [`example-countdown.tsx`](/registry/react/examples/timer/example-countdown.tsx)
- [`example-custom-separator.tsx`](/registry/react/examples/timer/example-custom-separator.tsx)
- [`example-default.tsx`](/registry/react/examples/timer/example-default.tsx)
- [`example-interval.tsx`](/registry/react/examples/timer/example-interval.tsx)
- [`example-orientation-horizontal.tsx`](/registry/react/examples/timer/example-orientation-horizontal.tsx)
- [`example-orientation-vertical.tsx`](/registry/react/examples/timer/example-orientation-vertical.tsx)
- [`example-pomodoro.tsx`](/registry/react/examples/timer/example-pomodoro.tsx)
