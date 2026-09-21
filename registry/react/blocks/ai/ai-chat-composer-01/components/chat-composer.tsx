"use client";

import { useFilter, useListCollection } from "@ark-ui/react";
import { Combobox as ArkCombobox } from "@ark-ui/react/combobox";
import {
  BrainIcon,
  CrownIcon,
  MicIcon,
  PaperclipIcon,
  SearchIcon,
} from "lucide-react";
import React from "react";
import {
  Announcement,
  AnnouncementTitle,
} from "@/registry/react/components/announcement";
import { Button } from "@/registry/react/components/button";
import {
  Combobox,
  ComboboxButtonTrigger,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxGroup,
  ComboboxGroupLabel,
  ComboboxItem,
  ComboboxList,
  useComboboxContext,
} from "@/registry/react/components/combobox";
import {
  FileUpload,
  FileUploadTrigger,
} from "@/registry/react/components/file-upload";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/registry/react/components/input-group";
import {
  PromptInput,
  PromptInputButton,
  PromptInputFooter,
  type PromptInputStatus,
  PromptInputSubmit,
  PromptInputTextarea,
  PromptInputTools,
} from "@/registry/react/components/prompt-input";
import { Toggle } from "@/registry/react/components/toggle";

interface ModelOption {
  group: string;
  label: string;
  value: string;
}

interface ChatComposerProps {
  model: string[];
  modelOptions: readonly ModelOption[];
  onModelChange: (value: string[]) => void;
  onSend: (content: string) => void;
  onThinkModeChange: (enabled: boolean) => void;
  thinkMode: boolean;
}

export const ChatComposer = ({
  model,
  modelOptions,
  onModelChange,
  onSend,
  onThinkModeChange,
  thinkMode,
}: ChatComposerProps) => {
  const [draft, setDraft] = React.useState("");
  const [status, setStatus] = React.useState<PromptInputStatus>("ready");

  const { contains } = useFilter({ sensitivity: "base" });
  const { collection, filter } = useListCollection({
    filter: contains,
    groupBy: (item) => item.group,
    groupSort: ["Models", "Agents"],
    initialItems: [...modelOptions],
  });

  return (
    <div className="mx-auto flex w-full max-w-3xl flex-col items-center gap-3">
      <div className="w-full rounded-2xl bg-muted/48 p-0.5">
        <Announcement className="w-full rounded-t-[15px] border-0 bg-transparent px-3 py-2 shadow-none">
          <CrownIcon aria-hidden="true" className="text-muted-foreground" />
          <AnnouncementTitle className="text-muted-foreground text-xs">
            Access premium models & features
          </AnnouncementTitle>
          <span aria-hidden="true" className="text-muted-foreground/64 text-xs">
            ·
          </span>
          <Button className="h-auto px-0 text-xs" variant="link">
            Upgrade
          </Button>
        </Announcement>

        <FileUpload accept="image/*,.pdf,.txt" className="gap-0" maxFiles={4}>
          <PromptInput
            className="rounded-[15px] border-0 bg-card shadow-xs/4"
            onStop={() => setStatus("ready")}
            onSubmit={({ text }) => {
              onSend(text);
              setDraft("");
              setStatus("streaming");
              window.setTimeout(() => setStatus("ready"), 900);
            }}
            status={status}
          >
            <PromptInputTextarea
              aria-label="Message"
              maxLength={2000}
              onChange={(event) => setDraft(event.target.value)}
              placeholder="How can I help you today?"
              rows={3}
              value={draft}
            />
            <PromptInputFooter>
              <PromptInputTools>
                <FileUploadTrigger asChild>
                  <PromptInputButton aria-label="Attach file" size="icon-xs">
                    <PaperclipIcon aria-hidden="true" />
                  </PromptInputButton>
                </FileUploadTrigger>
                <Combobox
                  collection={collection}
                  inputBehavior="autohighlight"
                  onInputValueChange={({ inputValue }) => filter(inputValue)}
                  onValueChange={({ value }) => onModelChange(value)}
                  positioning={{ placement: "top" }}
                  selectionBehavior="clear"
                  value={model}
                >
                  <ComboboxButtonTrigger
                    placeholder="Model"
                    showTrigger={false}
                    size="xs"
                    variant="ghost"
                  />
                  <ComboboxContent className="max-h-72 w-52">
                    <ComboboxSearch />
                    <ComboboxList>
                      <ComboboxEmpty>No models found.</ComboboxEmpty>
                      {collection.group().map(([group, items]) => (
                        <ComboboxGroup key={group}>
                          <ComboboxGroupLabel>{group}</ComboboxGroupLabel>
                          {items.map((item) => (
                            <ComboboxItem item={item} key={item.value}>
                              {item.label}
                            </ComboboxItem>
                          ))}
                        </ComboboxGroup>
                      ))}
                    </ComboboxList>
                  </ComboboxContent>
                </Combobox>
                <Toggle
                  asChild
                  onPressedChange={onThinkModeChange}
                  pressed={thinkMode}
                  size="sm"
                >
                  <PromptInputButton
                    aria-label="Think mode"
                    className="data-[state=on]:bg-accent data-[state=on]:text-accent-foreground"
                    size="xs"
                  >
                    <BrainIcon aria-hidden="true" />
                    Think
                  </PromptInputButton>
                </Toggle>
                <PromptInputButton aria-label="Voice input" size="icon-xs">
                  <MicIcon aria-hidden="true" />
                </PromptInputButton>
              </PromptInputTools>
              <PromptInputSubmit />
            </PromptInputFooter>
          </PromptInput>
        </FileUpload>
      </div>

      <p className="text-center text-muted-foreground text-xs">
        AI can make{" "}
        <span className="font-medium text-foreground">mistakes</span>. Please
        double-check.
      </p>
    </div>
  );
};

const ComboboxSearch = () => {
  const { setInputValue } = useComboboxContext();

  return (
    <InputGroup className="mb-2 rounded-xl bg-input/32" size="md">
      <ArkCombobox.Input asChild>
        <InputGroupInput
          aria-label="Search models"
          onBlur={(event) => {
            const { currentTarget, relatedTarget } = event;
            const contentId = currentTarget.getAttribute("aria-controls");
            const content = contentId
              ? currentTarget.ownerDocument.getElementById(contentId)
              : null;
            const isInsideContent =
              relatedTarget instanceof Node && content?.contains(relatedTarget);

            if (!isInsideContent) {
              setInputValue("");
            }
          }}
          placeholder="Search models"
        />
      </ArkCombobox.Input>
      <InputGroupAddon>
        <SearchIcon aria-hidden="true" className="opacity-64" />
      </InputGroupAddon>
    </InputGroup>
  );
};
