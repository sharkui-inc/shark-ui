"use client";

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import { usePreviewLocale } from "@/hooks/use-preview-locale";
import {
  type ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/registry/react/components/chart";

const Example = () => {
  const { dir, locale } = usePreviewLocale();

  const { values } = translations[locale];

  const chartConfig = {
    desktop: {
      color: "#2563eb",
      label: values.desktop,
    },
    mobile: {
      color: "#60a5fa",
      label: values.mobile,
    },
  } satisfies ChartConfig;

  return (
    <ChartContainer
      className="min-h-[200px] w-full max-w-sm"
      config={chartConfig}
    >
      <BarChart accessibilityLayer data={chartData}>
        <CartesianGrid
          orientation={dir === "rtl" ? "right" : "left"}
          vertical={false}
        />
        <XAxis
          axisLine={false}
          dataKey="month"
          reversed={dir === "rtl"}
          tickFormatter={(value) =>
            (values[value as keyof typeof values] as string).slice(0, 3)
          }
          tickLine={false}
          tickMargin={10}
        />
        <ChartTooltip
          content={
            <ChartTooltipContent
              labelClassName="w-32"
              labelFormatter={(value) =>
                values[value as keyof typeof values] as string
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

const chartData = [
  { desktop: 186, mobile: 80, month: "january" },
  { desktop: 305, mobile: 200, month: "february" },
  { desktop: 237, mobile: 120, month: "march" },
  { desktop: 73, mobile: 190, month: "april" },
  { desktop: 209, mobile: 130, month: "may" },
  { desktop: 214, mobile: 140, month: "june" },
];

const translations = {
  ar: {
    values: {
      april: "أبريل",
      desktop: "سطح المكتب",
      february: "فبراير",
      january: "يناير",
      june: "يونيو",
      march: "مارس",
      may: "مايو",
      mobile: "الجوال",
    },
  },
  en: {
    values: {
      april: "April",
      desktop: "Desktop",
      february: "February",
      january: "January",
      june: "June",
      march: "March",
      may: "May",
      mobile: "Mobile",
    },
  },
  he: {
    values: {
      april: "אפריל",
      desktop: "מחשב",
      february: "פברואר",
      january: "ינואר",
      june: "יוני",
      march: "מרץ",
      may: "מאי",
      mobile: "נייד",
    },
  },
};

export default Example;
