"use client";

import { usePreviewLocale } from "@/hooks/use-preview-locale";
import { Separator } from "@/registry/react/components/separator";

const Example = () => {
  const { locale } = usePreviewLocale();

  const { values } = translations[locale];

  return (
    <div className="flex max-w-sm flex-col gap-4 text-sm">
      <div className="flex flex-col gap-1">
        <h4 className="font-medium leading-none">Shark UI</h4>
        <p className="text-muted-foreground">{values.primitive}</p>
      </div>
      <Separator />
      <div>{values.collection}</div>
    </div>
  );
};

const translations = {
  ar: {
    values: {
      collection: "مجموعة من المكونات سهلة الوصول والجميلة والقابلة للتخصيص.",
      primitive: "مجموعة من المكونات الأساسية لبناء الواجهات.",
    },
  },
  en: {
    values: {
      collection:
        "A collection of accessible, beautiful, and customizable components.",
      primitive: "A set of primitive components for building UI.",
    },
  },
  he: {
    values: {
      collection: "אוסף של קומפוננטות נגישות, יפות וניתנות להתאמה אישית.",
      primitive: "אוסף של קומפוננטות פרימיטיביות לבניית UI.",
    },
  },
};

export default Example;
