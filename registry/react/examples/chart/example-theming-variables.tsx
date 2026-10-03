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
  <ChartContainer className="h-[250px] w-full max-w-sm" config={chartConfig}>
    <BarChart accessibilityLayer data={chartData}>
      <CartesianGrid vertical={false} />
      <XAxis axisLine={false} dataKey="month" tickLine={false} />
      <ChartTooltip content={<ChartTooltipContent />} />
      <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
      <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
      <ChartLegend content={<ChartLegendContent />} />
    </BarChart>
  </ChartContainer>
);

const chartData = [
  { desktop: 320, mobile: 210, month: "Jan" },
  { desktop: 370, mobile: 245, month: "Feb" },
  { desktop: 410, mobile: 280, month: "Mar" },
];

const chartConfig = {
  desktop: { color: "var(--chart-1)", label: "Desktop" },
  mobile: { color: "var(--chart-2)", label: "Mobile" },
} satisfies ChartConfig;

export default Example;
