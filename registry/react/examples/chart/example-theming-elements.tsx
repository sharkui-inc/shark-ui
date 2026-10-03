"use client";

import { Area, AreaChart, CartesianGrid, Line, XAxis } from "recharts";
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
    <AreaChart accessibilityLayer data={chartData}>
      <CartesianGrid vertical={false} />
      <XAxis axisLine={false} dataKey="month" tickLine={false} />
      <ChartTooltip content={<ChartTooltipContent />} />
      <Area
        dataKey="activated"
        fill="var(--color-activated)"
        fillOpacity={0.2}
        stroke="var(--color-activated)"
        type="monotone"
      />
      <Line
        dataKey="signups"
        dot={{ r: 3 }}
        stroke="var(--color-signups)"
        strokeWidth={2}
        type="monotone"
      />
      <ChartLegend content={<ChartLegendContent />} />
    </AreaChart>
  </ChartContainer>
);

const chartData = [
  { activated: 168, month: "Jan", signups: 240 },
  { activated: 190, month: "Feb", signups: 267 },
  { activated: 213, month: "Mar", signups: 284 },
];

const chartConfig = {
  activated: { color: "var(--chart-2)", label: "Activated accounts" },
  signups: { color: "var(--chart-1)", label: "New customers" },
} satisfies ChartConfig;

export default Example;
