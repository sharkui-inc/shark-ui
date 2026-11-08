"use client";

import { Clock3Icon, HeartIcon, PlayIcon } from "lucide-react";
import { Button } from "@/registry/react/components/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/registry/react/components/table";
import { TRACKS } from "../_data/music";

interface MusicLibrarySongsProps {
  favoriteTitles: string[];
  onToggleFavorite: (title: string) => void;
}

export const MusicLibrarySongs = (props: MusicLibrarySongsProps) => {
  const { favoriteTitles, onToggleFavorite } = props;

  return (
    <Table isHoverable={false}>
      <TableHeader>
        <TableRow>
          <TableHead className="w-10">#</TableHead>
          <TableHead>Title</TableHead>
          <TableHead className="hidden sm:table-cell">Album</TableHead>
          <TableHead className="w-24 text-end">
            <Clock3Icon aria-hidden="true" className="ms-auto size-3.5" />
            <span className="sr-only">Duration</span>
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {TRACKS.map((track, index) => {
          const isFavorite = favoriteTitles.includes(track.title);

          return (
            <TableRow className="group/track" key={track.title}>
              <TableCell>
                <span className="relative flex size-8 items-center justify-center">
                  <span className="text-muted-foreground text-sm tabular-nums group-hover/track:invisible">
                    {index + 1}
                  </span>
                  <PlayIcon
                    aria-hidden="true"
                    className="absolute size-4 opacity-0 group-hover/track:opacity-100"
                  />
                </span>
              </TableCell>
              <TableCell>
                <div className="flex min-w-0 items-center gap-3">
                  <img
                    alt=""
                    className="size-12 shrink-0 rounded-lg object-cover"
                    height={48}
                    src={track.image}
                    width={48}
                  />
                  <span className="min-w-0">
                    <span className="block truncate font-medium">
                      {track.title}
                    </span>
                    <span className="text-muted-foreground mt-1 block truncate text-xs">
                      {track.artist}
                    </span>
                  </span>
                </div>
              </TableCell>
              <TableCell className="text-muted-foreground hidden sm:table-cell">
                Signal Bloom
              </TableCell>
              <TableCell>
                <div className="flex items-center justify-end gap-1">
                  <Button
                    aria-label={`Favorite ${track.title}`}
                    onClick={() => onToggleFavorite(track.title)}
                    size="icon-xs"
                    variant="ghost"
                  >
                    <HeartIcon
                      aria-hidden="true"
                      fill={isFavorite ? "currentColor" : "none"}
                    />
                  </Button>
                  <span className="text-muted-foreground text-xs tabular-nums">
                    {track.duration}
                  </span>
                </div>
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};
