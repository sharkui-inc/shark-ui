"use client";

import { SearchIcon } from "lucide-react";
import { usePreviewLocale } from "@/hooks/use-preview-locale";
import {
  Marker,
  MarkerContent,
  MarkerIcon,
} from "@/registry/react/components/marker";

const Example = () => {
  const { locale } = usePreviewLocale();

  const { values } = translations[locale];

  return (
    <Marker className="w-full max-w-sm">
      <MarkerIcon>
        <SearchIcon />
      </MarkerIcon>
      <MarkerContent className="shimmer">{values.text}</MarkerContent>
    </Marker>
  );
};

const translations = {
  ar: {
    values: {
      text: "جاري البحث في ١٢ ملفًا عن منطق المصادقة",
    },
  },
  en: {
    values: {
      text: "Searching 12 files for authentication logic",
    },
  },
  he: {
    values: {
      text: "מחפש ב-12 קבצים אחר היגיון אימות",
    },
  },
};

export default Example;
