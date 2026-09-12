"use client";

import { useState } from "react";
import { Area, AreaChart } from "recharts";
import { Badge } from "@/registry/react/components/badge";
import {
  Card,
  CardAction,
  CardDescription,
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

export const AnalyticsCardExample = (props: React.ComponentProps<"div">) => {
  const [range, setRange] = useState(["7d"]);
  const isMonth = range[0] === "30d";
  const data = isMonth ? chartData30d : chartData7d;
  const visitors = isMonth ? "1.2M visitors" : "418.2K visitors";
  const delta = isMonth ? "+6%" : "+10%";

  return (
    <Card className="pb-0" {...props}>
      <CardHeader title="Analytics">
        <CardDescription className="flex items-center gap-2">
          {visitors}
          <Badge variant="secondary">{delta}</Badge>
        </CardDescription>
        <CardAction>
          <ToggleGroup
            multiple={false}
            onValueChange={({ value }) => {
              if (value.length > 0) {
                setRange(value);
              }
            }}
            size="sm"
            value={range}
            variant="outline"
          >
            <ToggleGroupItem value="7d">7d</ToggleGroupItem>
            <ToggleGroupItem value="30d">30d</ToggleGroupItem>
          </ToggleGroup>
        </CardAction>
      </CardHeader>
      <ChartContainer className="aspect-[1/0.35]" config={chartConfig}>
        <AreaChart
          accessibilityLayer={false}
          data={data}
          margin={{ left: 0, right: 0 }}
        >
          <ChartTooltip
            content={(tooltipProps) => (
              <ChartTooltipContent
                {...tooltipProps}
                hideLabel
                indicator="line"
              />
            )}
            cursor={false}
            defaultIndex={2}
          />
          <Area
            dataKey="visitors"
            fill="var(--color-visitors)"
            fillOpacity={0.4}
            stroke="var(--color-visitors)"
            type="linear"
          />
        </AreaChart>
      </ChartContainer>
    </Card>
  );
};

const chartData7d = [
  { month: "January", visitors: 186 },
  { month: "February", visitors: 305 },
  { month: "March", visitors: 237 },
  { month: "April", visitors: 73 },
  { month: "May", visitors: 209 },
  { month: "June", visitors: 214 },
];

const chartData30d = [
  { month: "January", visitors: 420 },
  { month: "February", visitors: 510 },
  { month: "March", visitors: 388 },
  { month: "April", visitors: 290 },
  { month: "May", visitors: 468 },
  { month: "June", visitors: 502 },
];

const chartConfig = {
  visitors: {
    color: "var(--primary)",
    label: "Visitors",
  },
} satisfies ChartConfig;
