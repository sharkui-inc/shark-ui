"use client";

import { usePreviewLocale } from "@/hooks/use-preview-locale";
import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@/registry/react/components/field";
import { Input } from "@/registry/react/components/input";

const Example = () => {
  const { locale } = usePreviewLocale();
  const { values } = translations[locale];
  return (
    <Field className="w-full max-w-xs">
      <FieldLabel>{values.label}</FieldLabel>
      <Input placeholder={values.placeholder} />
      <FieldDescription>{values.description}</FieldDescription>
    </Field>
  );
};

const translations = {
  ar: {
    values: {
      description: "اختر اسم مستخدم فريدًا لحسابك.",
      label: "اسم المستخدم",
      placeholder: "أحمد علي",
    },
  },
  en: {
    values: {
      description: "Choose a unique username for your account.",
      label: "Username",
      placeholder: "John Doe",
    },
  },
  he: {
    values: {
      description: "בחר שם משתמש ייחודי לחשבון שלך.",
      label: "שם משתמש",
      placeholder: "יונתן כהן",
    },
  },
};

export default Example;
