"use client";

import { createListCollection } from "@ark-ui/react";
import { usePreviewLocale } from "@/hooks/use-preview-locale";
import {
  Listbox,
  ListboxContent,
  ListboxItem,
  ListboxItemIndicator,
  ListboxItemText,
} from "@/registry/react/components/listbox";

const Example = () => {
  const { locale } = usePreviewLocale();
  const { values } = translations[locale];

  const collection = createListCollection({ items: values.items });

  return (
    <Listbox className="max-w-64" collection={collection} defaultValue={["br"]}>
      <ListboxContent>
        {collection.items.map((item) => (
          <ListboxItem item={item} key={item.value}>
            <ListboxItemText>{item.label}</ListboxItemText>
            <ListboxItemIndicator />
          </ListboxItem>
        ))}
      </ListboxContent>
    </Listbox>
  );
};

const translations = {
  ar: {
    values: {
      items: [
        { label: "البرازيل", value: "br" },
        { label: "المكسيك", value: "mx" },
        { label: "أيرلندا", value: "ie" },
      ],
    },
  },
  en: {
    values: {
      items: [
        { label: "Brazil", value: "br" },
        { label: "Mexico", value: "mx" },
        { label: "Ireland", value: "ie" },
      ],
    },
  },
  he: {
    values: {
      items: [
        { label: "ברזיל", value: "br" },
        { label: "מקסיקו", value: "mx" },
        { label: "אירלנד", value: "ie" },
      ],
    },
  },
};

export default Example;
