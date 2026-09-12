"use client";

import { ark } from "@ark-ui/react/factory";
import { createContext } from "@ark-ui/react/utils";
import { CheckIcon, MicIcon, SquareIcon, XIcon } from "lucide-react";
import React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/registry/react/components/button";
import {
  NativeSelect,
  NativeSelectOption,
} from "@/registry/react/components/native-select";

const waveformBarCount = 48;
const waveformBarIds = Array.from(
  { length: waveformBarCount },
  (_, index) => `waveform-${index}`
);

interface WaveformLevel {
  id: string;
  level: number;
}

export type SpeechInputState =
  | "idle"
  | "recording"
  | "review"
  | "transcribing"
  | "unavailable"
  | "error";

export type SpeechInputErrorReason =
  | "audio-capture"
  | "permission"
  | "recognition"
  | "unavailable";

export interface SpeechInputError {
  message: string;
  reason: SpeechInputErrorReason;
}

export interface SpeechInputTranscriptionRequest {
  audio: Blob;
  duration: number;
  lang: string;
}

interface SpeechRecognitionAlternativeLike {
  transcript: string;
}

interface SpeechRecognitionResultLike {
  isFinal: boolean;
  [alternativeIndex: number]: SpeechRecognitionAlternativeLike;
}

interface SpeechRecognitionEventLike {
  resultIndex: number;
  results: {
    length: number;
    [resultIndex: number]: SpeechRecognitionResultLike;
  };
}

interface SpeechRecognitionLike {
  continuous: boolean;
  interimResults: boolean;
  lang: string;
  onend: ((event: Event) => void) | null;
  onerror: ((event: Event) => void) | null;
  onresult: ((event: SpeechRecognitionEventLike) => void) | null;
  start: () => void;
  stop: () => void;
}

type AudioContextConstructor = new () => AudioContext;

const getSpeechRecognition = ():
  | (new () => SpeechRecognitionLike)
  | undefined => {
  if (typeof window === "undefined") {
    return;
  }

  const speechWindow = window as Window & {
    SpeechRecognition?: new () => SpeechRecognitionLike;
    webkitSpeechRecognition?: new () => SpeechRecognitionLike;
  };

  return speechWindow.SpeechRecognition ?? speechWindow.webkitSpeechRecognition;
};

const getAudioContext = (): AudioContextConstructor | undefined => {
  if (typeof window === "undefined") {
    return;
  }

  const audioWindow = window as Window & {
    webkitAudioContext?: AudioContextConstructor;
  };

  return window.AudioContext ?? audioWindow.webkitAudioContext;
};

const supportsAudioCapture = () => {
  if (typeof window === "undefined") {
    return false;
  }

  return Boolean(
    navigator.mediaDevices?.getUserMedia &&
      typeof MediaRecorder !== "undefined" &&
      getAudioContext()
  );
};

const createWaveformLevels = () =>
  waveformBarIds.map((id) => ({ id, level: 12 }));

const formatDuration = (duration: number) => {
  const totalSeconds = Math.floor(duration / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  return `${minutes}:${seconds.toString().padStart(2, "0")}`;
};

const stopTracks = (stream: MediaStream | null) => {
  if (!stream) {
    return;
  }

  for (const track of stream.getTracks()) {
    track.stop();
  }
};

const stopMediaRecorder = (mediaRecorder: MediaRecorder | null) => {
  if (!mediaRecorder || mediaRecorder.state === "inactive") {
    return;
  }

  mediaRecorder.onerror = null;
  try {
    mediaRecorder.stop();
  } catch {
    // The recorder may already be stopping after a device error.
  }
};

const stopMediaRecorderAndCollect = async (
  mediaRecorder: MediaRecorder | null
) => {
  if (!mediaRecorder || mediaRecorder.state === "inactive") {
    return;
  }

  mediaRecorder.onerror = null;
  await new Promise<void>((resolve) => {
    mediaRecorder.addEventListener("stop", resolve, { once: true });
    try {
      mediaRecorder.stop();
    } catch {
      resolve();
    }
  });
};

const closeAudioContext = (audioContext: AudioContext | null) => {
  if (!audioContext || audioContext.state === "closed") {
    return;
  }

  audioContext.close().catch(() => undefined);
};

const stopSpeechRecognition = (recognition: SpeechRecognitionLike | null) => {
  if (!recognition) {
    return;
  }

  recognition.onend = null;
  recognition.onerror = null;
  recognition.onresult = null;
  try {
    recognition.stop();
  } catch {
    // The recognizer may have ended before its event reached React.
  }
};

const getWaveformLevels = (analyser: AnalyserNode | null) => {
  if (!analyser) {
    return;
  }

  const samples = new Uint8Array(analyser.frequencyBinCount);
  analyser.getByteFrequencyData(samples);

  return waveformBarIds.map((id, index) => {
    const start = Math.floor((index * samples.length) / waveformBarCount);
    const end = Math.max(
      start + 1,
      Math.floor(((index + 1) * samples.length) / waveformBarCount)
    );
    let total = 0;
    for (let sampleIndex = start; sampleIndex < end; sampleIndex += 1) {
      total += samples[sampleIndex] ?? 0;
    }
    const average = total / (end - start);

    return {
      id,
      level: Math.max(12, Math.min(100, Math.round((average / 255) * 100))),
    };
  });
};

interface SpeechInputContextValue {
  accept: () => void;
  audioDevices: MediaDeviceInfo[];
  close: () => void;
  deviceId: string;
  disabled: boolean;
  duration: number;
  hasTranscript: boolean;
  isStarting: boolean;
  message: string | undefined;
  setDeviceId: (deviceId: string) => void;
  start: () => void;
  state: SpeechInputState;
  stop: () => Promise<void>;
  waveformLevels: WaveformLevel[];
}

const [SpeechInputProvider, useSpeechInput] =
  createContext<SpeechInputContextValue>({
    name: "SpeechInputContext",
    providerName: "SpeechInput",
  });

export interface SpeechInputProps extends React.ComponentProps<typeof ark.div> {
  /** Prevent starting a recording. */
  disabled?: boolean;
  /** Language tag sent to the browser speech recognizer. */
  lang?: string;
  /** Called when browser support, permission, capture, or recognition fails. */
  onError?: (error: SpeechInputError) => void;
  /** Called whenever microphone capture starts or ends. */
  onListeningChange?: (listening: boolean) => void;
  /**
   * Transcribes a locally captured recording when browser speech recognition
   * is unavailable. Keep provider credentials in the server implementation.
   */
  onTranscribe?: (request: SpeechInputTranscriptionRequest) => Promise<string>;
  /** Called with the captured text only after SpeechInputAccept is selected. */
  onTranscriptionChange?: (text: string) => void;
}

export const SpeechInput = (props: SpeechInputProps) => {
  const {
    children,
    className,
    disabled = false,
    lang = "en-US",
    onError,
    onListeningChange,
    onTranscribe,
    onTranscriptionChange,
    ...rest
  } = props;

  const [state, setState] = React.useState<SpeechInputState>("idle");
  const [isStarting, setIsStarting] = React.useState(false);
  const [duration, setDuration] = React.useState(0);
  const [audioDevices, setAudioDevices] = React.useState<MediaDeviceInfo[]>([]);
  const [deviceId, setDeviceId] = React.useState("");
  const [hasTranscript, setHasTranscript] = React.useState(false);
  const [usesNativeTranscription, setUsesNativeTranscription] =
    React.useState(false);
  const [message, setMessage] = React.useState<string>();
  const [waveformLevels, setWaveformLevels] =
    React.useState(createWaveformLevels);
  const analyserRef = React.useRef<AnalyserNode | null>(null);
  const audioContextRef = React.useRef<AudioContext | null>(null);
  const audioChunksRef = React.useRef<Blob[]>([]);
  const mediaRecorderRef = React.useRef<MediaRecorder | null>(null);
  const recordingMimeTypeRef = React.useRef("");
  const recognitionRef = React.useRef<SpeechRecognitionLike | null>(null);
  const requestIdRef = React.useRef(0);
  const sourceRef = React.useRef<MediaStreamAudioSourceNode | null>(null);
  const startedAtRef = React.useRef(0);
  const streamRef = React.useRef<MediaStream | null>(null);
  const timerRef = React.useRef<number | null>(null);
  const waveformFrameRef = React.useRef<number | null>(null);
  const listeningRef = React.useRef(false);
  const transcriptPartsRef = React.useRef<string[]>([]);
  const interimTranscriptRef = React.useRef("");

  const setListening = React.useCallback(
    (next: boolean) => {
      if (listeningRef.current === next) {
        return;
      }

      listeningRef.current = next;
      onListeningChange?.(next);
    },
    [onListeningChange]
  );

  const refreshAudioDevices = React.useCallback(() => {
    if (
      typeof navigator === "undefined" ||
      !navigator.mediaDevices?.enumerateDevices
    ) {
      return;
    }

    navigator.mediaDevices
      .enumerateDevices()
      .then((devices) => {
        const inputs = devices.filter((device) => device.kind === "audioinput");
        setAudioDevices(inputs);
        setDeviceId((current) =>
          current && !inputs.some((device) => device.deviceId === current)
            ? ""
            : current
        );
      })
      .catch(() => setAudioDevices([]));
  }, []);

  const stopTimer = React.useCallback(() => {
    if (timerRef.current !== null) {
      window.clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  const stopWaveform = React.useCallback(() => {
    if (waveformFrameRef.current !== null) {
      cancelAnimationFrame(waveformFrameRef.current);
      waveformFrameRef.current = null;
    }
  }, []);

  const releaseAudioResources = React.useCallback(() => {
    stopTimer();
    stopWaveform();

    stopTracks(streamRef.current);
    streamRef.current = null;

    sourceRef.current?.disconnect();
    sourceRef.current = null;
    analyserRef.current = null;

    const audioContext = audioContextRef.current;
    audioContextRef.current = null;
    closeAudioContext(audioContext);
  }, [stopTimer, stopWaveform]);

  const releaseAudioCapture = React.useCallback(() => {
    const mediaRecorder = mediaRecorderRef.current;
    mediaRecorderRef.current = null;
    stopMediaRecorder(mediaRecorder);
    releaseAudioResources();
  }, [releaseAudioResources]);

  const finalizeAudioCapture = React.useCallback(async () => {
    const mediaRecorder = mediaRecorderRef.current;
    mediaRecorderRef.current = null;
    await stopMediaRecorderAndCollect(mediaRecorder);
    releaseAudioResources();

    return new Blob(audioChunksRef.current, {
      type: recordingMimeTypeRef.current,
    });
  }, [releaseAudioResources]);

  const stopRecognition = React.useCallback(() => {
    const recognition = recognitionRef.current;
    recognitionRef.current = null;
    stopSpeechRecognition(recognition);
  }, []);

  const clearRecording = React.useCallback(() => {
    requestIdRef.current += 1;
    stopRecognition();
    releaseAudioCapture();
    startedAtRef.current = 0;
    transcriptPartsRef.current = [];
    interimTranscriptRef.current = "";
    audioChunksRef.current = [];
    recordingMimeTypeRef.current = "";
    setUsesNativeTranscription(false);
    setDuration(0);
    setHasTranscript(false);
    setWaveformLevels(createWaveformLevels());
    setListening(false);
  }, [releaseAudioCapture, setListening, stopRecognition]);

  const getTranscript = React.useCallback(
    () =>
      [...transcriptPartsRef.current, interimTranscriptRef.current]
        .join(" ")
        .replace(/\s+/g, " ")
        .trim(),
    []
  );

  const reportError = React.useCallback(
    (reason: SpeechInputErrorReason, nextMessage: string) => {
      setMessage(nextMessage);
      onError?.({ message: nextMessage, reason });
    },
    [onError]
  );

  const failRecording = React.useCallback(
    (reason: SpeechInputErrorReason, nextMessage: string) => {
      clearRecording();
      setIsStarting(false);
      reportError(reason, nextMessage);
      setState("error");
    },
    [clearRecording, reportError]
  );

  const stop = React.useCallback(async () => {
    if (state !== "recording") {
      return;
    }

    const elapsed = Math.max(0, Date.now() - startedAtRef.current);
    const recordingId = requestIdRef.current;
    setState("transcribing");
    setMessage("Transcribing recording.");
    stopRecognition();
    const audio = await finalizeAudioCapture();
    if (requestIdRef.current !== recordingId) {
      return;
    }

    setDuration(elapsed);
    setListening(false);

    if (usesNativeTranscription) {
      setMessage(undefined);
      setState("review");
      return;
    }

    if (!onTranscribe) {
      failRecording(
        "unavailable",
        "Speech transcription is not available in this browser."
      );
      return;
    }

    try {
      const text = await onTranscribe({ audio, duration: elapsed, lang });
      if (requestIdRef.current !== recordingId) {
        return;
      }

      interimTranscriptRef.current = text.trim();
      setHasTranscript(Boolean(interimTranscriptRef.current));
      setMessage(undefined);
      setState("review");
    } catch {
      if (requestIdRef.current === recordingId) {
        failRecording(
          "recognition",
          "Speech transcription could not complete."
        );
      }
    }
  }, [
    failRecording,
    finalizeAudioCapture,
    lang,
    onTranscribe,
    setListening,
    state,
    stopRecognition,
    usesNativeTranscription,
  ]);

  const close = React.useCallback(() => {
    clearRecording();
    setIsStarting(false);
    setMessage(undefined);
    setState("idle");
  }, [clearRecording]);

  const accept = React.useCallback(() => {
    if (state !== "review") {
      return;
    }

    const transcript = getTranscript();
    if (transcript) {
      onTranscriptionChange?.(transcript);
    }
    close();
  }, [close, getTranscript, onTranscriptionChange, state]);

  const updateWaveform = React.useCallback(() => {
    const nextLevels = getWaveformLevels(analyserRef.current);
    if (!nextLevels) {
      return;
    }

    setWaveformLevels(nextLevels);
    waveformFrameRef.current = requestAnimationFrame(updateWaveform);
  }, []);

  const start = React.useCallback(async () => {
    if (disabled || isStarting || state === "recording") {
      return;
    }

    if (!supportsAudioCapture()) {
      reportError(
        "unavailable",
        "Speech input is not available in this browser."
      );
      setState("unavailable");
      return;
    }

    const requestId = requestIdRef.current + 1;
    requestIdRef.current = requestId;
    setIsStarting(true);
    setMessage(undefined);

    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: deviceId ? { deviceId: { exact: deviceId } } : true,
      });
      if (requestIdRef.current !== requestId) {
        stopTracks(stream);
        return;
      }

      const AudioContext = getAudioContext();
      const SpeechRecognition = getSpeechRecognition();
      if (!(AudioContext && (SpeechRecognition || onTranscribe))) {
        stopTracks(stream);
        setIsStarting(false);
        reportError(
          "unavailable",
          "Speech transcription is not available in this browser."
        );
        setState("unavailable");
        return;
      }

      streamRef.current = stream;
      refreshAudioDevices();
      const audioContext = new AudioContext();
      audioContextRef.current = audioContext;
      const analyser = audioContext.createAnalyser();
      analyser.fftSize = 128;
      analyserRef.current = analyser;
      const source = audioContext.createMediaStreamSource(stream);
      sourceRef.current = source;
      source.connect(analyser);

      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;
      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          audioChunksRef.current.push(event.data);
        }
      };
      mediaRecorder.onerror = () => {
        failRecording("audio-capture", "Audio capture stopped unexpectedly.");
      };
      if (SpeechRecognition) {
        const recognition = new SpeechRecognition();
        recognition.continuous = true;
        recognition.interimResults = true;
        recognition.lang = lang;
        recognition.onresult = (event) => {
          const finalParts: string[] = [];
          const interimParts: string[] = [];

          for (let index = 0; index < event.results.length; index += 1) {
            const result = event.results[index];
            const transcript = result?.[0]?.transcript?.trim();
            if (!transcript) {
              continue;
            }
            if (result.isFinal) {
              finalParts[index] = transcript;
            } else {
              interimParts.push(transcript);
            }
          }

          transcriptPartsRef.current = finalParts.filter(Boolean);
          interimTranscriptRef.current = interimParts.join(" ");
          setHasTranscript(Boolean(getTranscript()));
        };
        recognition.onerror = () => {
          failRecording(
            "recognition",
            "Speech recognition could not transcribe this recording."
          );
        };
        recognition.onend = () => {
          failRecording(
            "recognition",
            "Speech recognition stopped unexpectedly."
          );
        };

        recognitionRef.current = recognition;
        setUsesNativeTranscription(true);
      } else {
        setUsesNativeTranscription(false);
      }
      transcriptPartsRef.current = [];
      interimTranscriptRef.current = "";
      audioChunksRef.current = [];
      recordingMimeTypeRef.current = mediaRecorder.mimeType;
      setDuration(0);
      setHasTranscript(false);
      setWaveformLevels(createWaveformLevels());

      mediaRecorder.start();
      recognitionRef.current?.start();
      startedAtRef.current = Date.now();
      timerRef.current = window.setInterval(() => {
        setDuration(Date.now() - startedAtRef.current);
      }, 250);
      waveformFrameRef.current = requestAnimationFrame(updateWaveform);
      setIsStarting(false);
      setState("recording");
      setListening(true);
    } catch {
      if (requestIdRef.current === requestId) {
        failRecording(
          "permission",
          "Microphone access was not available for speech input."
        );
      }
    }
  }, [
    disabled,
    deviceId,
    failRecording,
    getTranscript,
    isStarting,
    lang,
    onTranscribe,
    refreshAudioDevices,
    reportError,
    setListening,
    state,
    updateWaveform,
  ]);

  React.useEffect(() => {
    if (typeof navigator === "undefined" || !navigator.mediaDevices) {
      return;
    }

    refreshAudioDevices();
    navigator.mediaDevices.addEventListener?.(
      "devicechange",
      refreshAudioDevices
    );

    return () => {
      navigator.mediaDevices.removeEventListener?.(
        "devicechange",
        refreshAudioDevices
      );
    };
  }, [refreshAudioDevices]);

  React.useEffect(
    () => () => {
      requestIdRef.current += 1;
      stopRecognition();
      releaseAudioCapture();
    },
    [releaseAudioCapture, stopRecognition]
  );

  const context = React.useMemo(
    () => ({
      accept,
      audioDevices,
      close,
      deviceId,
      disabled,
      duration,
      hasTranscript,
      isStarting,
      message,
      setDeviceId,
      start,
      state,
      stop,
      waveformLevels,
    }),
    [
      accept,
      audioDevices,
      close,
      deviceId,
      disabled,
      duration,
      hasTranscript,
      isStarting,
      message,
      start,
      state,
      stop,
      waveformLevels,
    ]
  );

  return (
    <SpeechInputProvider value={context}>
      <ark.div
        className={cn("contents", className)}
        data-slot="speech-input"
        data-state={state}
        {...rest}
      >
        {children}
        <span aria-live="polite" className="sr-only" role="status">
          {message}
        </span>
      </ark.div>
    </SpeechInputProvider>
  );
};

export interface SpeechInputTriggerProps
  extends Omit<React.ComponentProps<typeof Button>, "onClick" | "type"> {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const SpeechInputTrigger = (props: SpeechInputTriggerProps) => {
  const {
    "aria-label": ariaLabel,
    children,
    className,
    disabled,
    onClick,
    ...rest
  } = props;
  const { disabled: rootDisabled, isStarting, start, state } = useSpeechInput();
  const unavailable = state === "unavailable" || state === "error";

  if (state === "recording" || state === "review" || state === "transcribing") {
    return null;
  }

  return (
    <Button
      aria-label={
        ariaLabel ??
        (unavailable ? "Speech input unavailable" : "Start voice input")
      }
      className={className}
      data-slot="speech-input-trigger"
      disabled={disabled || rootDisabled || unavailable || isStarting}
      isLoading={isStarting}
      onClick={(event) => {
        onClick?.(event);
        if (!event.defaultPrevented) {
          start().catch(() => undefined);
        }
      }}
      size="icon-sm"
      variant="ghost"
      {...rest}
    >
      {children ?? <MicIcon aria-hidden="true" />}
    </Button>
  );
};

export interface SpeechInputDeviceSelectProps
  extends Omit<
    React.ComponentProps<typeof NativeSelect>,
    "onChange" | "value"
  > {
  onChange?: React.ChangeEventHandler<HTMLSelectElement>;
}

export const SpeechInputDeviceSelect = (
  props: SpeechInputDeviceSelectProps
) => {
  const {
    "aria-label": ariaLabel,
    className,
    disabled,
    onChange,
    ...rest
  } = props;
  const {
    audioDevices,
    deviceId,
    disabled: rootDisabled,
    isStarting,
    setDeviceId,
    state,
  } = useSpeechInput();
  const unavailable = state === "unavailable" || state === "error";

  if (state === "recording" || state === "review" || state === "transcribing") {
    return null;
  }

  return (
    <NativeSelect
      aria-label={ariaLabel ?? "Audio input"}
      className={cn("w-48", className)}
      data-slot="speech-input-device-select"
      disabled={disabled || rootDisabled || unavailable || isStarting}
      onChange={(event) => {
        onChange?.(event);
        if (!event.defaultPrevented) {
          setDeviceId(event.currentTarget.value);
        }
      }}
      size="sm"
      value={deviceId}
      {...rest}
    >
      <NativeSelectOption value="">Default microphone</NativeSelectOption>
      {audioDevices.map((device, index) => (
        <NativeSelectOption key={device.deviceId} value={device.deviceId}>
          {device.label || `Microphone ${index + 1}`}
        </NativeSelectOption>
      ))}
    </NativeSelect>
  );
};

export const SpeechInputContent = (
  props: React.ComponentProps<typeof ark.div>
) => {
  const { children, className, ...rest } = props;
  const { state } = useSpeechInput();

  if (state !== "recording" && state !== "review" && state !== "transcribing") {
    return null;
  }

  return (
    <ark.div
      className={cn(
        "flex w-full min-w-0 items-center gap-3 rounded-2xl border bg-card px-3 py-2 text-card-foreground shadow-xs/5",
        className
      )}
      data-slot="speech-input-content"
      data-state={state}
      {...rest}
    >
      {children}
    </ark.div>
  );
};

export const SpeechInputWaveform = (
  props: React.ComponentProps<typeof ark.div>
) => {
  const { className, ...rest } = props;
  const { waveformLevels } = useSpeechInput();

  return (
    <ark.div
      aria-label="Audio waveform"
      className={cn("flex h-8 min-w-0 flex-1 items-center gap-px", className)}
      data-slot="speech-input-waveform"
      role="img"
      {...rest}
    >
      {waveformLevels.map(({ id, level }) => (
        <span
          aria-hidden="true"
          className="min-w-px flex-1 rounded-full bg-muted-foreground/64 transition-[height] motion-reduce:transition-none"
          key={id}
          style={{ height: `${level}%` }}
        />
      ))}
    </ark.div>
  );
};

export const SpeechInputTimer = (
  props: React.ComponentProps<typeof ark.time>
) => {
  const { className, ...rest } = props;
  const { duration } = useSpeechInput();

  return (
    <ark.time
      className={cn("shrink-0 text-muted-foreground tabular-nums", className)}
      data-slot="speech-input-timer"
      dateTime={`PT${Math.floor(duration / 1000)}S`}
      {...rest}
    >
      {formatDuration(duration)}
    </ark.time>
  );
};

export interface SpeechInputStopProps
  extends Omit<React.ComponentProps<typeof Button>, "onClick" | "type"> {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const SpeechInputStop = (props: SpeechInputStopProps) => {
  const { "aria-label": ariaLabel, children, onClick, ...rest } = props;
  const { state, stop } = useSpeechInput();

  if (state !== "recording") {
    return null;
  }

  return (
    <Button
      aria-label={ariaLabel ?? "Stop recording"}
      data-slot="speech-input-stop"
      onClick={(event) => {
        onClick?.(event);
        if (!event.defaultPrevented) {
          stop().catch(() => undefined);
        }
      }}
      size="icon-sm"
      variant="ghost"
      {...rest}
    >
      {children ?? (
        <SquareIcon aria-hidden="true" className="size-3 fill-current" />
      )}
    </Button>
  );
};

export interface SpeechInputCloseProps
  extends Omit<React.ComponentProps<typeof Button>, "onClick" | "type"> {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const SpeechInputClose = (props: SpeechInputCloseProps) => {
  const { "aria-label": ariaLabel, children, onClick, ...rest } = props;
  const { close, state } = useSpeechInput();

  if (state !== "recording" && state !== "review" && state !== "transcribing") {
    return null;
  }

  return (
    <Button
      aria-label={ariaLabel ?? "Discard recording"}
      data-slot="speech-input-close"
      onClick={(event) => {
        onClick?.(event);
        if (!event.defaultPrevented) {
          close();
        }
      }}
      size="icon-sm"
      variant="ghost"
      {...rest}
    >
      {children ?? <XIcon aria-hidden="true" />}
    </Button>
  );
};

export interface SpeechInputAcceptProps
  extends Omit<React.ComponentProps<typeof Button>, "onClick" | "type"> {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const SpeechInputAccept = (props: SpeechInputAcceptProps) => {
  const {
    "aria-label": ariaLabel,
    children,
    disabled,
    onClick,
    ...rest
  } = props;
  const { accept, hasTranscript, state } = useSpeechInput();

  if (state !== "review") {
    return null;
  }

  return (
    <Button
      aria-label={ariaLabel ?? "Accept transcription"}
      data-slot="speech-input-accept"
      disabled={disabled || !hasTranscript}
      onClick={(event) => {
        onClick?.(event);
        if (!event.defaultPrevented) {
          accept();
        }
      }}
      size="icon-sm"
      variant="ghost"
      {...rest}
    >
      {children ?? <CheckIcon aria-hidden="true" />}
    </Button>
  );
};
