"use client";

import { Field, FieldLabel } from "@/registry/react/components/field";
import {
  TagsInput,
  TagsInputContext,
  TagsInputInput,
  TagsInputItem,
} from "@/registry/react/components/tags-input";

const defaultValue = ["React", "Solid", "Vue", "Svelte"];

const TagsInputDemo = () => (
  <Field className="w-full max-w-sm">
    <FieldLabel>Frameworks</FieldLabel>
    <TagsInput className="w-full" defaultValue={defaultValue}>
      <TagsInputContext>
        {(api) => (
          <>
            {api.value.map((value, index) => (
              <TagsInputItem index={index} key={value} value={value}>
                {value}
              </TagsInputItem>
            ))}
            <TagsInputInput placeholder="Add framework" />
          </>
        )}
      </TagsInputContext>
    </TagsInput>
  </Field>
);

export default TagsInputDemo;
