"use client";

import { HeartIcon } from "lucide-react";
import { Button } from "@/registry/react/components/button";
import type { Track } from "../_data/music";

interface MusicNowPlayingProps {
  isFavorite: boolean;
  onToggleFavorite: () => void;
  track: Track;
}

export const MusicNowPlaying = (props: MusicNowPlayingProps) => {
  const { isFavorite, track, onToggleFavorite } = props;

  return (
    <div className="flex min-w-0 items-center gap-3">
      <img
        alt=""
        className="size-10 shrink-0 rounded-lg object-cover"
        height={40}
        src={track.image}
        width={40}
      />
      <div className="min-w-0">
        <p className="truncate text-sm font-medium">{track.title}</p>
        <p className="text-muted-foreground truncate text-xs">{track.artist}</p>
      </div>
      <Button
        aria-label="Save current track"
        onClick={onToggleFavorite}
        size="icon-sm"
        variant="ghost"
      >
        <HeartIcon
          aria-hidden="true"
          fill={isFavorite ? "currentColor" : "none"}
        />
      </Button>
    </div>
  );
};
