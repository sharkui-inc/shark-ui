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
  <ChartContainer className="h-[270px] w-full max-w-sm" config={chartConfig}>
    <BarChart accessibilityLayer data={chartData}>
      <CartesianGrid vertical={false} />
      <XAxis axisLine={false} dataKey="month" tickLine={false} />
      <ChartTooltip content={<ChartTooltipContent />} />
      <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
      <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
      <Bar dataKey="tablet" fill="var(--color-tablet)" radius={4} />
      <Bar dataKey="laptop" fill="var(--color-laptop)" radius={4} />
      <ChartLegend content={<ChartLegendContent className="flex-wrap" />} />
    </BarChart>
  </ChartContainer>
);

const chartData = [
  { desktop: 320, laptop: 120, mobile: 210, month: "Jan", tablet: 90 },
  { desktop: 370, laptop: 135, mobile: 245, month: "Feb", tablet: 105 },
  { desktop: 410, laptop: 150, mobile: 280, month: "Mar", tablet: 120 },
];

const chartConfig = {
  desktop: { color: "#2563eb", label: "Desktop" },
  laptop: { color: "var(--chart-2)", label: "Laptop" },
  mobile: { color: "hsl(150, 60%, 40%)", label: "Mobile" },
  tablet: { color: "oklch(0.68 0.16 75)", label: "Tablet" },
} satisfies ChartConfig;

export default Example;
