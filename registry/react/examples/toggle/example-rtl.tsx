"use client";

import { usePreviewLocale } from "@/hooks/use-preview-locale";
import { Toggle } from "@/registry/react/components/toggle";

const Example = () => {
  const { locale } = usePreviewLocale();

  const { values } = translations[locale];

  return <Toggle>{values.label}</Toggle>;
};

const translations = {
  ar: {
    values: {
      label: "تبديل",
    },
  },
  en: {
    values: {
      label: "Toggle",
    },
  },
  he: {
    values: {
      label: "מתג",
    },
  },
};

export default Example;
