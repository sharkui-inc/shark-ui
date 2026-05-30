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
      className="w-full"
      defaultValue={["react"]}
      sanitizeValue={(value) => value.trim().toLowerCase()}
    >
      <TagsInputContext>
        {(api) => (
          <>
            {api.value.map((tag, index) => (
              <TagsInputItem index={index} key={tag} value={tag}>
                {tag}
              </TagsInputItem>
            ))}
            <TagsInputInput placeholder="Tags are trimmed and lowercased" />
          </>
        )}
      </TagsInputContext>
    </TagsInput>
  </Field>
);

export default Example;
