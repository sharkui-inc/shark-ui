"use client";

import { SearchIcon } from "lucide-react";
import { usePreviewLocale } from "@/hooks/use-preview-locale";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/registry/react/components/input-group";

const Example = () => {
  const { locale } = usePreviewLocale();

  const { values } = translations[locale];

  return (
    <InputGroup className="max-w-64">
      <InputGroupInput
        aria-label={values.search}
        placeholder={values.placeholder}
      />
      <InputGroupAddon>
        <SearchIcon />
      </InputGroupAddon>
    </InputGroup>
  );
};

const translations = {
  ar: {
    values: {
      placeholder: "ابحث...",
      search: "بحث",
    },
  },
  en: {
    values: {
      placeholder: "Search...",
      search: "Search",
    },
  },
  he: {
    values: {
      placeholder: "חפש...",
      search: "חיפוש",
    },
  },
};

export default Example;
