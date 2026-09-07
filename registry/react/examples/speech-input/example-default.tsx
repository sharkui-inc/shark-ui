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

const SpeechInputDemo = () => (
  <SpeechInput
    onError={({ message }) =>
      toast.error({
        description: message,
        title: "Voice input unavailable",
      })
    }
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
);

export default SpeechInputDemo;
