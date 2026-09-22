"use client";

import { usePreviewLocale } from "@/hooks/use-preview-locale";
import { PasswordInput } from "@/registry/react/components/password-input";

const Example = () => {
  const { locale } = usePreviewLocale();
  const { values } = translations[locale];

  return (
    <PasswordInput
      className="w-full max-w-64"
      placeholder={values.placeholder}
    />
  );
};

const translations = {
  ar: { values: { placeholder: "أدخل كلمة المرور" } },
  en: { values: { placeholder: "Enter password" } },
  he: { values: { placeholder: "הזן סיסמה" } },
};

export default Example;
