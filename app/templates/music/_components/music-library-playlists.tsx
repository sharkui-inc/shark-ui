"use client";

import { PlayIcon } from "lucide-react";
import { Button } from "@/registry/react/components/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardMedia,
  CardTitle,
} from "@/registry/react/components/card";
import { PLAYLISTS } from "../_data/music";

export const MusicLibraryPlaylists = () => (
  <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
    {PLAYLISTS.map((playlist) => (
      <Card className="[--space:--spacing(4)]" key={playlist.title}>
        <CardMedia className="relative aspect-[4/3]" variant="image">
          <img alt="" height={240} src={playlist.image} width={320} />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-black/40 opacity-0 transition-opacity group-hover/card:opacity-100 motion-reduce:transition-none"
          />
          <div className="absolute start-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 transition-opacity group-hover/card:opacity-100 motion-reduce:transition-none">
            <Button aria-label={`Play ${playlist.title}`} pill>
              <PlayIcon aria-hidden="true" /> Play mix
            </Button>
          </div>
        </CardMedia>
        <CardHeader>
          <CardTitle className="text-base">{playlist.title}</CardTitle>
          <CardDescription>{playlist.subtitle}</CardDescription>
        </CardHeader>
      </Card>
    ))}
  </div>
);
