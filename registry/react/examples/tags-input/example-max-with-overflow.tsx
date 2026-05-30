"use client";

import { Field, FieldLabel } from "@/registry/react/components/field";
import {
  TagsInput,
  TagsInputContext,
  TagsInputInput,
  TagsInputItem,
} from "@/registry/react/components/tags-input";

const Example = () => (
  <Field className="w-full max-w-sm">
    <FieldLabel>Frameworks</FieldLabel>
    <TagsInput
      allowOverflow
      className="w-full"
      defaultValue={["React", "Solid", "Vue"]}
      max={3}
    >
      <TagsInputContext>
        {(api) => (
          <>
            {api.value.map((tag, index) => (
              <TagsInputItem index={index} key={tag} value={tag}>
                {tag}
              </TagsInputItem>
            ))}
            <TagsInputInput placeholder="Max 3 (overflow allowed)" />
          </>
        )}
      </TagsInputContext>
    </TagsInput>
  </Field>
);

export default Example;
