"use client";

import { useState } from "react";
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
import { toast } from "@/registry/react/components/toast";

const Example = () => {
  const [isListening, setIsListening] = useState(false);

  return (
    <div className="flex w-full max-w-md flex-col items-center gap-3">
      <SpeechInput
        onError={({ message }) => {
          toast.error({
            description: message,
            title: "Voice input unavailable",
          });
        }}
        onListeningChange={setIsListening}
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
      <p className="text-muted-foreground text-sm" role="status">
        {isListening ? "Listening to your microphone." : "Ready to record."}
      </p>
    </div>
  );
};

export default Example;
