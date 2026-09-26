"use client";

import { Star } from "lucide-react";
import { usePreviewLocale } from "@/hooks/use-preview-locale";
import { Badge } from "@/registry/react/components/badge";

const Example = () => {
  const { locale } = usePreviewLocale();

  const { values } = translations[locale];

  return (
    <Badge>
      <Star data-icon="inline-start" />
      {values.favorite}
    </Badge>
  );
};

const translations = {
  ar: {
    values: {
      favorite: "المفضلة",
    },
  },
  en: {
    values: {
      favorite: "Favorite",
    },
  },
  he: {
    values: {
      favorite: "מועדף",
    },
  },
};

export default Example;
