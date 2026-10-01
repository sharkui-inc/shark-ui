"use client";

import { Pie, PieChart } from "recharts";
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
    className="mx-auto aspect-square max-h-[260px] w-full max-w-sm"
    config={chartConfig}
  >
    <PieChart accessibilityLayer>
      <ChartTooltip
        content={<ChartTooltipContent hideLabel nameKey="channel" />}
      />
      <Pie
        data={chartData}
        dataKey="customers"
        innerRadius={58}
        nameKey="channel"
        outerRadius={94}
        paddingAngle={3}
      />
      <ChartLegend content={<ChartLegendContent nameKey="channel" />} />
    </PieChart>
  </ChartContainer>
);

const chartData = [
  { channel: "organic", customers: 427, fill: "var(--color-organic)" },
  { channel: "paid", customers: 235, fill: "var(--color-paid)" },
  { channel: "referrals", customers: 129, fill: "var(--color-referrals)" },
];

const chartConfig = {
  organic: { color: "var(--chart-1)", label: "Organic search" },
  paid: { color: "var(--chart-2)", label: "Paid search" },
  referrals: { color: "var(--chart-3)", label: "Partner referrals" },
} satisfies ChartConfig;

export default Example;
