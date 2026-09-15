"use client";

import { BoldIcon, ItalicIcon, UnderlineIcon } from "lucide-react";
import { usePreviewLocale } from "@/hooks/use-preview-locale";
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/registry/react/components/toggle-group";

const Example = () => {
  const { locale } = usePreviewLocale();

  const { values } = translations[locale];

  return (
    <ToggleGroup defaultValue={["bold"]} multiple>
      <ToggleGroupItem aria-label={values.bold} value="bold">
        <BoldIcon />
      </ToggleGroupItem>
      <ToggleGroupItem aria-label={values.italic} value="italic">
        <ItalicIcon />
      </ToggleGroupItem>
      <ToggleGroupItem aria-label={values.underline} value="underline">
        <UnderlineIcon />
      </ToggleGroupItem>
    </ToggleGroup>
  );
};

const translations = {
  ar: {
    values: {
      bold: "تبديل العريض",
      italic: "تبديل المائل",
      underline: "تبديل التسطير",
    },
  },
  en: {
    values: {
      bold: "Toggle bold",
      italic: "Toggle italic",
      underline: "Toggle underline",
    },
  },
  he: {
    values: {
      bold: "החלף מודגש",
      italic: "החלף נטוי",
      underline: "החלף קו תחתון",
    },
  },
};

export default Example;
