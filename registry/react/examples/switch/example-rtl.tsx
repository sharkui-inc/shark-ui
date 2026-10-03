"use client";

import { usePreviewLocale } from "@/hooks/use-preview-locale";
import { Field, FieldLabel } from "@/registry/react/components/field";
import { Switch } from "@/registry/react/components/switch";

const Example = () => {
  const { locale } = usePreviewLocale();

  const { values } = translations[locale];

  return (
    <div className="max-w-sm">
      <Field orientation="horizontal">
        <Switch defaultChecked />
        <FieldLabel>{values.label}</FieldLabel>
      </Field>
    </div>
  );
};

const translations = {
  ar: {
    values: {
      label: "وضع الطيران",
    },
  },
  en: {
    values: {
      label: "Airplane mode",
    },
  },
  he: {
    values: {
      label: "מצב טיסה",
    },
  },
};

export default Example;
