"use client";

import { Clock3Icon, PlayIcon } from "lucide-react";
import { Button } from "@/registry/react/components/button";
import { Card, CardContent, CardMedia } from "@/registry/react/components/card";
import { PODCASTS } from "../_data/music";

export const MusicLibraryPodcasts = () => (
  <div className="grid gap-4 md:grid-cols-2">
    {PODCASTS.map((podcast) => (
      <Card className="flex-row gap-0 py-0" key={podcast.episode}>
        <CardMedia
          className="relative w-36 shrink-0 self-stretch p-2"
          variant="image"
        >
          <img
            alt=""
            className="rounded-lg"
            height={240}
            src={podcast.image}
            width={192}
          />
        </CardMedia>
        <CardContent className="flex min-w-0 flex-1 flex-col justify-between gap-4 p-4">
          <div>
            <p className="font-heading line-clamp-2 text-base leading-tight font-semibold tracking-[-0.02em] sm:text-lg">
              {podcast.episode}
            </p>
            <p className="text-muted-foreground mt-2 text-sm">{podcast.show}</p>
          </div>
          <div className="flex items-center justify-between gap-3">
            <span className="text-muted-foreground flex items-center gap-1 text-sm">
              <Clock3Icon aria-hidden="true" className="size-3.5" />
              {podcast.time}
            </span>
            <Button aria-label={`Play ${podcast.episode}`} pill size="sm">
              <PlayIcon aria-hidden="true" /> Play episode
            </Button>
          </div>
        </CardContent>
      </Card>
    ))}
  </div>
);
