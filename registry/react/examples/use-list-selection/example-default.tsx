"use client";

import { createListCollection } from "@ark-ui/react/collection";
import { Checkbox } from "@/registry/react/components/checkbox";
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldTitle,
} from "@/registry/react/components/field";
import { useListSelection } from "@/registry/react/hooks/use-list-selection";

const UseListSelectionDemo = () => {
  const selection = useListSelection({ collection });

  return (
    <div className="flex w-full max-w-sm flex-col gap-3">
      <output className="text-muted-foreground text-sm">
        Selected: {selection.selectedValues.join(", ") || "None"}
      </output>
      <FieldGroup className="gap-2" role="list">
        {collection.items.map((item) => {
          const handleCheckedChange = () => selection.select(item.value);
          const selected = selection.isSelected(item.value);
          return (
            <FieldLabel className="w-full" key={item.value} role="listitem">
              <Field orientation="horizontal">
                <FieldContent>
                  <FieldTitle>{item.label}</FieldTitle>
                  <FieldDescription>{item.description}</FieldDescription>
                </FieldContent>
                <Checkbox
                  checked={selected}
                  onCheckedChange={handleCheckedChange}
                />
              </Field>
            </FieldLabel>
          );
        })}
      </FieldGroup>
    </div>
  );
};

const collection = createListCollection({
  items: [
    {
      description: "Component-driven interfaces",
      label: "React",
      value: "react",
    },
    {
      description: "Progressive web interfaces",
      label: "Vue",
      value: "vue",
    },
    {
      description: "Lean compiled components",
      label: "Svelte",
      value: "svelte",
    },
  ],
});

export default UseListSelectionDemo;
