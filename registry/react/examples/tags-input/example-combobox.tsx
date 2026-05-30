"use client";

import { useFilter, useListCollection } from "@ark-ui/react";
import { useId } from "react";
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
  TagsInputContext,
  TagsInputInput,
  TagsInputItem,
  TagsInputRootProvider,
  useTagsInput,
} from "@/registry/react/components/tags-input";

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

const Example = () => {
  const uid = useId();
  const { contains } = useFilter({ sensitivity: "base" });
  const { collection, filter } = useListCollection({
    initialItems: frameworkItems,
    filter: contains,
  });

  const tagsInput = useTagsInput({
    ids: { input: `tags-input-${uid}`, control: `tags-control-${uid}` },
  });

  const availableItems = collection.items.filter(
    (item) => !tagsInput.value.includes(item)
  );

  return (
    <Combobox
      allowCustomValue
      className="w-full max-w-sm"
      collection={collection}
      ids={{ input: `tags-input-${uid}`, control: `tags-control-${uid}` }}
      onInputValueChange={({ inputValue }) => filter(inputValue)}
      onValueChange={({ value }) => {
        const next = value[0];
        if (next && !tagsInput.value.includes(next)) {
          tagsInput.addValue(next);
        }
      }}
      selectionBehavior="clear"
      value={[]}
    >
      <Field className="w-full">
        <FieldLabel>Frameworks</FieldLabel>
        <TagsInputRootProvider className="w-full" value={tagsInput}>
          <TagsInputContext>
            {(api) => (
              <>
                {api.value.map((tag, index) => (
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
        </TagsInputRootProvider>
      </Field>
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
  );
};

export default Example;
