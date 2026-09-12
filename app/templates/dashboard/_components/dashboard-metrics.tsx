"use client";

import { TrendingUpIcon } from "lucide-react";
import { Line, LineChart } from "recharts";
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
} from "@/registry/react/components/chart";
import { metrics } from "../_data/dashboard";

const metricChartConfig = {
  value: { color: "var(--primary)", label: "Trend" },
} satisfies ChartConfig;

export const DashboardMetrics = () => (
  <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
    {metrics.map((metric) => (
      <Card key={metric.label}>
        <CardHeader description={metric.label} title={metric.value}>
          <CardAction>
            <Badge className="gap-1" size="sm" variant="success">
              <TrendingUpIcon aria-hidden="true" />
              {metric.change}
            </Badge>
          </CardAction>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <p className="text-muted-foreground text-xs">{metric.detail}</p>
          <MetricSparkline data={metric.trend} label={metric.label} />
        </CardContent>
        <CardFooter>
          <span className="text-muted-foreground text-xs">
            Monthly progress
          </span>
          <span className="ms-auto font-medium text-xs tabular-nums">
            {metric.target}
          </span>
        </CardFooter>
      </Card>
    ))}
  </div>
);

const MetricSparkline = ({
  data,
  label,
}: {
  data: number[];
  label: string;
}) => (
  <ChartContainer
    aria-hidden="true"
    className="aspect-auto! h-12 w-full"
    config={metricChartConfig}
  >
    <LineChart
      accessibilityLayer={false}
      data={data.map((value, index) => ({ index, value }))}
      margin={{ bottom: 2, left: 0, right: 0, top: 2 }}
    >
      <Line
        dataKey="value"
        dot={false}
        isAnimationActive={false}
        name={`${label} trend`}
        stroke="var(--color-value)"
        strokeWidth={2}
        type="monotone"
      />
    </LineChart>
  </ChartContainer>
);
