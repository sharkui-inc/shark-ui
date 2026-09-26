"use client";

import { createListCollection } from "@ark-ui/react";
import { usePreviewLocale } from "@/hooks/use-preview-locale";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/react/components/select";

const Example = () => {
  const { locale } = usePreviewLocale();

  const { values } = translations[locale];

  const collection = createListCollection({ items: values.items });

  return (
    <Select collection={collection}>
      <SelectTrigger className="w-48">
        <SelectValue placeholder={values.placeholder} />
      </SelectTrigger>

      <SelectContent>
        <SelectGroup heading={values.heading}>
          {collection.items.map((item) => (
            <SelectItem item={item} key={item}>
              {item}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

const translations = {
  ar: {
    values: {
      heading: "الفواكه",
      items: ["موز", "تفاح", "برتقال", "أناناس"],
      placeholder: "اختر فاكهة",
    },
  },
  en: {
    values: {
      heading: "Fruits",
      items: ["Banana", "Apple", "Orange", "Pineapple"],
      placeholder: "Select a fruit",
    },
  },
  he: {
    values: {
      heading: "פירות",
      items: ["בננה", "תפוח", "תפוז", "אננס"],
      placeholder: "בחר פרי",
    },
  },
};

export default Example;
