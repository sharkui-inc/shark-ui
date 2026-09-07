"use client";

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

const Example = () => (
  <SpeechInput
    className="flex w-full max-w-md flex-col gap-3"
    onError={(error) =>
      toast.error({
        description: error.message,
        title: "Voice input unavailable",
      })
    }
  >
    <SpeechInputTrigger size="sm">Record a note</SpeechInputTrigger>
    <SpeechInputContent>
      <SpeechInputWaveform />
      <SpeechInputTimer />
      <SpeechInputStop size="sm">Stop</SpeechInputStop>
      <SpeechInputClose size="sm">Discard</SpeechInputClose>
      <SpeechInputAccept size="sm" variant="default">
        Use text
      </SpeechInputAccept>
    </SpeechInputContent>
  </SpeechInput>
);

export default Example;
