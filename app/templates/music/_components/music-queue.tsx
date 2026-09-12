"use client";

import { AudioWaveformIcon } from "lucide-react";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/registry/react/components/item";
import {
  SheetBody,
  SheetContent,
  SheetHeader,
} from "@/registry/react/components/sheet";
import { TRACKS, type Track } from "../_data/music";

export const MusicQueue = ({
  currentTrack,
  onTrackSelect,
}: {
  currentTrack: Track;
  onTrackSelect: (track: Track) => void;
}) => {
  const upcoming = TRACKS.filter((track) => track.title !== currentTrack.title);

  return (
    <SheetContent className="max-w-sm" variant="inset">
      <SheetHeader
        className="sr-only"
        description="Your listening order for this session."
        title="Queue"
      />
      <SheetBody className="flex min-h-0 flex-1 flex-col gap-6 overflow-y-auto">
        <section aria-labelledby="now-playing-heading">
          <h2
            className="font-heading font-semibold text-xl tracking-[-0.02em]"
            id="now-playing-heading"
          >
            Now playing
          </h2>
          <Item asChild className="mt-3 hover:bg-muted">
            <button onClick={() => onTrackSelect(currentTrack)} type="button">
              <ItemMedia variant="image">
                <img alt="" height={64} src={currentTrack.image} width={64} />
              </ItemMedia>
              <ItemContent>
                <ItemTitle className="text-primary">
                  <AudioWaveformIcon aria-hidden="true" />
                  {currentTrack.title}
                </ItemTitle>
                <ItemDescription>{currentTrack.artist}</ItemDescription>
              </ItemContent>
            </button>
          </Item>
        </section>
        <section aria-labelledby="next-up-heading">
          <h2
            className="font-heading font-semibold text-xl tracking-[-0.02em]"
            id="next-up-heading"
          >
            Next up
          </h2>
          <div className="mt-3 flex flex-col gap-1">
            {upcoming.map((track) => (
              <Item asChild className="hover:bg-muted" key={track.title}>
                <button onClick={() => onTrackSelect(track)} type="button">
                  <ItemMedia variant="image">
                    <img alt="" height={48} src={track.image} width={48} />
                  </ItemMedia>
                  <ItemContent>
                    <ItemTitle>{track.title}</ItemTitle>
                    <ItemDescription>{track.artist}</ItemDescription>
                  </ItemContent>
                  <ItemActions>
                    <span className="text-muted-foreground text-xs tabular-nums">
                      {track.duration}
                    </span>
                  </ItemActions>
                </button>
              </Item>
            ))}
          </div>
        </section>
      </SheetBody>
    </SheetContent>
  );
};
