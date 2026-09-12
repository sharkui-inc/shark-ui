"use client";

import { Bar, BarChart, type BarShapeProps, Rectangle } from "recharts";
import {
  Card,
  CardContent,
  CardHeader,
} from "@/registry/react/components/card";
import {
  type ChartConfig,
  ChartContainer,
} from "@/registry/react/components/chart";

export const SleepReportExample = (props: React.ComponentProps<"div">) => (
  <Card {...props}>
    <CardHeader description="Last night · 7h 24m" title="Sleep" />
    <CardContent className="flex flex-col gap-4">
      <ChartContainer className="h-32 w-full" config={sleepChartConfig}>
        <BarChart
          accessibilityLayer={false}
          barSize={16}
          data={sleepChartData}
          margin={{ bottom: 0, left: 0, right: 0, top: 0 }}
        >
          <Bar
            dataKey="deep"
            fill="var(--color-deep)"
            shape={sleepBarShape.deep}
            stackId="a"
          />
          <Bar
            dataKey="light"
            fill="var(--color-light)"
            shape={sleepBarShape.light}
            stackId="a"
          />
          <Bar
            dataKey="rem"
            fill="var(--color-rem)"
            shape={sleepBarShape.rem}
            stackId="a"
          />
        </BarChart>
      </ChartContainer>
      <div className="flex flex-wrap gap-3">
        {sleepLegend.map((item) => (
          <div
            className="flex items-center gap-1.5 text-muted-foreground text-xs"
            key={item.label}
          >
            <span
              className="size-2 rounded-sm"
              style={{ backgroundColor: item.color }}
            />
            {item.label}
          </div>
        ))}
      </div>
    </CardContent>
  </Card>
);

const sleepChartData = [
  { deep: 0, hour: "10pm", light: 30, rem: 0 },
  { deep: 20, hour: "11pm", light: 10, rem: 0 },
  { deep: 40, hour: "12am", light: 0, rem: 10 },
  { deep: 30, hour: "1am", light: 5, rem: 15 },
  { deep: 10, hour: "2am", light: 20, rem: 30 },
  { deep: 25, hour: "3am", light: 10, rem: 20 },
  { deep: 15, hour: "4am", light: 25, rem: 10 },
  { deep: 5, hour: "5am", light: 35, rem: 15 },
  { deep: 0, hour: "6am", light: 20, rem: 25 },
];

const sleepChartConfig = {
  deep: {
    color: "var(--chart-1)",
    label: "Deep",
  },
  light: {
    color: "var(--chart-2)",
    label: "Light",
  },
  rem: {
    color: "var(--chart-3)",
    label: "REM",
  },
} satisfies ChartConfig;

const sleepLegend = [
  { color: "var(--chart-1)", label: "Deep" },
  { color: "var(--chart-2)", label: "Light" },
  { color: "var(--chart-3)", label: "REM" },
];

const sleepStages = ["deep", "light", "rem"] as const;
type SleepStage = (typeof sleepStages)[number];

const sleepBarRadius = 4;

const sleepBarShape: Record<
  SleepStage,
  (props: BarShapeProps) => React.ReactNode
> = {
  deep: (props) => <SleepStackedBar dataKey="deep" {...props} />,
  light: (props) => <SleepStackedBar dataKey="light" {...props} />,
  rem: (props) => <SleepStackedBar dataKey="rem" {...props} />,
};

const SleepStackedBar = ({
  dataKey,
  height,
  payload,
  ...rest
}: BarShapeProps & { dataKey: SleepStage }) => {
  if (height <= 0) {
    return null;
  }

  const visible = sleepStages.filter((key) => Number(payload?.[key]) > 0);
  const isBottom = visible[0] === dataKey;
  const isTop = visible.at(-1) === dataKey;

  return (
    <Rectangle
      {...rest}
      height={height}
      payload={payload}
      radius={[
        isTop ? sleepBarRadius : 0,
        isTop ? sleepBarRadius : 0,
        isBottom ? sleepBarRadius : 0,
        isBottom ? sleepBarRadius : 0,
      ]}
    />
  );
};
