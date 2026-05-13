# Shark Chart

## When to use

- Dashboards and analytics with Recharts (`BarChart`, `LineChart`, `AreaChart`, etc.).
- Shared tooltip, legend, and theming helpers aligned to Shark tokens.

## Install

```bash
npx shadcn@latest add @shark/chart
```

Manual deps from docs:

```bash
npm install recharts
```

## Canonical imports

```tsx
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
```

## Minimal pattern

```tsx
import { Bar, BarChart } from "recharts"

<ChartContainer config={chartConfig}>
  <BarChart accessibilityLayer={false} data={data}>
    <Bar dataKey="value" />
    <ChartTooltip content={(props) => <ChartTooltipContent {...props} />} />
  </BarChart>
</ChartContainer>
```

### Key patterns

Define `chartConfig` for labels/colors. Use `ChartLegend` / `ChartLegendContent` when you need a legend. Prefer `ChartStyle` when docs show token injection for theme switching.

## Common pitfalls

- Stubbing `active`, `payload`, or coordinates on `ChartTooltipContent`—pass **Recharts’ props through** via `content={(props) => <ChartTooltipContent {...props} />}`.
- Omitting `ChartTooltip` wrapper entirely and losing shared styling/behavior.
- For static or non-interactive previews, set `accessibilityLayer={false}` on the chart root when appropriate to avoid stray `tabIndex` from Recharts.
- Installing only `@ark-ui/react`; charts require **recharts** per manual install.

## Registry example files

- [`example-default.tsx`](/registry/react/examples/chart/example-default.tsx)
