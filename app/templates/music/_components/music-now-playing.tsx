"use client";

import { HeartIcon } from "lucide-react";
import { Button } from "@/registry/react/components/button";
import type { Track } from "../_data/music";

export const MusicNowPlaying = ({
  isFavorite,
  onToggleFavorite,
  track,
}: {
  isFavorite: boolean;
  onToggleFavorite: () => void;
  track: Track;
}) => (
  <div className="flex min-w-0 items-center gap-3">
    <img
      alt=""
      className="size-10 shrink-0 rounded-lg object-cover"
      height={40}
      src={track.image}
      width={40}
    />
    <div className="min-w-0">
      <p className="truncate font-medium text-sm">{track.title}</p>
      <p className="truncate text-muted-foreground text-xs">{track.artist}</p>
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
