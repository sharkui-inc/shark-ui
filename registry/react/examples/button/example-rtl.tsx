"use client";

import { ArrowRightIcon, PlusIcon } from "lucide-react";
import { usePreviewLocale } from "@/hooks/use-preview-locale";
import { Button } from "@/registry/react/components/button";

const Example = () => {
  const { locale } = usePreviewLocale();

  const { values } = translations[locale];

  return (
    <div className="flex flex-wrap items-center gap-2">
      <Button variant="outline">{values.button}</Button>
      <Button variant="destructive">{values.delete}</Button>
      <Button variant="outline">
        {values.submit}
        <ArrowRightIcon
          aria-hidden
          className="rtl:rotate-180"
          data-icon="inline-end"
        />
      </Button>
      <Button aria-label={values.add} size="icon-md" variant="outline">
        <PlusIcon aria-hidden />
      </Button>
      <Button disabled isLoading variant="secondary">
        {values.loading}
      </Button>
    </div>
  );
};

const translations = {
  ar: {
    values: {
      add: "إضافة",
      button: "زر",
      delete: "حذف",
      loading: "جاري التحميل",
      submit: "إرسال",
    },
  },
  en: {
    values: {
      add: "Add",
      button: "Button",
      delete: "Delete",
      loading: "Loading",
      submit: "Submit",
    },
  },
  he: {
    values: {
      add: "הוסף",
      button: "כפתור",
      delete: "מחק",
      loading: "טוען",
      submit: "שלח",
    },
  },
};

export default Example;
