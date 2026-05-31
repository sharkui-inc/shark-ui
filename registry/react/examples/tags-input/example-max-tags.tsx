"use client";

import { Field, FieldLabel } from "@/registry/react/components/field";
import {
  TagsInput,
  TagsInputContext,
  TagsInputItem,
} from "@/registry/react/components/tags-input";

const Example = () => (
  <Field className="w-full max-w-sm">
    <FieldLabel>Frameworks (max 3)</FieldLabel>
    <TagsInput className="w-full" defaultValue={["React", "Solid"]} max={3}>
      <TagsInputContext>
        {({ value }) =>
          value.map((tag, index) => (
            <TagsInputItem index={index} key={tag} value={tag}>
              {tag}
            </TagsInputItem>
          ))
        }
      </TagsInputContext>
    </TagsInput>
  </Field>
);

export default Example;
