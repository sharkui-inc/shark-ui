"use client";

import { usePreviewLocale } from "@/hooks/use-preview-locale";
import { Button } from "@/registry/react/components/button";
import { toast } from "@/registry/react/components/toast";

const Example = () => {
  const { locale } = usePreviewLocale();

  const { values } = translations[locale];

  return (
    <Button
      onClick={() => {
        toast.create({
          description: values.description,
          title: values.title,
        });
      }}
      variant="outline"
    >
      {values.trigger}
    </Button>
  );
};

const translations = {
  ar: {
    values: {
      description: "الثلاثاء، ١٠ فبراير ٢٠٢٦ الساعة ١٠:٠٠ صباحًا.",
      title: "تم إنشاء الحدث.",
      trigger: "إشعار",
    },
  },
  en: {
    values: {
      description: "Tuesday, February 10, 2026 at 10:00 AM.",
      title: "Event has been created.",
      trigger: "Toast",
    },
  },
  he: {
    values: {
      description: "יום שלישי, 10 בפברואר 2026 בשעה 10:00 לפני הצהריים.",
      title: "האירוע נוצר.",
      trigger: "התראה",
    },
  },
};

export default Example;
