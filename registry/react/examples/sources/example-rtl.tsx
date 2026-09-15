"use client";

import { usePreviewLocale } from "@/hooks/use-preview-locale";
import {
  Source,
  Sources,
  SourcesContent,
  SourcesTrigger,
} from "@/registry/react/components/sources";

const Example = () => {
  const { locale } = usePreviewLocale();

  const { values } = translations[locale];

  return (
    <div className="flex w-full max-w-md flex-col gap-3">
      <Sources defaultOpen>
        <SourcesTrigger count={2}>{values.trigger}</SourcesTrigger>
        <SourcesContent>
          <Source href="https://react.dev" title={values.reactTitle} />
          <Source href="https://ark-ui.com" title={values.arkTitle} />
        </SourcesContent>
      </Sources>
    </div>
  );
};

const translations = {
  ar: {
    values: {
      arkTitle: "Ark UI",
      reactTitle: "وثائق React",
      trigger: "استخدم ٢ من المصادر",
    },
  },
  en: {
    values: {
      arkTitle: "Ark UI",
      reactTitle: "React Documentation",
      trigger: "Used 2 sources",
    },
  },
  he: {
    values: {
      arkTitle: "Ark UI",
      reactTitle: "תיעוד React",
      trigger: "השתמש ב-2 מקורות",
    },
  },
};

export default Example;
