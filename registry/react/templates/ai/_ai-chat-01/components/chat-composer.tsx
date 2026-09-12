"use client";

import { useFilter, useListCollection } from "@ark-ui/react";
import { BrainIcon, PaperclipIcon, SparklesIcon } from "lucide-react";
import { useState } from "react";
import {
  Announcement,
  AnnouncementTitle,
} from "@/registry/react/components/announcement";
import { Button } from "@/registry/react/components/button";
import {
  FileUpload,
  FileUploadTrigger,
} from "@/registry/react/components/file-upload";
import {
  ModelSelector,
  ModelSelectorContent,
  ModelSelectorEmpty,
  ModelSelectorGroup,
  ModelSelectorInput,
  ModelSelectorItem,
  ModelSelectorLabel,
  ModelSelectorList,
  ModelSelectorTrigger,
} from "@/registry/react/components/model-selector";
import {
  PromptInput,
  PromptInputButton,
  PromptInputFooter,
  type PromptInputStatus,
  PromptInputSubmit,
  PromptInputTextarea,
  PromptInputTools,
} from "@/registry/react/components/prompt-input";
import {
  SpeechInput,
  SpeechInputAccept,
  SpeechInputClose,
  SpeechInputContent,
  SpeechInputStop,
  SpeechInputTimer,
  SpeechInputTrigger,
  SpeechInputWaveform,
} from "@/registry/react/components/speech-input";
import { Toggle } from "@/registry/react/components/toggle";

interface ModelOption {
  group: string;
  label: string;
  value: string;
}

interface ChatComposerProps {
  model: string;
  modelOptions: readonly ModelOption[];
  onModelChange: (value: string) => void;
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
  const [draft, setDraft] = useState("");
  const [status, setStatus] = useState<PromptInputStatus>("ready");

  const selectedModel =
    modelOptions.find((option) => option.value === model) ?? modelOptions[0];

  const { contains } = useFilter({ sensitivity: "base" });
  const { collection, filter } = useListCollection({
    filter: contains,
    groupBy: (item) => item.group,
    groupSort: ["Models", "Agents"],
    initialItems: [...modelOptions],
  });

  return (
    <div className="mx-auto flex w-full max-w-3xl flex-col items-center gap-3">
      <div className="w-full rounded-2xl bg-muted/50 p-0.5">
        <Announcement className="w-full rounded-t-[15px] border-0 bg-transparent px-3 py-2 shadow-none">
          <SparklesIcon aria-hidden="true" className="text-muted-foreground" />
          <AnnouncementTitle className="text-muted-foreground text-xs">
            Access premium models & features
          </AnnouncementTitle>
          <span aria-hidden="true" className="text-muted-foreground/60 text-xs">
            ·
          </span>
          <Button className="h-auto px-0 text-xs" variant="link">
            Upgrade
          </Button>
        </Announcement>

        <FileUpload accept="image/*,.pdf,.txt" className="gap-0" maxFiles={4}>
          <PromptInput
            className="rounded-[15px] border-0 bg-card shadow-xs"
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
                <ModelSelector
                  collection={collection}
                  onInputValueChange={({ inputValue }) => filter(inputValue)}
                  onValueChange={({ value }) => onModelChange(value[0] ?? "")}
                  value={[model]}
                >
                  <ModelSelectorTrigger size="xs" variant="ghost">
                    {selectedModel?.label ?? "Model"}
                  </ModelSelectorTrigger>
                  <ModelSelectorContent>
                    <ModelSelectorInput placeholder="Search models" />
                    <ModelSelectorList>
                      <ModelSelectorEmpty />
                      {collection.group().map(([group, items]) => (
                        <ModelSelectorGroup key={group}>
                          <ModelSelectorLabel>{group}</ModelSelectorLabel>
                          {items.map((item) => (
                            <ModelSelectorItem item={item} key={item.value}>
                              {item.label}
                            </ModelSelectorItem>
                          ))}
                        </ModelSelectorGroup>
                      ))}
                    </ModelSelectorList>
                  </ModelSelectorContent>
                </ModelSelector>
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
                <SpeechInput
                  onTranscriptionChange={(text) => {
                    setDraft((current) =>
                      current ? `${current} ${text}` : text
                    );
                  }}
                >
                  <SpeechInputTrigger />
                  <SpeechInputContent>
                    <SpeechInputWaveform />
                    <SpeechInputTimer />
                    <SpeechInputStop />
                    <SpeechInputClose />
                    <SpeechInputAccept />
                  </SpeechInputContent>
                </SpeechInput>
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
