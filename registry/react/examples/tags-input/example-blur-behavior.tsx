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
    <TagsInput blurBehavior="add" className="w-full" defaultValue={["React"]}>
      <TagsInputContext>
        {(api) => (
          <>
            {api.value.map((tag, index) => (
              <TagsInputItem index={index} key={tag} value={tag}>
                {tag}
              </TagsInputItem>
            ))}
            <TagsInputInput placeholder="Blur adds the tag" />
          </>
        )}
      </TagsInputContext>
    </TagsInput>
  </Field>
);

export default Example;
