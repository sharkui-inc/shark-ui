"use client";

import { useFilter, useListCollection } from "@ark-ui/react";
import { usePreviewLocale } from "@/hooks/use-preview-locale";
import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "@/registry/react/components/combobox";

const Example = () => {
  const { contains } = useFilter({ sensitivity: "base" });
  const { locale } = usePreviewLocale();
  const { values } = translations[locale];

  const { collection, filter } = useListCollection({
    filter: contains,
    initialItems: values.items,
  });

  return (
    <Combobox
      className="max-w-xs"
      collection={collection}
      onInputValueChange={({ inputValue, reason }) =>
        filter(reason === "item-select" ? "" : inputValue)
      }
    >
      <ComboboxInput placeholder={values.placeholder} />
      <ComboboxContent>
        <ComboboxEmpty />
        <ComboboxList>
          {collection.items.map((item) => (
            <ComboboxItem item={item} key={item.value}>
              {item.label}
            </ComboboxItem>
          ))}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  );
};

const translations = {
  ar: {
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
};

export default Example;
