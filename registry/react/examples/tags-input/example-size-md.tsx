"use client";

import { Field, FieldLabel } from "@/registry/react/components/field";
import {
  TagsInput,
  TagsInputContext,
  TagsInputInput,
  TagsInputItem,
} from "@/registry/react/components/tags-input";

const defaultValue = ["React", "Solid"];

const Example = () => (
  <Field className="w-full max-w-sm">
    <FieldLabel>Frameworks</FieldLabel>
    <TagsInput className="w-full" defaultValue={defaultValue} size="md">
      <TagsInputContext>
        {(api) => (
          <>
            {api.value.map((value, index) => (
              <TagsInputItem index={index} key={value} value={value}>
                {value}
              </TagsInputItem>
            ))}
            <TagsInputInput placeholder="Medium" />
          </>
        )}
      </TagsInputContext>
    </TagsInput>
  </Field>
);

export default Example;
