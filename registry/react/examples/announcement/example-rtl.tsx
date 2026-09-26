"use client";

import { Badge } from "@registry/react/components/badge";
import { usePreviewLocale } from "@/hooks/use-preview-locale";
import {
  Announcement,
  AnnouncementTitle,
} from "@/registry/react/components/announcement";

const Example = () => {
  const { locale } = usePreviewLocale();

  const { values } = translations[locale];

  return (
    <Announcement>
      <Badge>{values.badge}</Badge>
      <AnnouncementTitle>{values.title}</AnnouncementTitle>
    </Announcement>
  );
};

const translations = {
  ar: {
    values: {
      badge: "إصدار",
      title: "v2.1.0: الوضع الداكن، بناء أسرع، و12 مكوّنًا جديدًا",
    },
  },
  en: {
    values: {
      badge: "Release",
      title: "v2.1.0: Dark mode, faster builds, and 12 new components",
    },
  },
  he: {
    values: {
      badge: "גרסה",
      title: "v2.1.0: מצב כהה, בנייה מהירה יותר, ו-12 רכיבים חדשים",
    },
  },
};

export default Example;
