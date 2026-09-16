"use client";

import { usePreviewLocale } from "@/hooks/use-preview-locale";
import {
  Pagination,
  PaginationItems,
  PaginationNext,
  PaginationPrevious,
} from "@/registry/react/components/pagination";

const Example = () => {
  const { locale } = usePreviewLocale();

  const { values } = translations[locale];

  return (
    <Pagination count={50} pageSize={10}>
      <PaginationPrevious>{values.previous}</PaginationPrevious>
      <PaginationItems />
      <PaginationNext>{values.next}</PaginationNext>
    </Pagination>
  );
};

const translations = {
  ar: {
    values: {
      next: "التالي",
      previous: "السابق",
    },
  },
  en: {
    values: {
      next: "Next",
      previous: "Previous",
    },
  },
  he: {
    values: {
      next: "הבא",
      previous: "הקודם",
    },
  },
};

export default Example;
