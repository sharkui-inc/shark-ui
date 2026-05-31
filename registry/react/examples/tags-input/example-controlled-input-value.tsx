"use client";

import React from "react";
import { Button } from "@/registry/react/components/button";
import { Field, FieldLabel } from "@/registry/react/components/field";
import {
  TagsInput,
  TagsInputContext,
  TagsInputItem,
} from "@/registry/react/components/tags-input";

const Example = () => {
  const [inputValue, setInputValue] = React.useState("");

  return (
    <div className="flex max-w-sm flex-col gap-3">
      <div className="flex flex-wrap gap-2">
        <Button
          onClick={() => setInputValue("React")}
          size="sm"
          variant="outline"
        >
          Set &quot;React&quot;
        </Button>
        <Button onClick={() => setInputValue("")} size="sm" variant="outline">
          Clear
        </Button>
      </div>
      <Field>
        <FieldLabel>Frameworks</FieldLabel>
        <TagsInput
          className="w-full"
          defaultValue={["React"]}
          inputValue={inputValue}
          onInputValueChange={(details) => setInputValue(details.inputValue)}
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
      </Field>
    </div>
  );
};

export default Example;
