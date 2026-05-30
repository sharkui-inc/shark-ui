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
    <FieldLabel>Frameworks (max 10 chars)</FieldLabel>
    <TagsInput className="w-full" defaultValue={["React"]} maxLength={10}>
      <TagsInputContext>
        {(api) => (
          <>
            {api.value.map((tag, index) => (
              <TagsInputItem index={index} key={tag} value={tag}>
                {tag}
              </TagsInputItem>
            ))}
            <TagsInputInput placeholder="Max 10 characters per tag" />
          </>
        )}
      </TagsInputContext>
    </TagsInput>
  </Field>
);

export default Example;
