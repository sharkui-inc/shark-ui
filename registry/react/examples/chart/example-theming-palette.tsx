"use client";

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import {
  type ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/registry/react/components/chart";

const Example = () => (
  <ChartContainer
    className="h-[250px] w-full max-w-sm [--chart-1:var(--color-cyan-600)] [--chart-2:var(--color-amber-600)]"
    config={chartConfig}
  >
    <BarChart accessibilityLayer data={chartData}>
      <CartesianGrid vertical={false} />
      <XAxis axisLine={false} dataKey="month" tickLine={false} />
      <ChartTooltip content={<ChartTooltipContent />} />
      <Bar dataKey="organic" fill="var(--color-organic)" radius={4} />
      <Bar dataKey="paid" fill="var(--color-paid)" radius={4} />
      <ChartLegend content={<ChartLegendContent />} />
    </BarChart>
  </ChartContainer>
);

const chartData = [
  { month: "Jan", organic: 126, paid: 78 },
  { month: "Feb", organic: 142, paid: 83 },
  { month: "Mar", organic: 159, paid: 74 },
];

const chartConfig = {
  organic: { color: "var(--chart-1)", label: "Organic search" },
  paid: { color: "var(--chart-2)", label: "Paid search" },
} satisfies ChartConfig;

export default Example;
