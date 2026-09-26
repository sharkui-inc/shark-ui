"use client";

import { usePreviewLocale } from "@/hooks/use-preview-locale";
import { Input } from "@/registry/react/components/input";

const Example = () => {
  const { locale } = usePreviewLocale();
  const { values } = translations[locale];

  return <Input className="max-w-64" placeholder={values.placeholder} />;
};

const translations = {
  ar: { values: { placeholder: "اكتب رسالتك" } },
  en: { values: { placeholder: "Enter your message" } },
  he: { values: { placeholder: "הזן את ההודעה שלך" } },
};

export default Example;
