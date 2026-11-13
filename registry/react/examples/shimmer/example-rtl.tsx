"use client";

import { usePreviewLocale } from "@/hooks/use-preview-locale";

const Example = () => {
  const { locale } = usePreviewLocale();

  const { values } = translations[locale];

  return (
    <p className="shimmer text-muted-foreground text-sm">{values.label}</p>
  );
};

const translations = {
  ar: {
    values: {
      label: "جارٍ إنشاء الرد…",
    },
  },
  en: {
    values: {
      label: "Generating response…",
    },
  },
  he: {
    values: {
      label: "מייצר תשובה…",
    },
  },
};

export default Example;
