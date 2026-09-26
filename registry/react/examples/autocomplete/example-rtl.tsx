"use client";

import { usePreviewLocale } from "@/hooks/use-preview-locale";
import { AutocompleteDemo } from "./example-default";

const translations = {
  ar: {
    emptyLabel: "لم يتم العثور على نتائج.",
    items: [
      { label: "تفاح", value: "apple" },
      { label: "موز", value: "banana" },
      { label: "كرز", value: "cherry" },
      { label: "تمر", value: "date" },
    ],
    label: "ابحث عن فواكه",
    placeholder: "مثال: تفاح",
  },
  en: {
    emptyLabel: "No results found.",
    items: [
      { label: "Apple", value: "apple" },
      { label: "Banana", value: "banana" },
      { label: "Cherry", value: "cherry" },
      { label: "Date", value: "date" },
    ],
    label: "Search fruits",
    placeholder: "e.g. Apple",
  },
  he: {
    emptyLabel: "לא נמצאו תוצאות.",
    items: [
      { label: "תפוח", value: "apple" },
      { label: "בננה", value: "banana" },
      { label: "דובדבן", value: "cherry" },
      { label: "תמר", value: "date" },
    ],
    label: "חיפוש פירות",
    placeholder: "למשל: תפוח",
  },
};

const AutocompleteRTLExample = () => {
  const { locale } = usePreviewLocale();

  return <AutocompleteDemo key={locale} {...translations[locale]} />;
};

export default AutocompleteRTLExample;
