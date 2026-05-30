"use client";

import { useState } from "react";
import { Field, FieldLabel } from "@/registry/react/components/field";
import {
  TagsInput,
  TagsInputContext,
  TagsInputInput,
  TagsInputItem,
} from "@/registry/react/components/tags-input";

const initialValue = ["React", "Solid"];

const Example = () => {
  const [value, setValue] = useState(initialValue);

  return (
    <Field className="w-full max-w-sm">
      <FieldLabel>Frameworks</FieldLabel>
      <TagsInput
        className="w-full"
        onValueChange={(details) => setValue(details.value)}
        value={value}
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
};

export default Example;
