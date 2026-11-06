"use client";

import { usePreviewLocale } from "@/hooks/use-preview-locale";
import { Field, FieldLabel } from "@/registry/react/components/field";
import {
  TagsInput,
  TagsInputContext,
  TagsInputItem,
} from "@/registry/react/components/tags-input";

const Example = () => {
  const { locale } = usePreviewLocale();

  const { values } = translations[locale];

  return (
    <Field className="w-full max-w-sm">
      <FieldLabel>{values.label}</FieldLabel>
      <TagsInput
        className="w-full"
        defaultValue={values.items}
        placeholder="Add framework"
      >
        <TagsInputContext>
          {({ value }) =>
            value.map((item, index) => (
              <TagsInputItem index={index} key={item} value={item}>
                {item}
              </TagsInputItem>
            ))
          }
        </TagsInputContext>
      </TagsInput>
    </Field>
  );
};

const translations = {
  ar: {
    values: {
      items: ["React", "Solid", "Vue", "Svelte"],
      label: "أطر العمل",
    },
  },
  en: {
    values: {
      items: ["React", "Solid", "Vue", "Svelte"],
      label: "Frameworks",
    },
  },
  he: {
    values: {
      items: ["React", "Solid", "Vue", "Svelte"],
      label: "מסגרות עבודה",
    },
  },
};

export default Example;
