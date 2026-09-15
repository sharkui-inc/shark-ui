"use client";

import { usePreviewLocale } from "@/hooks/use-preview-locale";
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
  const { locale } = usePreviewLocale();

  const { values } = translations[locale];

  return (
    <SpeechInput
      onError={({ message }) =>
        toast.error({
          description: message,
          title: values.errorTitle,
        })
      }
    >
      <SpeechInputTrigger aria-label={values.triggerLabel} />
      <SpeechInputContent>
        <SpeechInputWaveform />
        <SpeechInputTimer />
        <SpeechInputStop aria-label={values.stopLabel} />
        <SpeechInputClose aria-label={values.closeLabel} />
        <SpeechInputAccept aria-label={values.acceptLabel} />
      </SpeechInputContent>
    </SpeechInput>
  );
};

const translations = {
  ar: {
    values: {
      acceptLabel: "قبول النسخ",
      closeLabel: "تجاهل التسجيل",
      errorTitle: "إدخال الصوت غير متاح",
      stopLabel: "إيقاف التسجيل",
      triggerLabel: "ابدأ إدخال الصوت",
    },
  },
  en: {
    values: {
      acceptLabel: "Accept transcription",
      closeLabel: "Discard recording",
      errorTitle: "Voice input unavailable",
      stopLabel: "Stop recording",
      triggerLabel: "Start voice input",
    },
  },
  he: {
    values: {
      acceptLabel: "קבל התמלול",
      closeLabel: "בטל הקלטה",
      errorTitle: "קלט קולי לא זמין",
      stopLabel: "עצור הקלטה",
      triggerLabel: "התחל קלט קולי",
    },
  },
};

export default Example;
