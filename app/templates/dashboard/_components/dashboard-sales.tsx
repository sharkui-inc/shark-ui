"use client";

import { TrendingUpIcon } from "lucide-react";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";
import { Badge } from "@/registry/react/components/badge";
import {
  Card,
  CardAction,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/registry/react/components/card";
import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/registry/react/components/chart";
import { chartData, salesSummary } from "../_data/dashboard";

const chartConfig = {
  revenue: { color: "var(--primary)", label: "Revenue" },
} satisfies ChartConfig;

export const DashboardSales = () => (
  <Card>
    <CardHeader
      description={salesSummary.periodLabel}
      title="Sales performance"
    >
      <CardAction>
        <Badge className="gap-1" size="sm" variant="success">
          <TrendingUpIcon aria-hidden="true" />
          {salesSummary.change}
        </Badge>
      </CardAction>
    </CardHeader>
    <CardContent className="flex flex-col gap-5">
      <div className="grid grid-cols-2 gap-3">
        <div>
          <p className="text-muted-foreground text-xs">Net revenue</p>
          <p className="mt-1 font-heading font-semibold text-xl tabular-nums tracking-[-0.02em]">
            {salesSummary.netRevenue}
          </p>
        </div>
        <div className="border-s ps-3">
          <p className="text-muted-foreground text-xs">Completed orders</p>
          <p className="mt-1 font-heading font-semibold text-xl tabular-nums tracking-[-0.02em]">
            {salesSummary.orders}
          </p>
        </div>
      </div>
      <ChartContainer className="min-h-64 w-full" config={chartConfig}>
        <AreaChart accessibilityLayer data={chartData}>
          <defs>
            <linearGradient id="dashboard-revenue" x1="0" x2="0" y1="0" y2="1">
              <stop
                offset="5%"
                stopColor="var(--color-revenue)"
                stopOpacity={0.32}
              />
              <stop
                offset="95%"
                stopColor="var(--color-revenue)"
                stopOpacity={0}
              />
            </linearGradient>
          </defs>
          <CartesianGrid vertical={false} />
          <XAxis axisLine={false} dataKey="day" tickLine={false} />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Area
            dataKey="revenue"
            fill="url(#dashboard-revenue)"
            stroke="var(--color-revenue)"
            type="monotone"
          />
        </AreaChart>
      </ChartContainer>
    </CardContent>
    <CardFooter>
      <span className="text-muted-foreground">
        7-day average: {salesSummary.average}
      </span>
      <span className="ms-auto font-medium">
        Best day: {salesSummary.bestDay}
      </span>
    </CardFooter>
  </Card>
);
