"use client";

import React from "react";
import { Field, FieldLabel } from "@/registry/react/components/field";
import {
  TagsInput,
  TagsInputContext,
  TagsInputItem,
} from "@/registry/react/components/tags-input";

const Example = () => {
  const [value, setValue] = React.useState([
    "React",
    "Next.js",
    "Tailwind CSS",
  ]);

  return (
    <Field className="w-full max-w-sm">
      <FieldLabel>Frameworks</FieldLabel>
      <TagsInput
        className="w-full"
        onValueChange={(details) => setValue(details.value)}
        placeholder="Add framework"
        value={value}
      >
        <TagsInputContext>
          {({ value: tags }) =>
            tags.map((tag, index) => (
              <TagsInputItem index={index} key={tag} value={tag}>
                {tag}
              </TagsInputItem>
            ))
          }
        </TagsInputContext>
      </TagsInput>
    </Field>
  );
};

export default Example;
