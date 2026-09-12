"use client";

import { useEffect, useRef, useState } from "react";
import { toast } from "@/components/examples/example-toast";
import {
  PromptInput,
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

export const SpeechInputExample = () => {
  const [value, setValue] = useState("");
  const [status, setStatus] = useState<PromptInputStatus>("ready");
  const timeoutRef = useRef(0);

  useEffect(
    () => () => {
      window.clearTimeout(timeoutRef.current);
    },
    []
  );

  return (
    <PromptInput
      className="w-full"
      onStop={() => {
        window.clearTimeout(timeoutRef.current);
        setStatus("ready");
      }}
      onSubmit={({ text }) => {
        setStatus("streaming");
        window.clearTimeout(timeoutRef.current);
        timeoutRef.current = window.setTimeout(() => {
          setStatus("ready");
          setValue("");
          toast.success({
            description: text,
            title: "Prompt sent",
          });
        }, 700);
      }}
      status={status}
    >
      <PromptInputTextarea
        aria-label="Prompt"
        onChange={(event) => setValue(event.target.value)}
        placeholder="Ask anything…"
        value={value}
      />
      <PromptInputFooter>
        <PromptInputTools>
          <SpeechInput
            onError={({ message }) =>
              toast.error({
                description: message,
                title: "Voice input unavailable",
              })
            }
            onTranscriptionChange={setValue}
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
  );
};
