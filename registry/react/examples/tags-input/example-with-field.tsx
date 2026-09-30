"use client";

import { Field, FieldDescription } from "@/registry/react/components/field";
import {
  TagsInput,
  TagsInputContext,
  TagsInputItem,
  TagsInputLabel,
} from "@/registry/react/components/tags-input";

const Example = () => (
  <Field className="w-full max-w-sm">
    <TagsInput
      className="w-full"
      defaultValue={["React", "Solid"]}
      placeholder="Add framework"
    >
      <TagsInputLabel>Frameworks</TagsInputLabel>
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
    <FieldDescription>Press Enter to add a tag.</FieldDescription>
  </Field>
);

export default Example;
