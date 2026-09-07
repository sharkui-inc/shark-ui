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
    lang="pt-BR"
    onError={({ message }) =>
      toast.error({
        description: message,
        title: "Entrada de voz indisponível",
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

export default Example;
