"use client";

import { useState } from "react";
import {
  SpeechInput,
  SpeechInputAccept,
  SpeechInputClose,
  SpeechInputContent,
  SpeechInputDeviceSelect,
  SpeechInputStop,
  SpeechInputTimer,
  SpeechInputTrigger,
  SpeechInputWaveform,
} from "@/registry/react/components/speech-input";
import { toast } from "@/registry/react/components/toast";

const Example = () => {
  const [transcript, setTranscript] = useState("");

  return (
    <div className="flex w-full max-w-md flex-col gap-3">
      <SpeechInput
        onError={(error) => {
          toast.error({
            description: error.message,
            title: "Voice input unavailable",
          });
        }}
        onTranscriptionChange={(text) => {
          setTranscript((current) => (current ? `${current} ${text}` : text));
        }}
      >
        <div className="flex items-center gap-2">
          <SpeechInputDeviceSelect className="flex-1" />
          <SpeechInputTrigger />
        </div>
        <SpeechInputContent>
          <SpeechInputWaveform />
          <SpeechInputTimer />
          <SpeechInputStop />
          <SpeechInputClose />
          <SpeechInputAccept />
        </SpeechInputContent>
      </SpeechInput>
      <p className="min-h-10 rounded-lg border bg-muted/40 px-3 py-2 text-muted-foreground text-sm">
        {transcript || "Choose a microphone, then record your message."}
      </p>
    </div>
  );
};

export default Example;
