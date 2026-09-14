"use client";

import { useRTLPreviewLanguage } from "@/components/docs/component-preview/rtl-preview";
import { PaginationDemo } from "./example-default";

const translations = {
  ar: { nextLabel: "التالي", previousLabel: "السابق" },
  en: { nextLabel: "Next", previousLabel: "Previous" },
  he: { nextLabel: "הבא", previousLabel: "הקודם" },
};

const PaginationRTLExample = () => {
  const { language, locale } = useRTLPreviewLanguage();
  const formatPage = new Intl.NumberFormat(locale, { useGrouping: false })
    .format;

  return <PaginationDemo {...translations[language]} formatPage={formatPage} />;
};

export default PaginationRTLExample;
