"use client";

import { usePreviewLocale } from "@/hooks/use-preview-locale";
import {
  SkipNavContent,
  SkipNavLink,
} from "@/registry/react/components/skip-nav";

const Example = () => {
  const { locale } = usePreviewLocale();

  const { values } = translations[locale];

  return (
    <>
      <SkipNavLink className="focus:absolute" id="demo-content">
        {values.skip}
      </SkipNavLink>

      <SkipNavContent
        className="max-w-sm rounded-lg border border-transparent bg-card p-4 outline-hidden focus:border-ring/64 focus:ring-2 focus:ring-ring/24"
        id="demo-content"
        tabIndex={undefined}
      >
        <h2 className="mb-2 font-semibold">{values.heading}</h2>
        <p className="text-muted-foreground text-sm">{values.description}</p>
      </SkipNavContent>
    </>
  );
};

const translations = {
  ar: {
    values: {
      description:
        "هذه هي منطقة المحتوى الرئيسي. عندما يضغط المستخدمون على Tab ثم Enter على رابط التخطي، ينتقل التركيز إلى هنا.",
      heading: "المحتوى الرئيسي",
      skip: "التخطي إلى المحتوى",
    },
  },
  en: {
    values: {
      description:
        "This is the main content area. When users press Tab and then Enter on the skip link, focus jumps here.",
      heading: "Main Content",
      skip: "Skip to content",
    },
  },
  he: {
    values: {
      description:
        "זהו אזור התוכן الرئيسי. כשמשתמשים לוחצים על Tab ולאחר מכן על Enter בקישור הדילוג, הפוקוס קופץ לכאן.",
      heading: "התוכן הראשי",
      skip: "דלג לתוכן",
    },
  },
};

export default Example;
