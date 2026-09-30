"use client";

import { usePreviewLocale } from "@/hooks/use-preview-locale";
import { PasswordInput } from "@/registry/react/components/password-input";

const Example = () => {
  const { locale } = usePreviewLocale();
  const { values } = translations[locale];

  return (
    <PasswordInput
      aria-label={values.password}
      className="w-full max-w-64"
      placeholder={values.placeholder}
    />
  );
};

const translations = {
  ar: { values: { password: "كلمة المرور", placeholder: "أدخل كلمة المرور" } },
  en: { values: { password: "Password", placeholder: "Enter password" } },
  he: { values: { password: "סיסמה", placeholder: "הזן סיסמה" } },
};

export default Example;
