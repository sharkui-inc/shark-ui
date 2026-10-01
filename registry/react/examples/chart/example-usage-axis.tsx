"use client";

import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";
import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/registry/react/components/chart";

const Example = () => (
  <ChartContainer className="h-[270px] w-full max-w-sm" config={chartConfig}>
    <AreaChart accessibilityLayer data={chartData}>
      <CartesianGrid vertical={false} />
      <XAxis axisLine={false} dataKey="month" tickLine={false} />
      <YAxis axisLine={false} tickLine={false} width={36} />
      <ChartTooltip content={<ChartTooltipContent />} />
      <Area
        dataKey="organic"
        fill="var(--color-organic)"
        fillOpacity={0.34}
        stackId="customers"
        stroke="var(--color-organic)"
        type="monotone"
      />
      <Area
        dataKey="paid"
        fill="var(--color-paid)"
        fillOpacity={0.34}
        stackId="customers"
        stroke="var(--color-paid)"
        type="monotone"
      />
      <Area
        dataKey="referrals"
        fill="var(--color-referrals)"
        fillOpacity={0.34}
        stackId="customers"
        stroke="var(--color-referrals)"
        type="monotone"
      />
    </AreaChart>
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
