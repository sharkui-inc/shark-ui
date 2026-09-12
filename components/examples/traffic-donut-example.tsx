"use client";

import { useMemo, useState } from "react";
import { Label, Pie, PieChart } from "recharts";
import {
  Card,
  CardContent,
  CardHeader,
} from "@/registry/react/components/card";
import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/registry/react/components/chart";
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/registry/react/components/toggle-group";

export const TrafficDonutExample = (props: React.ComponentProps<"div">) => {
  const [visible, setVisible] = useState(() =>
    chartData.map((item) => item.browser)
  );
  const visibleData = useMemo(
    () => chartData.filter((item) => visible.includes(item.browser)),
    [visible]
  );
  const totalVisitors = visibleData.reduce(
    (acc, curr) => acc + curr.visitors,
    0
  );

  return (
    <Card {...props}>
      <CardHeader description="Last 6 months" title="Traffic" />
      <CardContent className="flex flex-col gap-4">
        <ChartContainer
          className="mx-auto aspect-square h-55 w-full"
          config={chartConfig}
        >
          <PieChart accessibilityLayer={false}>
            <ChartTooltip
              content={(tooltipProps) => (
                <ChartTooltipContent {...tooltipProps} hideLabel />
              )}
              cursor={false}
            />
            <Pie
              data={visibleData}
              dataKey="visitors"
              innerRadius="60%"
              nameKey="browser"
              outerRadius="80%"
              stroke="var(--card)"
              strokeWidth={5}
            >
              <Label
                content={({ viewBox }) =>
                  viewBox && "cx" in viewBox && "cy" in viewBox ? (
                    <text
                      dominantBaseline="middle"
                      textAnchor="middle"
                      x={viewBox.cx}
                      y={viewBox.cy}
                    >
                      <tspan
                        className="fill-foreground font-bold text-3xl"
                        x={viewBox.cx}
                        y={viewBox.cy}
                      >
                        {totalVisitors.toLocaleString()}
                      </tspan>
                      <tspan
                        className="fill-muted-foreground"
                        x={viewBox.cx}
                        y={(viewBox.cy ?? 0) + 24}
                      >
                        Visitors
                      </tspan>
                    </text>
                  ) : null
                }
              />
            </Pie>
          </PieChart>
        </ChartContainer>
        <ToggleGroup
          className="flex w-full flex-wrap justify-center gap-2"
          onValueChange={({ value }) => {
            if (value.length > 0) {
              setVisible(value);
            }
          }}
          spacing={2}
          value={visible}
        >
          {chartData.map((item) => {
            const config =
              chartConfig[item.browser as keyof typeof chartConfig];
            const label =
              config && "label" in config ? config.label : item.browser;

            return (
              <ToggleGroupItem
                className="h-auto gap-1.5 rounded-md px-1.5 py-0.5 text-muted-foreground text-xs hover:bg-muted data-[state=off]:opacity-40"
                key={item.browser}
                value={item.browser}
              >
                <span
                  className="size-2 rounded-sm"
                  style={{
                    backgroundColor:
                      config && "color" in config ? config.color : item.fill,
                  }}
                />
                {label}
              </ToggleGroupItem>
            );
          })}
        </ToggleGroup>
      </CardContent>
    </Card>
  );
};

const chartData = [
  { browser: "chrome", fill: "var(--color-chrome)", visitors: 275 },
  { browser: "safari", fill: "var(--color-safari)", visitors: 200 },
  { browser: "firefox", fill: "var(--color-firefox)", visitors: 287 },
  { browser: "edge", fill: "var(--color-edge)", visitors: 173 },
  { browser: "other", fill: "var(--color-other)", visitors: 190 },
];

const chartConfig = {
  chrome: {
    color: "var(--chart-1)",
    label: "Chrome",
  },
  edge: {
    color: "var(--chart-4)",
    label: "Edge",
  },
  firefox: {
    color: "var(--chart-3)",
    label: "Firefox",
  },
  other: {
    color: "var(--chart-5)",
    label: "Other",
  },
  safari: {
    color: "var(--chart-2)",
    label: "Safari",
  },
  visitors: {
    label: "Visitors",
  },
} satisfies ChartConfig;
