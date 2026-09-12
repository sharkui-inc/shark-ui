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
import {
  Carousel,
  CarouselContent,
  CarouselControl,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/registry/react/components/carousel";
import { FEATURED_CHARTS } from "../_data/music";

export const MusicAlbums = () => (
  <section>
    <Carousel
      allowMouseDrag
      aria-label="Suggested albums"
      autoSize
      className="w-full"
      slideCount={FEATURED_CHARTS.length}
      spacing="16px"
    >
      <div className="flex items-center justify-between gap-4">
        <h2 className="font-heading font-semibold text-xl tracking-[-0.02em]">
          Albums for your next listen
        </h2>
        <CarouselControl className="w-auto shrink-0">
          <CarouselPrevious className="static! translate-x-0! translate-y-0!" />
          <CarouselNext className="static! translate-x-0! translate-y-0!" />
        </CarouselControl>
      </div>
      <CarouselContent className="mt-4 mb-0 py-0">
        {FEATURED_CHARTS.map((album, index) => (
          <CarouselItem
            className="basis-[82%]! sm:basis-[calc(50%-0.5rem)]! lg:basis-[calc(33.333%-0.667rem)]! xl:basis-[calc(20%-0.8rem)]!"
            index={index}
            key={album.title}
          >
            <Card className="[--space:--spacing(4)]">
              <CardMedia className="relative aspect-square" variant="image">
                <img alt="" height={320} src={album.image} width={320} />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-black/40 opacity-0 transition-opacity duration-200 group-focus-within:opacity-100 group-hover/card:opacity-100 motion-reduce:transition-none"
                />
                <div className="pointer-events-none absolute inset-1/2 flex size-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center opacity-0 transition-opacity group-focus-within:pointer-events-auto group-focus-within:opacity-100 group-hover/card:pointer-events-auto group-hover/card:opacity-100 motion-reduce:transition-none">
                  <Button
                    aria-label={`Play ${album.title}`}
                    pill
                    size="icon-lg"
                  >
                    <PlayIcon aria-hidden="true" />
                  </Button>
                </div>
              </CardMedia>
              <CardHeader>
                <CardTitle className="text-base">{album.title}</CardTitle>
                <CardDescription>{album.artist}</CardDescription>
              </CardHeader>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  </section>
);
