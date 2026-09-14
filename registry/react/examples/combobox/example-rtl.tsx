"use client";

import { useRTLPreviewLanguage } from "@/components/docs/component-preview/rtl-preview";
import { ComboboxDemo } from "./example-default";

const translations = {
  ar: {
    dir: "rtl",
    values: {
      items: [
        { label: "تفاح", value: "apple" },
        { label: "موز", value: "banana" },
        { label: "كرز", value: "cherry" },
        { label: "تمر", value: "date" },
      ],
      placeholder: "اختر خيارًا",
    },
  },
  en: {
    dir: "ltr",
    values: {
      items: [
        { label: "Apple", value: "apple" },
        { label: "Banana", value: "banana" },
        { label: "Cherry", value: "cherry" },
        { label: "Date", value: "date" },
      ],
      placeholder: "Select an option",
    },
  },
  he: {
    dir: "rtl",
    values: {
      items: [
        { label: "תפוח", value: "apple" },
        { label: "בננה", value: "banana" },
        { label: "דובדבן", value: "cherry" },
        { label: "תמר", value: "date" },
      ],
      placeholder: "בחר אפשרות",
    },
  },
} as const;

const ComboboxRTLExample = () => {
  const { language } = useRTLPreviewLanguage();
  const { values } = translations[language];

  return <ComboboxDemo items={values.items} placeholder={values.placeholder} />;
};

export default ComboboxRTLExample;
