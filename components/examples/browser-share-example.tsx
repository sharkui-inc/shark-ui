"use client";

import { useMemo, useState } from "react";
import { Cell, Label, Pie, PieChart } from "recharts";
import { cn } from "@/lib/utils";
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
import { Progress } from "@/registry/react/components/progress";
import {
  RadioGroup,
  RadioGroupItem,
} from "@/registry/react/components/radio-group";

const data = [
  { label: "Chrome", name: "chrome", value: 394 },
  { label: "Safari", name: "safari", value: 225 },
  { label: "Firefox", name: "firefox", value: 293 },
  { label: "Edge", name: "edge", value: 135 },
  { label: "Other", name: "other", value: 78 },
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
} satisfies ChartConfig;

const total = data.reduce((acc, item) => acc + item.value, 0);

export const BrowserShareExample = (props: React.ComponentProps<"div">) => {
  const [selected, setSelected] = useState("firefox");
  const active = data.find((item) => item.name === selected) ?? data[2];
  const percent = useMemo(
    () => Math.round((active.value / total) * 100),
    [active]
  );

  return (
    <Card {...props}>
      <CardHeader description="January - June 2026" title="Browser Share">
        <CardAction>
          <Badge variant="outline">{active.label}</Badge>
        </CardAction>
      </CardHeader>
      <CardContent>
        <ChartContainer
          className="mx-auto aspect-square max-h-[190px]"
          config={chartConfig}
        >
          <PieChart accessibilityLayer={false}>
            <Pie
              cx="50%"
              cy="50%"
              data={data}
              dataKey="value"
              innerRadius={50}
              nameKey="name"
              onClick={({ name }) => {
                if (typeof name === "string") {
                  setSelected(name);
                }
              }}
              outerRadius={60.8}
              stroke="var(--background)"
            >
              {data.map((entry) => (
                <Cell
                  cursor="pointer"
                  fill={`var(--color-${entry.name})`}
                  key={entry.name}
                  strokeWidth={5}
                />
              ))}
              <Label
                content={({ viewBox }) =>
                  viewBox && "cx" in viewBox && "cy" in viewBox ? (
                    <g>
                      <text
                        dominantBaseline="middle"
                        fill="var(--foreground)"
                        fontSize={24}
                        fontWeight="bold"
                        textAnchor="middle"
                        x={viewBox.cx}
                        y={(viewBox as { cy?: number }).cy as number}
                      >
                        <tspan
                          x={(viewBox as { cx?: number }).cx}
                          y={(viewBox as { cy?: number }).cy}
                        >
                          {total.toLocaleString()}
                        </tspan>
                      </text>
                      <text
                        dominantBaseline="middle"
                        fill="var(--muted-foreground)"
                        fontSize={12}
                        textAnchor="middle"
                        x={(viewBox as { cx?: number }).cx}
                        y={((viewBox as { cy?: number }).cy ?? 0) + 20}
                      >
                        Visitors
                      </text>
                    </g>
                  ) : null
                }
                position="center"
              />
            </Pie>
          </PieChart>
        </ChartContainer>
        <RadioGroup
          aria-label="Browser"
          className="flex flex-row flex-wrap items-center justify-center gap-4 pt-3"
          onValueChange={({ value }) => {
            if (value) {
              setSelected(value);
            }
          }}
          value={selected}
        >
          {data.map((item) => (
            <RadioGroupItem
              className={cn(
                "gap-1.5 text-muted-foreground text-xs",
                "hover:text-foreground",
                "data-[state=checked]:text-foreground",
                "**:data-[slot=radio-group-item-control]:hidden",
                "**:data-[slot=radio-group-item-text]:contents"
              )}
              key={item.name}
              value={item.name}
            >
              <span
                className="size-2 shrink-0 rounded-sm"
                style={{ backgroundColor: `var(--color-${item.name})` }}
              />
              {item.label}
            </RadioGroupItem>
          ))}
        </RadioGroup>
      </CardContent>
      <CardFooter className="flex flex-col items-stretch gap-2">
        <div className="flex items-center text-xs">
          <span className="font-medium">{active.label}</span>
          <span className="ms-auto text-muted-foreground tabular-nums">
            {percent}%
          </span>
        </div>
        <Progress value={percent} />
      </CardFooter>
    </Card>
  );
};
