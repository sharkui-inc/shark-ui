"use client";

import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
import {
  type ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/registry/react/components/chart";

const Example = () => (
  <ChartContainer className="h-[290px] w-full max-w-sm" config={chartConfig}>
    <BarChart accessibilityLayer data={chartData} stackOffset="expand">
      <CartesianGrid vertical={false} />
      <XAxis axisLine={false} dataKey="month" tickLine={false} />
      <YAxis
        axisLine={false}
        tickFormatter={(value) => `${Math.round(value * 100)}%`}
        tickLine={false}
        width={42}
      />
      <ChartTooltip content={<ChartTooltipContent />} />
      <Bar dataKey="organic" fill="var(--color-organic)" stackId="customers" />
      <Bar dataKey="paid" fill="var(--color-paid)" stackId="customers" />
      <Bar
        dataKey="referrals"
        fill="var(--color-referrals)"
        stackId="customers"
      />
      <ChartLegend content={<ChartLegendContent />} />
    </BarChart>
  </ChartContainer>
);

const chartData = [
  {
    month: "Jan",
    newCustomers: 240,
    organic: 126,
    paid: 78,
    referrals: 36,
    target: 250,
  },
  {
    month: "Feb",
    newCustomers: 267,
    organic: 142,
    paid: 83,
    referrals: 42,
    target: 260,
  },
  {
    month: "Mar",
    newCustomers: 284,
    organic: 159,
    paid: 74,
    referrals: 51,
    target: 280,
  },
];

const chartConfig = {
  newCustomers: { color: "var(--chart-4)", label: "New customers" },
  organic: { color: "var(--chart-1)", label: "Organic search" },
  paid: { color: "var(--chart-2)", label: "Paid search" },
  referrals: { color: "var(--chart-3)", label: "Partner referrals" },
  target: { color: "var(--chart-5)", label: "Monthly target" },
} satisfies ChartConfig;

export default Example;
