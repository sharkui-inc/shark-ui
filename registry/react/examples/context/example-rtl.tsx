"use client";

import { usePreviewLocale } from "@/hooks/use-preview-locale";
import { Button } from "@/registry/react/components/button";
import {
  Context,
  ContextContent,
  ContextFooter,
  ContextHeader,
  ContextMeter,
  ContextTitle,
  ContextTrigger,
  ContextTriggerLabel,
} from "@/registry/react/components/context";

const Example = () => {
  const { locale } = usePreviewLocale();

  const { values } = translations[locale];

  const segments = contextUsage.map((usage) => ({
    color: usage.color,
    title: values.rows[usage.key],
    value: usage.value,
  }));

  return (
    <div className="flex justify-center">
      <Context
        costLabel={values.costLabel}
        maxTokens={128_000}
        usedTokens={74_400}
      >
        <ContextTrigger asChild>
          <Button
            className="text-muted-foreground font-normal"
            size="sm"
            variant="ghost"
          >
            <ContextTriggerLabel />
          </Button>
        </ContextTrigger>
        <ContextContent>
          <ContextHeader>
            <ContextTitle showCloseButton>{values.title}</ContextTitle>
            <ContextMeter segments={segments} />
          </ContextHeader>
          <ContextFooter title={values.footerTitle} />
        </ContextContent>
      </Context>
    </div>
  );
};

const contextUsage = [
  { color: "var(--chart-1)", key: "input", value: 38_000 },
  { color: "var(--chart-2)", key: "output", value: 19_200 },
  { color: "var(--chart-3)", key: "reasoning", value: 9800 },
  { color: "var(--chart-4)", key: "cache", value: 7400 },
] as const;

const translations = {
  ar: {
    values: {
      costLabel: "$٠٫١٦",
      footerTitle: "التكلفة الإجمالية",
      rows: {
        cache: "الذاكرة المؤقتة",
        input: "المدخلات",
        output: "المخرجات",
        reasoning: "الاستدلال",
      },
      title: "استخدام السياق",
    },
  },
  en: {
    values: {
      costLabel: "$0.16",
      footerTitle: "Total cost",
      rows: {
        cache: "Cache",
        input: "Input",
        output: "Output",
        reasoning: "Reasoning",
      },
      title: "Context Usage",
    },
  },
  he: {
    values: {
      costLabel: "$0.16",
      footerTitle: "עלות כוללת",
      rows: {
        cache: "מטמון",
        input: "קלט",
        output: "פלט",
        reasoning: "הנמקה",
      },
      title: "שימוש בקונטקסט",
    },
  },
};

export default Example;
