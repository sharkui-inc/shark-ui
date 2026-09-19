"use client";

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import {
  type ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/registry/react/components/chart";

const chartData = [
  { desktop: 186, mobile: 80, month: "january" },
  { desktop: 305, mobile: 200, month: "february" },
  { desktop: 237, mobile: 120, month: "march" },
  { desktop: 73, mobile: 190, month: "april" },
  { desktop: 209, mobile: 130, month: "may" },
  { desktop: 214, mobile: 140, month: "june" },
];

const translations = {
  april: "أبريل",
  desktop: "سطح المكتب",
  february: "فبراير",
  january: "يناير",
  june: "يونيو",
  march: "مارس",
  may: "مايو",
  mobile: "الجوال",
} as const;

const ChartRtl = () => {
  const chartConfig = {
    desktop: {
      color: "#2563eb",
      label: translations.desktop,
    },
    mobile: {
      color: "#60a5fa",
      label: translations.mobile,
    },
  } satisfies ChartConfig;

  return (
    <ChartContainer className="min-h-48 w-full max-w-sm" config={chartConfig}>
      <BarChart accessibilityLayer data={chartData}>
        <CartesianGrid orientation="right" vertical={false} />
        <XAxis
          axisLine={false}
          dataKey="month"
          reversed
          tickFormatter={(value) =>
            (translations[value as keyof typeof translations] as string).slice(
              0,
              3
            )
          }
          tickLine={false}
          tickMargin={10}
        />
        <ChartTooltip
          content={
            <ChartTooltipContent
              labelClassName="w-32"
              labelFormatter={(value) =>
                translations[value as keyof typeof translations] as string
              }
            />
          }
        />
        <ChartLegend content={<ChartLegendContent />} />
        <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
        <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
      </BarChart>
    </ChartContainer>
  );
};

export default ChartRtl;
