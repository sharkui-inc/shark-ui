"use client";

import React from "react";

export type DemoPlaybackStatus = "playing" | "waiting" | "complete" | "stopped";

export interface DemoPlaybackStep<TEvent> {
  delay: number;
  event: TEvent;
}

export interface UseDemoPlaybackOptions<TEvent> {
  /**
   * Restart from the first step after the sequence finishes.
   *
   * @default false
   */
  loop?: boolean;
  /**
   * Delay before restarting when `loop` is true.
   *
   * @default 1600
   */
  loopDelayMs?: number;
  /**
   * Called for each scheduled event.
   */
  onStep: (event: TEvent) => void;
  /**
   * Pause after applying this event (`status` becomes `"waiting"`).
   */
  shouldPause?: (event: TEvent) => boolean;
  /**
   * Ordered playback steps.
   */
  steps: readonly DemoPlaybackStep<TEvent>[];
  /**
   * IntersectionObserver threshold for local visibility.
   *
   * @default 0.5
   */
  threshold?: number;
}

export const useDemoPlayback = <TEvent>(
  options: UseDemoPlaybackOptions<TEvent>
) => {
  const {
    loop = false,
    loopDelayMs = 1600,
    onStep,
    shouldPause,
    steps,
    threshold = 0.5,
  } = options;

  const ref = React.useRef<HTMLElement>(null);
  const nextStep = React.useRef(0);
  const stopped = React.useRef(false as boolean);
  const [available, setAvailable] = React.useState(false);
  const [visible, setVisible] = React.useState(false);
  const [status, setStatus] = React.useState<DemoPlaybackStatus>("playing");
  const applyStep = React.useEffectEvent(onStep);
  const pauseAfter = React.useEffectEvent((event: TEvent) =>
    Boolean(shouldPause?.(event))
  );

  const reset = React.useEffectEvent(() => {
    stopped.current = false;
    nextStep.current = 0;
    setStatus("playing");
  });

  React.useEffect(() => {
    const element = ref.current;

    if (!element) {
      return;
    }

    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotion = () => setAvailable(!motion.matches);
    let inView = false;
    const updateVisibility = () => setVisible(inView && !document.hidden);
    const observer = new IntersectionObserver(
      ([entry]) => {
        inView = (entry?.intersectionRatio ?? 0) >= threshold;
        updateVisibility();
      },
      { threshold }
    );

    observer.observe(element);
    updateMotion();
    motion.addEventListener("change", updateMotion);
    document.addEventListener("visibilitychange", updateVisibility);

    return () => {
      observer.disconnect();
      motion.removeEventListener("change", updateMotion);
      document.removeEventListener("visibilitychange", updateVisibility);
    };
  }, [threshold]);

  React.useEffect(() => {
    if (!(available && visible) || status !== "playing") {
      return;
    }

    let timer: number;

    const schedule = () => {
      const step = steps[nextStep.current];

      if (!step) {
        if (loop) {
          timer = window.setTimeout(() => {
            if (stopped.current) {
              return;
            }

            nextStep.current = 0;
            schedule();
          }, loopDelayMs);
          return;
        }

        setStatus("complete");
        return;
      }

      timer = window.setTimeout(() => {
        if (stopped.current) {
          return;
        }

        nextStep.current += 1;
        applyStep(step.event);

        if (pauseAfter(step.event)) {
          setStatus("waiting");
          return;
        }

        schedule();
      }, step.delay);
    };

    schedule();

    return () => window.clearTimeout(timer);
  }, [available, loop, loopDelayMs, status, steps, visible]);

  return {
    active: available && status === "playing",
    ref,
    reset,
    status,
    stop: () => {
      if (stopped.current) {
        return false;
      }

      stopped.current = true;
      setStatus("stopped");

      return status !== "complete";
    },
    waiting: status === "waiting",
  };
};
