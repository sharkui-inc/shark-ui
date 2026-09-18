"use client";

import { createListCollection, useListCollection } from "@ark-ui/react";
import { ShieldCheckIcon } from "lucide-react";
import React from "react";
import {
  ModelSelector,
  ModelSelectorContent,
  ModelSelectorItem,
  ModelSelectorList,
  ModelSelectorTrigger,
} from "@/registry/react/components/model-selector";
import {
  PromptInput,
  PromptInputFooter,
  type PromptInputStatus,
  PromptInputSubmit,
  PromptInputTextarea,
} from "@/registry/react/components/prompt-input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/react/components/select";

const Example = () => {
  const [status, setStatus] = React.useState<PromptInputStatus>("ready");
  const [value, setValue] = React.useState("Summarize the latest deploy.");
  const [access, setAccess] = React.useState(["ask-first"]);
  const { collection } = useListCollection({ initialItems: models });

  return (
    <PromptInput
      className="max-w-lg"
      onStop={() => setStatus("ready")}
      onSubmit={() => setStatus("streaming")}
      status={status}
    >
      <PromptInputTextarea
        aria-label="Prompt"
        onChange={(event) => setValue(event.target.value)}
        placeholder="Ask the agent to do something…"
        value={value}
      />
      <PromptInputFooter>
        <Select
          collection={accessCollection}
          onValueChange={(details) => setAccess(details.value)}
          positioning={{ placement: "top-start" }}
          value={access}
        >
          <SelectTrigger showTrigger={false} size="sm" variant="ghost">
            <ShieldCheckIcon aria-hidden="true" />
            <SelectValue placeholder="Ask first" />
          </SelectTrigger>
          <SelectContent>
            {accessCollection.items.map((item) => (
              <SelectItem item={item} key={item.value}>
                {item.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <ModelSelector collection={collection}>
          <ModelSelectorTrigger size="sm" variant="ghost" />
          <ModelSelectorContent>
            <ModelSelectorList>
              {collection.items.map((item) => (
                <ModelSelectorItem item={item} key={item.value}>
                  {item.label}
                </ModelSelectorItem>
              ))}
            </ModelSelectorList>
          </ModelSelectorContent>
        </ModelSelector>
        <PromptInputSubmit className="ms-1" size="icon-sm" />
      </PromptInputFooter>
    </PromptInput>
  );
};

const models = [
  { label: "GPT-5.6 Terra", value: "gpt-5.6-terra" },
  { label: "Claude Sonnet 4", value: "claude-sonnet-4" },
];

const accessCollection = createListCollection({
  items: [
    { label: "Ask first", value: "ask-first" },
    { label: "Full access", value: "full-access" },
  ],
});

export default Example;
