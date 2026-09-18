"use client";

import { createListCollection } from "@ark-ui/react";
import { ShieldCheckIcon } from "lucide-react";
import React from "react";
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
        <PromptInputSubmit className="ms-1" size="icon-sm" />
      </PromptInputFooter>
    </PromptInput>
  );
};

const accessCollection = createListCollection({
  items: [
    { label: "Ask first", value: "ask-first" },
    { label: "Full access", value: "full-access" },
  ],
});

export default Example;
