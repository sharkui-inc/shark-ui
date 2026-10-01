"use client";

import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";
import {
  type ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/registry/react/components/chart";

const Example = () => (
  <ChartContainer className="h-[280px] w-full max-w-sm" config={chartConfig}>
    <LineChart accessibilityLayer data={chartData}>
      <CartesianGrid vertical={false} />
      <XAxis axisLine={false} dataKey="month" tickLine={false} />
      <YAxis axisLine={false} domain={[0, 350]} tickLine={false} width={32} />
      <ChartTooltip
        content={
          <ChartTooltipContent formatter={(value) => `${value} customers`} />
        }
      />
      <Line
        dataKey="newCustomers"
        dot={{ r: 4 }}
        stroke="var(--color-newCustomers)"
        strokeWidth={3}
        type="monotone"
      />
      <Line
        dataKey="target"
        dot={false}
        stroke="var(--color-target)"
        strokeDasharray="6 4"
        strokeWidth={2.5}
        type="monotone"
      />
      <ChartLegend content={<ChartLegendContent />} />
    </LineChart>
  </ChartContainer>
);

const chartData = [
  { month: "Jan", newCustomers: 240, target: 250 },
  { month: "Feb", newCustomers: 267, target: 260 },
  { month: "Mar", newCustomers: 284, target: 280 },
];

const chartConfig = {
  newCustomers: { color: "var(--chart-1)", label: "New customers" },
  target: { color: "var(--chart-3)", label: "Monthly target" },
} satisfies ChartConfig;

export default Example;
