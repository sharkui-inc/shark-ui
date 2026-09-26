"use client";

import { usePreviewLocale } from "@/hooks/use-preview-locale";
import {
  RadioGroup,
  RadioGroupItem,
} from "@/registry/react/components/radio-group";

const Example = () => {
  const { locale } = usePreviewLocale();

  const { values } = translations[locale];

  return (
    <RadioGroup defaultValue="1">
      <RadioGroupItem value="1">{values.default}</RadioGroupItem>
      <RadioGroupItem value="2">{values.confortable}</RadioGroupItem>
      <RadioGroupItem value="3">{values.compact}</RadioGroupItem>
    </RadioGroup>
  );
};

const translations = {
  ar: {
    dir: "rtl",
    values: {
      compact: "مضغوط",
      confortable: "مريح",
      default: "افتراضي",
    },
  },
  en: {
    dir: "ltr",
    values: {
      compact: "Compact",
      confortable: "Confortable",
      default: "Default",
    },
  },
  he: {
    dir: "rtl",
    values: {
      compact: "קומפקטי",
      confortable: "נוח",
      default: "ברירת מחדל",
    },
  },
};

export default Example;
