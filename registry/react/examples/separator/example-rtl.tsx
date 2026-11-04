"use client";

import { usePreviewLocale } from "@/hooks/use-preview-locale";
import { Separator } from "@/registry/react/components/separator";

const Example = () => {
  const { locale } = usePreviewLocale();

  const { values } = translations[locale];

  return (
    <div className="flex max-w-sm flex-col gap-4 text-sm">
      <div className="flex flex-col gap-1">
        <p className="leading-none font-medium">Shark UI</p>
        <p className="text-muted-foreground">{values.primitive}</p>
      </div>
      <Separator />
      <div className="flex h-5 items-center gap-4">
        <span>{values.components}</span>
        <Separator orientation="vertical" />
        <span>{values.blocks}</span>
        <Separator orientation="vertical" />
        <span>{values.themes}</span>
      </div>
    </div>
  );
};

const translations = {
  ar: {
    values: {
      blocks: "كتل",
      components: "مكونات",
      primitive: "مجموعة من المكونات الأساسية لبناء الواجهات.",
      themes: "سمات",
    },
  },
  en: {
    values: {
      blocks: "Blocks",
      components: "Components",
      primitive: "A set of primitive components for building UI.",
      themes: "Themes",
    },
  },
  he: {
    values: {
      blocks: "בלוקים",
      components: "קומפוננטות",
      primitive: "אוסף של קומפוננטות פרימיטיביות לבניית UI.",
      themes: "ערכות נושא",
    },
  },
};

export default Example;
