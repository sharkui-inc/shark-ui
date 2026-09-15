"use client";

import { usePreviewLocale } from "@/hooks/use-preview-locale";
import {
  NativeSelect,
  NativeSelectOption,
} from "@/registry/react/components/native-select";

const Example = () => {
  const { locale } = usePreviewLocale();
  const { values } = translations[locale];

  return (
    <NativeSelect className="w-fit">
      <NativeSelectOption value="">{values.placeholder}</NativeSelectOption>
      <NativeSelectOption value="banana">{values.banana}</NativeSelectOption>
      <NativeSelectOption value="apple">{values.apple}</NativeSelectOption>
      <NativeSelectOption value="orange">{values.orange}</NativeSelectOption>
      <NativeSelectOption value="pineapple">
        {values.pineapple}
      </NativeSelectOption>
    </NativeSelect>
  );
};

const translations = {
  ar: {
    values: {
      apple: "تفاح",
      banana: "موز",
      orange: "برتقال",
      pineapple: "أناناس",
      placeholder: "اختر خيارًا",
    },
  },
  en: {
    values: {
      apple: "Apple",
      banana: "Banana",
      orange: "Orange",
      pineapple: "Pineapple",
      placeholder: "Select an option",
    },
  },
  he: {
    values: {
      apple: "תפוח",
      banana: "בננה",
      orange: "תפוז",
      pineapple: "אננס",
      placeholder: "בחר אפשרות",
    },
  },
};

export default Example;
