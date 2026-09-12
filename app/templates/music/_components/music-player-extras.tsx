"use client";

import { ListMusicIcon, Volume2Icon, VolumeXIcon } from "lucide-react";
import { Button } from "@/registry/react/components/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/registry/react/components/hover-card";
import { Sheet, SheetTrigger } from "@/registry/react/components/sheet";
import { Slider } from "@/registry/react/components/slider";
import type { Track } from "../_data/music";
import { MusicQueue } from "./music-queue";

export const MusicPlayerExtras = ({
  isMuted,
  onToggleMute,
  onTrackSelect,
  onVolumeChange,
  track,
  volume,
}: {
  isMuted: boolean;
  onToggleMute: () => void;
  onTrackSelect: (track: Track) => void;
  onVolumeChange: (value: number) => void;
  track: Track;
  volume: number;
}) => (
  <div className="hidden items-center justify-end gap-0.5 self-end lg:flex">
    <Sheet closeOnInteractOutside modal={false}>
      <SheetTrigger asChild>
        <Button aria-label="Open play queue" size="icon-md" variant="ghost">
          <ListMusicIcon aria-hidden="true" />
        </Button>
      </SheetTrigger>
      <MusicQueue currentTrack={track} onTrackSelect={onTrackSelect} />
    </Sheet>
    <HoverCard openDelay={0}>
      <HoverCardTrigger asChild>
        <Button
          aria-label={isMuted ? "Unmute" : "Mute"}
          onClick={onToggleMute}
          size="icon-md"
          variant="ghost"
        >
          {isMuted ? (
            <VolumeXIcon aria-hidden="true" />
          ) : (
            <Volume2Icon aria-hidden="true" />
          )}
        </Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-auto p-2" showArrow={false}>
        <Slider
          className="h-40"
          max={100}
          onValueChange={(details) => onVolumeChange(details.value[0] ?? 0)}
          orientation="vertical"
          value={[volume]}
        />
      </HoverCardContent>
    </HoverCard>
  </div>
);
