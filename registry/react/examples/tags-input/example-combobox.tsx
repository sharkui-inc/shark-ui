"use client";

import { useFilter, useListCollection } from "@ark-ui/react";
import React from "react";
import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxFieldInput,
  ComboboxItem,
  ComboboxList,
} from "@/registry/react/components/combobox";
import { Field, FieldLabel } from "@/registry/react/components/field";
import {
  TagsInput,
  TagsInputContext,
  TagsInputInput,
  TagsInputItem,
} from "@/registry/react/components/tags-input";

const Example = () => {
  const { contains } = useFilter({ sensitivity: "base" });
  const { collection, filter } = useListCollection({
    filter: contains,
    initialItems: frameworkItems,
  });

  const [tags, setTags] = React.useState<string[]>([]);

  const availableItems = collection.items.filter(
    (item) => !tags.includes(item)
  );

  return (
    <Field className="w-full max-w-sm">
      <FieldLabel>Frameworks</FieldLabel>
      <Combobox
        allowCustomValue
        collection={collection}
        onInputValueChange={({ inputValue }) => filter(inputValue)}
        onValueChange={({ value }) => {
          const [next] = value;
          if (next && !tags.includes(next)) {
            setTags((current) => [...current, next]);
          }
        }}
        selectionBehavior="clear"
        value={[]}
      >
        <TagsInput
          className="w-full"
          onValueChange={({ value }) => setTags(value)}
          value={tags}
        >
          <TagsInputContext>
            {({ value }) => (
              <>
                {value.map((tag, index) => (
                  <TagsInputItem index={index} key={tag} value={tag}>
                    {tag}
                  </TagsInputItem>
                ))}
                <ComboboxFieldInput asChild>
                  <TagsInputInput placeholder="Search framework" />
                </ComboboxFieldInput>
              </>
            )}
          </TagsInputContext>
        </TagsInput>
        <ComboboxContent>
          <ComboboxList>
            <ComboboxEmpty>No frameworks found</ComboboxEmpty>
            {availableItems.map((item) => (
              <ComboboxItem item={item} key={item}>
                {item}
              </ComboboxItem>
            ))}
          </ComboboxList>
        </ComboboxContent>
      </Combobox>
    </Field>
  );
};

const frameworkItems = [
  "React",
  "Solid",
  "Vue",
  "Svelte",
  "Angular",
  "Preact",
  "Next.js",
  "Astro",
];

export default Example;
