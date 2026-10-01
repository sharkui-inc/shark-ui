"use client";

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/registry/react/components/chart";

const Example = () => (
  <ChartContainer className="h-[250px] w-full max-w-sm" config={chartConfig}>
    <BarChart accessibilityLayer data={chartData}>
      <CartesianGrid vertical={false} />
      <XAxis axisLine={false} dataKey="month" tickLine={false} />
      <ChartTooltip content={<ChartTooltipContent />} />
      <Bar dataKey="organic" fill="var(--color-organic)" radius={4} />
      <Bar dataKey="paid" fill="var(--color-paid)" radius={4} />
      <Bar dataKey="referrals" fill="var(--color-referrals)" radius={4} />
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
