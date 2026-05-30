"use client";

import { Field, FieldLabel } from "@/registry/react/components/field";
import {
  TagsInput,
  TagsInputContext,
  TagsInputInput,
  TagsInputItem,
} from "@/registry/react/components/tags-input";

const Example = () => (
  <Field className="max-w-md" disabled>
    <FieldLabel>Frameworks</FieldLabel>
    <TagsInput
      className="w-full"
      defaultValue={["React", "Solid", "Vue"]}
      disabled
    >
      <TagsInputContext>
        {(api) => (
          <>
            {api.value.map((tag, index) => (
              <TagsInputItem index={index} key={tag} value={tag}>
                {tag}
              </TagsInputItem>
            ))}
            <TagsInputInput placeholder="Add framework" />
          </>
        )}
      </TagsInputContext>
    </TagsInput>
  </Field>
);

export default Example;
