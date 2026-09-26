"use client";

import { ArrowLeftIcon, MoreHorizontalIcon } from "lucide-react";
import { usePreviewLocale } from "@/hooks/use-preview-locale";
import { Button } from "@/registry/react/components/button";
import { ButtonGroup } from "@/registry/react/components/button-group";

const Example = () => {
  const { locale } = usePreviewLocale();

  const { values } = translations[locale];

  return (
    <ButtonGroup>
      <ButtonGroup className="hidden sm:flex">
        <Button aria-label={values.goBack} size="icon-md" variant="outline">
          <ArrowLeftIcon className="rtl:rotate-180" />
        </Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button variant="outline">{values.archive}</Button>
        <Button variant="outline">{values.report}</Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button variant="outline">{values.snooze}</Button>
        <Button
          aria-label={values.moreOptions}
          size="icon-md"
          variant="outline"
        >
          <MoreHorizontalIcon />
        </Button>
      </ButtonGroup>
    </ButtonGroup>
  );
};

const translations = {
  ar: {
    values: {
      archive: "أرشفة",
      goBack: "رجوع",
      moreOptions: "خيارات إضافية",
      report: "إبلاغ",
      snooze: "تأجيل",
    },
  },
  en: {
    values: {
      archive: "Archive",
      goBack: "Go Back",
      moreOptions: "More Options",
      report: "Report",
      snooze: "Snooze",
    },
  },
  he: {
    values: {
      archive: "ארכיון",
      goBack: "חזור",
      moreOptions: "אפשרויות נוספות",
      report: "דיווח",
      snooze: "דחה",
    },
  },
};

export default Example;
