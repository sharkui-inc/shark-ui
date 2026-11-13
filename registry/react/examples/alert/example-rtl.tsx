"use client";

import { usePreviewLocale } from "@/hooks/use-preview-locale";
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/registry/react/components/alert";

const Example = () => {
  const { locale } = usePreviewLocale();

  const { values } = translations[locale];

  return (
    <Alert className="max-w-md">
      <AlertTitle>{values.title}</AlertTitle>
      <AlertDescription>{values.description}</AlertDescription>
    </Alert>
  );
};

const translations = {
  ar: {
    values: {
      description:
        "يمكنك إضافة أيقونات إلى التنبيهات لتوفير سياق بصري وتحسين تجربة المستخدم.",
      title: "انتبه!",
    },
  },
  en: {
    values: {
      description:
        "You can add icons to alerts to provide visual context and improve user experience.",
      title: "Heads up!",
    },
  },
  he: {
    values: {
      description:
        "ניתן להוסיף אייקונים להתראות כדי לספק הקשר חזותי ולשפר את חווית המשתמש.",
      title: "שים לב!",
    },
  },
};

export default Example;
