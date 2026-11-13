"use client";

import {
  type DemoPlaybackStep,
  useDemoPlayback,
} from "@/hooks/use-demo-playback";

export type PlaybackStep =
  | { text: string; type: "draft" | "send" | "reply" }
  | { type: "delivered" | "typing" | "suggestions" };

const EXCHANGE = [
  "Should we queue the follow-ups after this fix?",
  "Yes. Once you send the next prompt, I'll park the regression work in the queue.",
] as const;

const DRAFT_CHUNK = 4;
const DRAFT_DELAY_MS = 110;

const STEPS: DemoPlaybackStep<PlaybackStep>[] = (() => {
  const [message, reply] = EXCHANGE;
  const letters = Array.from(message);
  const drafts: DemoPlaybackStep<PlaybackStep>[] = [];

  for (
    let end = Math.min(DRAFT_CHUNK, letters.length);
    ;
    end = Math.min(end + DRAFT_CHUNK, letters.length)
  ) {
    drafts.push({
      delay: drafts.length === 0 ? 1600 : DRAFT_DELAY_MS,
      event: {
        text: letters.slice(0, end).join(""),
        type: "draft",
      },
    });

    if (end === letters.length) {
      break;
    }
  }

  return [
    ...drafts,
    { delay: 650, event: { text: message, type: "send" } },
    { delay: 500, event: { type: "delivered" } },
    { delay: 600, event: { type: "typing" } },
    { delay: 1500, event: { text: reply, type: "reply" } },
    { delay: 800, event: { type: "suggestions" } },
  ];
})();

export const useChatPreviewPlayback = (
  onStep: (step: PlaybackStep) => void
) => {
  const playback = useDemoPlayback({
    loop: false,
    onStep,
    shouldPause: (event) => event.type === "suggestions",
    steps: STEPS,
  });

  return {
    active: playback.active,
    ref: playback.ref,
    stop: playback.stop,
    waiting: playback.waiting,
  };
};
