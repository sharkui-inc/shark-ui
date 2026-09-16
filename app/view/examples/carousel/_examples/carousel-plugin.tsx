"use client";

import { useEffect, useState } from "react";
import { Card, CardContent } from "@/registry/react/components/card";
import {
  Carousel,
  CarouselContent,
  CarouselControl,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  useCarousel,
} from "@/registry/react/components/carousel";

const AutoplayControl = ({ isPlaying }: { isPlaying: boolean }) => {
  const { scrollNext } = useCarousel();

  useEffect(() => {
    if (!isPlaying) {
      return;
    }

    const id = window.setInterval(() => scrollNext(), 2000);

    return () => window.clearInterval(id);
  }, [isPlaying, scrollNext]);

  return null;
};

const CarouselPlugin = () => {
  const [isPlaying, setIsPlaying] = useState(true);

  return (
    <Carousel
      className="w-full max-w-48"
      onMouseEnter={() => setIsPlaying(false)}
      onMouseLeave={() => setIsPlaying(true)}
      slideCount={slides.length}
    >
      <AutoplayControl isPlaying={isPlaying} />
      <CarouselControl>
        <CarouselPrevious>Previous</CarouselPrevious>
        <CarouselNext>Next</CarouselNext>
      </CarouselControl>

      <CarouselContent>
        {slides.map((slide, index) => (
          <CarouselItem index={index} key={slide}>
            <Card>
              <CardContent className="flex aspect-square items-center justify-center">
                <span className="font-semibold text-4xl">{slide}</span>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

const slides = Array.from({ length: 5 }, (_, i) => i + 1);

export default CarouselPlugin;
