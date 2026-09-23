"use client";

import { usePreviewLocale } from "@/hooks/use-preview-locale";
import {
  Context,
  ContextBody,
  ContextContent,
  ContextFooter,
  ContextHeader,
  ContextMeter,
  ContextTitle,
  ContextTrigger,
  ContextUsageRow,
} from "@/registry/react/components/context";

const Example = () => {
  const { locale } = usePreviewLocale();

  const { values } = translations[locale];

  return (
    <div className="flex justify-center">
      <Context
        costLabel={values.costLabel}
        maxTokens={128_000}
        usedTokens={18_420}
      >
        <ContextTrigger />
        <ContextContent>
          <ContextHeader>
            <ContextTitle showCloseButton>{values.title}</ContextTitle>
            <ContextMeter />
          </ContextHeader>
          <ContextBody>
            {contextUsage.map((usage) => (
              <ContextUsageRow
                key={usage.key}
                title={values.rows[usage.key]}
                value={usage.value}
              />
            ))}
          </ContextBody>
          <ContextFooter title={values.footerTitle} />
        </ContextContent>
      </Context>
    </div>
  );
};

const contextUsage = [
  { key: "input", value: 4200 },
  { key: "output", value: 860 },
  { key: "reasoning", value: 640 },
  { key: "cache", value: 1200 },
] as const;

const translations = {
  ar: {
    values: {
      costLabel: "$٠٫٠٤٢",
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
      costLabel: "$0.042",
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
      costLabel: "$0.042",
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
