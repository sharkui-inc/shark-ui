"use client";

import { usePreviewLocale } from "@/hooks/use-preview-locale";
import { Textarea } from "@/registry/react/components/textarea";

const Example = () => {
  const { locale } = usePreviewLocale();
  const { values } = translations[locale];

  return <Textarea className="max-w-xs" placeholder={values.placeholder} />;
};

const translations = {
  ar: { values: { placeholder: "اكتب رسالتك" } },
  en: { values: { placeholder: "Enter your message" } },
  he: { values: { placeholder: "הזן את ההודעה שלך" } },
};

export default Example;
