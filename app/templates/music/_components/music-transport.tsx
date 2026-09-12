"use client";

import {
  PauseIcon,
  PlayIcon,
  Repeat2Icon,
  ShuffleIcon,
  SkipBackIcon,
  SkipForwardIcon,
} from "lucide-react";
import { Button } from "@/registry/react/components/button";
import { Slider } from "@/registry/react/components/slider";
import type { Track } from "../_data/music";

export const MusicTransport = ({
  isPlaying,
  onMoveTrack,
  onProgressChange,
  onTogglePlaying,
  progress,
  track,
}: {
  isPlaying: boolean;
  onMoveTrack: (direction: -1 | 1) => void;
  onProgressChange: (value: number) => void;
  onTogglePlaying: () => void;
  progress: number;
  track: Track;
}) => (
  <div className="flex min-w-0 flex-col gap-1">
    <div className="flex items-center justify-center gap-1">
      <Button
        aria-label="Shuffle queue"
        className="text-muted-foreground"
        size="icon-sm"
        variant="ghost"
      >
        <ShuffleIcon aria-hidden="true" />
      </Button>
      <Button
        aria-label="Previous track"
        onClick={() => onMoveTrack(-1)}
        size="icon-sm"
        variant="ghost"
      >
        <SkipBackIcon aria-hidden="true" />
      </Button>
      <Button
        aria-label={isPlaying ? "Pause" : "Play"}
        onClick={onTogglePlaying}
        size="icon-sm"
        variant="ghost"
      >
        {isPlaying ? (
          <PauseIcon aria-hidden="true" />
        ) : (
          <PlayIcon aria-hidden="true" />
        )}
      </Button>
      <Button
        aria-label="Next track"
        onClick={() => onMoveTrack(1)}
        size="icon-sm"
        variant="ghost"
      >
        <SkipForwardIcon aria-hidden="true" />
      </Button>
      <Button
        aria-label="Repeat queue"
        className="text-muted-foreground"
        size="icon-sm"
        variant="ghost"
      >
        <Repeat2Icon aria-hidden="true" />
      </Button>
    </div>
    <div className="flex items-center gap-2">
      <span className="text-muted-foreground text-xs tabular-nums">
        {Math.floor(progress / 30)}:
        {String(Math.floor((progress % 30) * 2)).padStart(2, "0")}
      </span>
      <Slider
        className="flex-1"
        max={100}
        onValueChange={(details) => onProgressChange(details.value[0] ?? 0)}
        value={[progress]}
      />
      <span className="text-muted-foreground text-xs tabular-nums">
        {track.duration}
      </span>
    </div>
  </div>
);
