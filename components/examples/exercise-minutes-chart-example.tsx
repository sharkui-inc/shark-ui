"use client";

import { useState } from "react";
import { CartesianGrid, Line, LineChart, XAxis } from "recharts";
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

const thisWeek = [
  { average: 400, day: "Monday", today: 240 },
  { average: 300, day: "Tuesday", today: 139 },
  { average: 200, day: "Wednesday", today: 980 },
  { average: 278, day: "Thursday", today: 390 },
  { average: 189, day: "Friday", today: 480 },
  { average: 239, day: "Saturday", today: 380 },
  { average: 349, day: "Sunday", today: 430 },
];

const lastWeek = [
  { average: 400, day: "Monday", today: 180 },
  { average: 300, day: "Tuesday", today: 210 },
  { average: 200, day: "Wednesday", today: 160 },
  { average: 278, day: "Thursday", today: 250 },
  { average: 189, day: "Friday", today: 300 },
  { average: 239, day: "Saturday", today: 220 },
  { average: 349, day: "Sunday", today: 190 },
];

const chartConfig = {
  average: {
    color: "var(--primary)",
    label: "Average",
  },
  today: {
    color: "var(--primary)",
    label: "Today",
  },
} satisfies ChartConfig;

export const ExerciseMinutesChartExample = (
  props: React.ComponentProps<"div">
) => {
  const [range, setRange] = useState(["this"]);
  const data = range[0] === "last" ? lastWeek : thisWeek;

  return (
    <Card {...props}>
      <CardHeader
        description="Your exercise minutes are normal."
        title="Exercise Minutes"
      >
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
            <ToggleGroupItem value="this">This</ToggleGroupItem>
            <ToggleGroupItem value="last">Last</ToggleGroupItem>
          </ToggleGroup>
        </CardAction>
      </CardHeader>
      <CardContent>
        <ChartContainer className="w-full md:h-[200px]" config={chartConfig}>
          <LineChart
            accessibilityLayer={false}
            data={data}
            margin={{
              bottom: 0,
              left: 16,
              right: 10,
              top: 5,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              axisLine={false}
              dataKey="day"
              tickFormatter={(value) => value.slice(0, 3)}
              tickLine={false}
              tickMargin={8}
            />
            <Line
              activeDot={{
                r: 5,
              }}
              dataKey="today"
              dot={{
                fill: "var(--color-today)",
              }}
              stroke="var(--color-today)"
              strokeWidth={2}
              type="monotone"
            />
            <Line
              activeDot={{
                r: 5,
              }}
              dataKey="average"
              dot={{
                fill: "var(--color-average)",
                opacity: 0.5,
              }}
              stroke="var(--color-average)"
              strokeOpacity={0.5}
              strokeWidth={2}
              type="monotone"
            />
            <ChartTooltip
              content={(tooltipProps) => (
                <ChartTooltipContent {...tooltipProps} />
              )}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};
