"use client";

import { useState } from "react";
import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts";
import {
  Card,
  CardAction,
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

export const PerformanceRadarExample = (props: React.ComponentProps<"div">) => {
  const [series, setSeries] = useState(["desktop", "mobile"]);
  const showMobile = series.includes("mobile");
  const showDesktop = series.includes("desktop");

  return (
    <Card {...props}>
      <CardHeader description="Desktop vs last period" title="Performance">
        <CardAction>
          <ToggleGroup
            multiple
            onValueChange={({ value }) => {
              if (value.length > 0) {
                setSeries(value);
              }
            }}
            size="sm"
            value={series}
            variant="outline"
          >
            <ToggleGroupItem value="desktop">Desktop</ToggleGroupItem>
            <ToggleGroupItem value="mobile">Mobile</ToggleGroupItem>
          </ToggleGroup>
        </CardAction>
      </CardHeader>
      <CardContent>
        <ChartContainer
          className="mx-auto aspect-square max-h-55"
          config={chartConfig}
        >
          <RadarChart accessibilityLayer={false} data={chartData}>
            <ChartTooltip
              content={(tooltipProps) => (
                <ChartTooltipContent {...tooltipProps} />
              )}
              cursor={false}
            />
            <PolarAngleAxis
              dataKey="month"
              tickFormatter={(value) => String(value).slice(0, 3)}
            />
            <PolarGrid />
            {showDesktop ? (
              <Radar
                dataKey="desktop"
                fill="var(--color-desktop)"
                fillOpacity={0.6}
              />
            ) : null}
            {showMobile ? (
              <Radar
                dataKey="mobile"
                fill="var(--color-mobile)"
                fillOpacity={0.4}
              />
            ) : null}
          </RadarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};

const chartData = [
  { desktop: 186, mobile: 80, month: "January" },
  { desktop: 305, mobile: 200, month: "February" },
  { desktop: 237, mobile: 120, month: "March" },
  { desktop: 273, mobile: 190, month: "April" },
  { desktop: 209, mobile: 130, month: "May" },
  { desktop: 214, mobile: 140, month: "June" },
];

const chartConfig = {
  desktop: {
    color: "var(--chart-1)",
    label: "Desktop",
  },
  mobile: {
    color: "var(--chart-2)",
    label: "Mobile",
  },
} satisfies ChartConfig;
