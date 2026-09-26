"use client";

import { useListCollection } from "@ark-ui/react";
import {
  FolderIcon,
  GitBranchIcon,
  MicIcon,
  MonitorIcon,
  PlusIcon,
  ShieldAlertIcon,
} from "lucide-react";
import React from "react";
import { Button } from "@/registry/react/components/button";
import {
  Combobox,
  ComboboxButtonTrigger,
  ComboboxContent,
  ComboboxItem,
  ComboboxList,
} from "@/registry/react/components/combobox";
import {
  Context,
  ContextBody,
  ContextContent,
  ContextHeader,
  ContextIcon,
  ContextMeter,
  ContextTrigger,
  ContextUsageRow,
} from "@/registry/react/components/context";
import {
  Menu,
  MenuContent,
  MenuItem,
  MenuTrigger,
} from "@/registry/react/components/menu";
import {
  PromptInput,
  PromptInputBottom,
  PromptInputButton,
  PromptInputFooter,
  type PromptInputStatus,
  PromptInputSubmit,
  PromptInputTextarea,
  PromptInputTools,
} from "@/registry/react/components/prompt-input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/react/components/select";
import {
  accessCollection,
  CONTEXT_USAGE,
  effortCollection,
  MODEL_OPTIONS,
  promptActions,
} from "../_data/chat-demo";

export const ChatPromptComposer = ({
  onStop,
  onSubmit,
  status,
  usedTokens,
  value,
}: {
  onStop: () => void;
  onSubmit: () => void;
  status: PromptInputStatus;
  usedTokens: number;
  value: string;
}) => {
  const [model, setModel] = React.useState<string[]>([MODEL_OPTIONS[0].value]);
  const [effort, setEffort] = React.useState(["medium"]);
  const [access, setAccess] = React.useState(["full"]);
  const { collection } = useListCollection({
    initialItems: [...MODEL_OPTIONS],
  });

  return (
    <div className="mx-auto flex w-full max-w-3xl flex-col gap-3 px-4 pt-2 pb-4 sm:px-6">
      <PromptInput
        className="w-full"
        onStop={onStop}
        onSubmit={onSubmit}
        status={status}
      >
        <PromptInputTextarea aria-label="Message" readOnly value={value} />
        <PromptInputFooter>
          <PromptInputTools>
            <Menu positioning={{ placement: "top-start" }}>
              <MenuTrigger asChild>
                <PromptInputButton aria-label="Add to prompt" size="icon-sm">
                  <PlusIcon aria-hidden />
                </PromptInputButton>
              </MenuTrigger>
              <MenuContent className="w-52">
                {promptActions.map((action) => {
                  const Icon = action.icon;

                  return (
                    <MenuItem key={action.value} value={action.value}>
                      <Icon aria-hidden />
                      {action.label}
                    </MenuItem>
                  );
                })}
              </MenuContent>
            </Menu>
            <Select
              collection={accessCollection}
              onValueChange={(details) => setAccess(details.value)}
              positioning={{ placement: "top-start" }}
              value={access}
            >
              <SelectTrigger showTrigger={false} size="sm" variant="ghost">
                <ShieldAlertIcon aria-hidden />
                <SelectValue placeholder="Full access" />
              </SelectTrigger>
              <SelectContent>
                {accessCollection.items.map((item) => (
                  <SelectItem item={item} key={item.value}>
                    <span className="flex min-w-0 flex-col gap-0.5">
                      <span>{item.label}</span>
                      <span className="text-muted-foreground text-xs">
                        {item.description}
                      </span>
                    </span>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </PromptInputTools>
          <Combobox
            collection={collection}
            onValueChange={(details) => setModel(details.value)}
            positioning={{ placement: "top" }}
            value={model}
          >
            <ComboboxButtonTrigger
              placeholder="Model"
              showTrigger={false}
              size="sm"
              variant="ghost"
            />
            <ComboboxContent className="max-h-72 w-52">
              <ComboboxList>
                {collection.items.map((item) => (
                  <ComboboxItem item={item} key={item.value}>
                    {item.label}
                  </ComboboxItem>
                ))}
              </ComboboxList>
            </ComboboxContent>
          </Combobox>
          <Select
            collection={effortCollection}
            onValueChange={(details) => setEffort(details.value)}
            positioning={{ placement: "top" }}
            value={effort}
          >
            <SelectTrigger showTrigger={false} size="sm" variant="ghost">
              <SelectValue placeholder="Medium" />
            </SelectTrigger>
            <SelectContent>
              {effortCollection.items.map((item) => (
                <SelectItem item={item} key={item.value}>
                  {item.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <PromptInputButton aria-label="Voice input" size="icon-sm">
            <MicIcon aria-hidden />
          </PromptInputButton>
          <PromptInputSubmit className="ms-2" size="icon-sm" />
        </PromptInputFooter>
        <PromptInputBottom>
          <Button className="text-muted-foreground" size="sm" variant="ghost">
            <FolderIcon aria-hidden />
            shark-ui
          </Button>
          <Button className="text-muted-foreground" size="sm" variant="ghost">
            <MonitorIcon aria-hidden />
            Local
          </Button>
          <Button className="text-muted-foreground" size="sm" variant="ghost">
            <GitBranchIcon aria-hidden />
            main
          </Button>
          <div className="ms-auto">
            <Context
              maxTokens={128_000}
              positioning={{ placement: "top-end" }}
              usedTokens={usedTokens}
            >
              <ContextTrigger aria-label="Context usage" size="icon-sm">
                <ContextIcon />
              </ContextTrigger>
              <ContextContent>
                <ContextHeader>
                  <ContextMeter />
                </ContextHeader>
                <ContextBody>
                  {CONTEXT_USAGE.map((usage) => (
                    <ContextUsageRow key={usage.title} {...usage} />
                  ))}
                </ContextBody>
              </ContextContent>
            </Context>
          </div>
        </PromptInputBottom>
      </PromptInput>
    </div>
  );
};
