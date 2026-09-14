"use client";

import { useRTLPreviewLanguage } from "@/components/docs/component-preview/rtl-preview";
import { SelectDemo } from "./example-default";

const translations = {
  ar: {
    heading: "الفواكه",
    items: ["موز", "تفاح", "برتقال", "أناناس"],
    placeholder: "اختر فاكهة",
  },
  en: {
    heading: "Fruits",
    items: ["Banana", "Apple", "Orange", "Pineapple"],
    placeholder: "Select a fruit",
  },
  he: {
    heading: "פירות",
    items: ["בננה", "תפוח", "תפוז", "אננס"],
    placeholder: "בחר פרי",
  },
};

const SelectRTLExample = () => {
  const { language } = useRTLPreviewLanguage();

  return <SelectDemo {...translations[language]} />;
};

export default SelectRTLExample;
