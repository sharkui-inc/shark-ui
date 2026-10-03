"use client";

import { CartesianGrid, Line, LineChart, XAxis } from "recharts";
import {
  type ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/registry/react/components/chart";

const Example = () => (
  <ChartContainer className="h-[250px] w-full max-w-sm" config={chartConfig}>
    <LineChart accessibilityLayer data={chartData}>
      <CartesianGrid vertical={false} />
      <XAxis axisLine={false} dataKey="month" tickLine={false} />
      <ChartTooltip content={<ChartTooltipContent />} />
      <Line
        dataKey="signups"
        dot={{ r: 3 }}
        stroke="var(--color-signups)"
        strokeWidth={2}
        type="monotone"
      />
      <Line
        dataKey="target"
        dot={false}
        stroke="var(--color-target)"
        strokeDasharray="5 4"
        strokeWidth={2}
        type="monotone"
      />
      <ChartLegend content={<ChartLegendContent />} />
    </LineChart>
  </ChartContainer>
);

const chartData = [
  { month: "Jan", signups: 240, target: 180 },
  { month: "Feb", signups: 267, target: 205 },
  { month: "Mar", signups: 284, target: 220 },
];

const chartConfig = {
  signups: {
    label: "New customers",
    theme: { dark: "#93c5fd", light: "#2563eb" },
  },
  target: {
    label: "Monthly target",
    theme: { dark: "#fbbf24", light: "#b45309" },
  },
} satisfies ChartConfig;

export default Example;
