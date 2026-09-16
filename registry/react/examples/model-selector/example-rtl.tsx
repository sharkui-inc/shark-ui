"use client";

import { useFilter, useListCollection } from "@ark-ui/react";
import { usePreviewLocale } from "@/hooks/use-preview-locale";
import {
  ModelSelector,
  ModelSelectorContent,
  ModelSelectorEmpty,
  ModelSelectorInput,
  ModelSelectorItem,
  ModelSelectorList,
  ModelSelectorName,
  ModelSelectorTrigger,
} from "@/registry/react/components/model-selector";

const Example = () => {
  const { locale } = usePreviewLocale();
  const { contains } = useFilter({ sensitivity: "base" });
  const { collection, filter } = useListCollection({
    filter: contains,
    initialItems,
  });
  const { values } = translations[locale];

  return (
    <div className="flex justify-center">
      <ModelSelector
        collection={collection}
        onInputValueChange={({ inputValue }) => filter(inputValue)}
      >
        <ModelSelectorTrigger>{values.selectModel}</ModelSelectorTrigger>
        <ModelSelectorContent>
          <ModelSelectorInput aria-label={values.searchModels} />
          <ModelSelectorList>
            <ModelSelectorEmpty>{values.noModels}</ModelSelectorEmpty>
            {collection.items.map((item) => (
              <ModelSelectorItem item={item} key={item.value}>
                <ModelSelectorName>{item.label}</ModelSelectorName>
              </ModelSelectorItem>
            ))}
          </ModelSelectorList>
        </ModelSelectorContent>
      </ModelSelector>
    </div>
  );
};

const initialItems = [
  { label: "GPT-4.1", value: "gpt-4.1" },
  { label: "GPT-4.1 Mini", value: "gpt-4.1-mini" },
  { label: "Claude Sonnet 4", value: "claude-sonnet-4" },
  { label: "Gemini 2.5 Pro", value: "gemini-2.5-pro" },
];

const translations = {
  ar: {
    values: {
      noModels: "لم يتم العثور على نماذج.",
      searchModels: "ابحث عن النماذج",
      selectModel: "اختر نموذجًا",
    },
  },
  en: {
    values: {
      noModels: "No models found.",
      searchModels: "Search models",
      selectModel: "Select model",
    },
  },
  he: {
    values: {
      noModels: "לא נמצאו מודלים.",
      searchModels: "חיפוש מודלים",
      selectModel: "בחירת מודל",
    },
  },
};

export default Example;
