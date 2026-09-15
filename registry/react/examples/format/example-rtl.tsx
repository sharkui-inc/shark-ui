"use client";

import { usePreviewLocale } from "@/hooks/use-preview-locale";
import { FormatByte } from "@/registry/react/components/format";

const Example = () => {
  const { locale } = usePreviewLocale();

  const { values } = translations[locale];

  return (
    <div className="flex flex-col gap-1">
      <span className="text-muted-foreground text-sm">{values.label}</span>
      <span className="font-semibold text-2xl text-foreground tabular-nums tracking-tight">
        <FormatByte value={120_000} />
      </span>
    </div>
  );
};

const translations = {
  ar: {
    values: {
      label: "حجم الملف",
    },
  },
  en: {
    values: {
      label: "File size",
    },
  },
  he: {
    values: {
      label: "גודל קובץ",
    },
  },
};

export default Example;
