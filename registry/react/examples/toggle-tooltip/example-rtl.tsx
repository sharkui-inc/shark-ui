"use client";

import { InfoIcon } from "lucide-react";
import { usePreviewLocale } from "@/hooks/use-preview-locale";
import { Button } from "@/registry/react/components/button";
import {
  ToggleTooltip,
  ToggleTooltipContent,
  ToggleTooltipTrigger,
} from "@/registry/react/components/toggle-tooltip";

const Example = () => {
  const { locale } = usePreviewLocale();

  const { values } = translations[locale];

  return (
    <ToggleTooltip>
      <ToggleTooltipTrigger asChild>
        <Button aria-label={values.ariaLabel} size="icon-md" variant="outline">
          <InfoIcon />
        </Button>
      </ToggleTooltipTrigger>
      <ToggleTooltipContent className="max-w-52">
        {values.content}
      </ToggleTooltipContent>
    </ToggleTooltip>
  );
};

const translations = {
  ar: {
    values: {
      ariaLabel: "معلومات إضافية",
      content:
        "مرّر المؤشر أو انقر لعرض هذا المحتوى. يعمل أيضًا على أجهزة اللمس.",
    },
  },
  en: {
    values: {
      ariaLabel: "More information",
      content:
        "Hover or click to see this content. Works on touch devices too.",
    },
  },
  he: {
    values: {
      ariaLabel: "מידע נוסף",
      content: "רחף או לחץ כדי לראות את התוכן הזה. עובד גם במכשירי מגע.",
    },
  },
};

export default Example;
