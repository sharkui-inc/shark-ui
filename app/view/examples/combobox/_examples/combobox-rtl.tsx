"use client";

import { useFilter, useListCollection } from "@ark-ui/react";
import {
  Combobox,
  ComboboxChip,
  ComboboxChips,
  ComboboxChipsInput,
  ComboboxContent,
  ComboboxContext,
  ComboboxEmpty,
  ComboboxItem,
  ComboboxList,
} from "@/registry/react/components/combobox";
import { Field, FieldLabel } from "@/registry/react/components/field";
import { LocaleProvider } from "@/registry/react/components/locale";

const ComboboxRtl = () => {
  const { contains } = useFilter({ sensitivity: "base" });

  const { collection, filter } = useListCollection({
    filter: contains,
    initialItems,
  });

  return (
    <div dir="rtl">
      <LocaleProvider locale="ar-SA">
        <Field className="mx-auto w-full max-w-xs">
          <FieldLabel>الفئات</FieldLabel>
          <Combobox
            collection={collection}
            defaultValue={[initialItems[0].value]}
            multiple
            onInputValueChange={({ inputValue, reason }) =>
              filter(reason === "item-select" ? "" : inputValue)
            }
          >
            <ComboboxContext>
              {({ selectedItems }) => (
                <>
                  <ComboboxChips>
                    {selectedItems.map((item) => (
                      <ComboboxChip key={item.value} value={item.value}>
                        {item.label}
                      </ComboboxChip>
                    ))}
                    <ComboboxChipsInput placeholder="أضف فئات" />
                  </ComboboxChips>
                  <ComboboxContent>
                    <ComboboxEmpty>لم يتم العثور على فئات.</ComboboxEmpty>
                    <ComboboxList>
                      {collection.items.map((item) => (
                        <ComboboxItem item={item} key={item.value}>
                          {item.label}
                        </ComboboxItem>
                      ))}
                    </ComboboxList>
                  </ComboboxContent>
                </>
              )}
            </ComboboxContext>
          </Combobox>
        </Field>
      </LocaleProvider>
    </div>
  );
};

const initialItems = [
  { label: "التكنولوجيا", value: "technology" },
  { label: "التصميم", value: "design" },
  { label: "الأعمال", value: "business" },
  { label: "التسويق", value: "marketing" },
  { label: "التعليم", value: "education" },
  { label: "الصحة", value: "health" },
];

export default ComboboxRtl;
