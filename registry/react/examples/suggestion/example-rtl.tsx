"use client";

import { usePreviewLocale } from "@/hooks/use-preview-locale";
import {
  Suggestion,
  Suggestions,
} from "@/registry/react/components/suggestion";

const Example = () => {
  const { locale } = usePreviewLocale();

  const { values } = translations[locale];

  return (
    <Suggestions>
      <Suggestion suggestion={values.summarize} />
      <Suggestion suggestion={values.checklist} />
      <Suggestion suggestion={values.risks} />
    </Suggestions>
  );
};

const translations = {
  ar: {
    values: {
      checklist: "اكتب قائمة تدقيق للإطلاق",
      risks: "ابحث عن المخاطر في الخطة",
      summarize: "لخّص هذا الموجز",
    },
  },
  en: {
    values: {
      checklist: "Draft a launch checklist",
      risks: "Find risks in the plan",
      summarize: "Summarize this brief",
    },
  },
  he: {
    values: {
      checklist: "ניסח רשימת בדיקה להשקה",
      risks: "מצא סיכונים בתוכנית",
      summarize: "סכם את התקציר הזה",
    },
  },
};

export default Example;
