"use client";

import { createListCollection, useListCollection } from "@ark-ui/react";
import {
  CircleHelpIcon,
  FileTextIcon,
  FolderIcon,
  GitBranchIcon,
  GlobeIcon,
  ImagePlusIcon,
  ListTodoIcon,
  MonitorIcon,
  PaperclipIcon,
  PlusIcon,
  ShieldAlertIcon,
} from "lucide-react";
import type React from "react";
import { useCallback, useState } from "react";
import { Button } from "@/registry/react/components/button";
import {
  Context,
  ContextBody,
  ContextContent,
  ContextHeader,
  ContextIcon,
  ContextMeter,
  ContextTitle,
  ContextTrigger,
  ContextUsageRow,
} from "@/registry/react/components/context";
import {
  ModelSelector,
  ModelSelectorContent,
  ModelSelectorItem,
  ModelSelectorList,
  ModelSelectorTrigger,
} from "@/registry/react/components/model-selector";
import { Input } from "@/registry/react/components/input";
import { PopoverTrigger } from "@/registry/react/components/popover";
import {
  PromptInput,
  PromptInputAction,
  PromptInputActions,
  PromptInputActionsContent,
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
  SpeechInput,
  SpeechInputTrigger,
} from "@/registry/react/components/speech-input";

const PromptInputDemo = () => {
  const [status, setStatus] = useState<PromptInputStatus>("ready");
  const [value, setValue] = useState("");
  const [model, setModel] = useState("terra-5.6");
  const [effort, setEffort] = useState("medium");
  const [access, setAccess] = useState("full");
  const [actionQuery, setActionQuery] = useState("");
  const { collection } = useListCollection({ initialItems: models });

  const handleStop = useCallback(() => setStatus("ready"), []);
  const handleSubmit = useCallback(() => {
    setValue("");
    setStatus("streaming");
    window.setTimeout(() => setStatus("ready"), 900);
  }, []);
  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLTextAreaElement>) =>
      setValue(event.target.value),
    []
  );
  const handleTranscription = useCallback((text: string) => {
    setValue((current) => (current ? `${current} ${text}` : text));
  }, []);
  const handleModelChange = useCallback((details: { value: string[] }) => {
    setModel(details.value[0] ?? "");
  }, []);
  const handleAccessChange = useCallback((details: { value: string[] }) => {
    setAccess(details.value[0] ?? "");
  }, []);
  const handleEffortChange = useCallback((details: { value: string[] }) => {
    setEffort(details.value[0] ?? "");
  }, []);
  const normalizedActionQuery = actionQuery.trim().toLowerCase();
  const visibleActions = actionItems.filter((action) =>
    action.label
      .toLowerCase()
      .includes(normalizedActionQuery)
  );
  const contextActions = visibleActions.filter(
    (action) => action.group === "context"
  );
  const agentActions = visibleActions.filter(
    (action) => action.group === "agent"
  );
  const actionSections = [
    { actions: contextActions, id: "context", title: "Add context" },
    { actions: agentActions, id: "agent", title: "Agent actions" },
  ].filter((section) => section.actions.length > 0);

  return (
    <div className="flex w-full max-w-lg flex-col gap-3">
      <PromptInput
        className="w-full"
        onStop={handleStop}
        onSubmit={handleSubmit}
        status={status}
      >
        <PromptInputTextarea
          aria-label="Prompt"
          onChange={handleChange}
          placeholder="Do anything"
          value={value}
        />
        <PromptInputFooter>
          <PromptInputTools>
            <PromptInputActions>
              <PopoverTrigger asChild>
                <PromptInputButton aria-label="Add to prompt" size="icon-sm">
                  <PlusIcon aria-hidden="true" />
                </PromptInputButton>
              </PopoverTrigger>
              <PromptInputActionsContent className="w-80 p-1.5">
                <div className="flex flex-col gap-1">
                  <Input
                    aria-label="Search prompt actions"
                    autoFocus
                    className="h-8 border-0 px-2 text-sm shadow-none focus-visible:border-transparent focus-visible:ring-0"
                    onChange={(event) => setActionQuery(event.target.value)}
                    placeholder="Search actions..."
                    type="search"
                    value={actionQuery}
                  />
                  {actionSections.map((section, index) => (
                    <div
                      className={
                        index > 0
                          ? "flex flex-col gap-0.5 border-t pt-1.5"
                          : "flex flex-col gap-0.5"
                      }
                      key={section.id}
                    >
                      {section.title ? (
                        <span className="px-2 py-1 font-medium text-muted-foreground text-xs">
                          {section.title}
                        </span>
                      ) : null}
                      {section.actions.map((action) => (
                        <PromptInputAction
                          className="min-h-7 px-2 py-1"
                          icon={action.icon}
                          key={action.value}
                        >
                          {action.label}
                        </PromptInputAction>
                      ))}
                    </div>
                  ))}
                  {visibleActions.length === 0 ? (
                    <p className="px-2 py-1.5 text-muted-foreground text-xs">
                      No matching actions.
                    </p>
                  ) : null}
                </div>
              </PromptInputActionsContent>
            </PromptInputActions>
            <Select
              collection={accessCollection}
              onValueChange={handleAccessChange}
              positioning={{ placement: "top-start" }}
              value={[access]}
            >
              <SelectTrigger showTrigger={false} size="sm" variant="ghost">
                <ShieldAlertIcon aria-hidden="true" />
                <SelectValue placeholder="Full access" />
              </SelectTrigger>
              <SelectContent>
                {accessCollection.items.map((item) => (
                  <SelectItem
                    className="items-start py-2"
                    item={item}
                    key={item.value}
                  >
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
          <ModelSelector
            collection={collection}
            onValueChange={handleModelChange}
            value={[model]}
          >
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
          <Select
            collection={effortCollection}
            onValueChange={handleEffortChange}
            positioning={{ placement: "top" }}
            value={[effort]}
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
          <SpeechInput onTranscriptionChange={handleTranscription}>
            <SpeechInputTrigger />
          </SpeechInput>
          <PromptInputSubmit className="ms-2" size="icon-sm" />
        </PromptInputFooter>
        <PromptInputBottom>
          <Button
            className="text-muted-foreground hover:text-foreground"
            size="sm"
            type="button"
            variant="ghost"
          >
            <FolderIcon aria-hidden="true" className="size-4" />
            viajuntos
          </Button>
          <Button
            className="text-muted-foreground hover:text-foreground"
            size="sm"
            type="button"
            variant="ghost"
          >
            <MonitorIcon aria-hidden="true" className="size-4" />
            Local
          </Button>
          <Button
            className="text-muted-foreground hover:text-foreground"
            size="sm"
            type="button"
            variant="ghost"
          >
            <GitBranchIcon aria-hidden="true" className="size-4" />
            main
          </Button>
          <div className="ms-auto">
            <Context
              maxTokens={128_000}
              positioning={{ placement: "top-end" }}
              usedTokens={18_420}
            >
              <ContextTrigger aria-label="Context usage" size="icon-sm">
                <ContextIcon />
              </ContextTrigger>
              <ContextContent>
                <ContextHeader>
                  <ContextTitle showCloseButton>Context Usage</ContextTitle>
                  <ContextMeter />
                </ContextHeader>
                <ContextBody>
                  {contextUsage.map((usage) => (
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

const models = [
  { label: "5.6 Terra", value: "terra-5.6" },
  { label: "Claude Sonnet 4", value: "claude-sonnet-4" },
  { label: "GPT-5.2", value: "gpt-5.2" },
];

const efforts = [
  { label: "Low", value: "low" },
  { label: "Medium", value: "medium" },
  { label: "High", value: "high" },
  { label: "Extra high", value: "extra-high" },
];

const accessLevels = [
  {
    description: "Read, write, and run commands.",
    label: "Full access",
    value: "full",
  },
  {
    description: "Request approval before taking action.",
    label: "Ask first",
    value: "ask",
  },
  {
    description: "View files without making changes.",
    label: "Read only",
    value: "read",
  },
];

const effortCollection = createListCollection({ items: efforts });
const accessCollection = createListCollection({ items: accessLevels });

const actionItems = [
  {
    group: "context",
    icon: <PaperclipIcon aria-hidden="true" />,
    label: "Attach files and folders",
    value: "files",
  },
  {
    group: "context",
    icon: <ImagePlusIcon aria-hidden="true" />,
    label: "Add image or screenshot",
    value: "image",
  },
  {
    group: "context",
    icon: <GlobeIcon aria-hidden="true" />,
    label: "Add web page",
    value: "web-page",
  },
  {
    group: "context",
    icon: <FileTextIcon aria-hidden="true" />,
    label: "Add project instructions",
    value: "instructions",
  },
  {
    group: "agent",
    icon: <ListTodoIcon aria-hidden="true" />,
    label: "Plan implementation",
    value: "plan",
  },
  {
    group: "agent",
    icon: <CircleHelpIcon aria-hidden="true" />,
    label: "Ask a question",
    value: "ask",
  },
];

const contextUsage = [
  { title: "Input", value: 4200 },
  { title: "Output", value: 860 },
  { title: "Reasoning", value: 640 },
  { title: "Cache", value: 1200 },
];

export default PromptInputDemo;
