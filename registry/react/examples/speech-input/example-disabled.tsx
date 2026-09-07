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

const Example = () => (
  <SpeechInput disabled>
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
