"use client";

import { Field, FieldLabel } from "@/registry/react/components/field";
import {
  TagsInput,
  TagsInputContext,
  TagsInputItem,
} from "@/registry/react/components/tags-input";

const TagsInputDemo = () => (
  <Field className="w-full max-w-sm">
    <FieldLabel>Frameworks</FieldLabel>
    <TagsInput className="w-full" defaultValue={defaultValue}>
      <TagsInputContext>
        {({ value: tags }) =>
          tags.map((tag, index) => (
            <TagsInputItem index={index} key={tag} value={tag}>
              {tag}
            </TagsInputItem>
          ))
        }
      </TagsInputContext>
    </TagsInput>
  </Field>
);

const defaultValue = ["React", "Solid", "Vue", "Svelte"];

export default TagsInputDemo;
