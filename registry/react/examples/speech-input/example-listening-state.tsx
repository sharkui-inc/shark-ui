"use client";

import { useCallback, useState } from "react";
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

  const handleListeningChange = useCallback((listening: boolean) => {
    setIsListening(listening);
  }, []);
  const handleSpeechInputError = useCallback((error: { message: string }) => {
    toast.error({
      description: error.message,
      title: "Voice input unavailable",
    });
  }, []);

  return (
    <div className="flex w-full max-w-md flex-col items-center gap-3">
      <SpeechInput
        onError={handleSpeechInputError}
        onListeningChange={handleListeningChange}
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
