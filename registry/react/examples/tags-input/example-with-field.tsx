"use client";

import {
  Field,
  FieldHelper,
  FieldLabel,
} from "@/registry/react/components/field";
import {
  TagsInput,
  TagsInputContext,
  TagsInputItem,
} from "@/registry/react/components/tags-input";

const Example = () => (
  <Field className="w-full max-w-sm">
    <FieldLabel>Frameworks</FieldLabel>
    <TagsInput
      className="w-full"
      defaultValue={["React", "Solid"]}
      placeholder="Add framework"
    >
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
    <FieldHelper>Press Enter to add a tag.</FieldHelper>
  </Field>
);

export default Example;
