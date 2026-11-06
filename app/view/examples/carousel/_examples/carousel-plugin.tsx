"use client";

import type React from "react";
import { Card, CardContent } from "@/registry/react/components/card";
import {
  Carousel,
  CarouselContent,
  CarouselControl,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  useCarouselContext,
} from "@/registry/react/components/carousel";

interface PauseOnHoverProps {
  children: React.ReactNode;
}

const PauseOnHover = (props: PauseOnHoverProps) => {
  const { children } = props;

  const { pause, play } = useCarouselContext();

  return (
    <div
      className="flex min-w-0 flex-1 flex-col"
      onPointerEnter={pause}
      onPointerLeave={play}
    >
      {children}
    </div>
  );
};

const CarouselPlugin = () => (
  <Carousel
    autoplay={{ delay: 2000 }}
    className="w-full max-w-48"
    loop
    slideCount={slides.length}
  >
    <PauseOnHover>
      <CarouselControl>
        <CarouselPrevious>Previous</CarouselPrevious>
        <CarouselNext>Next</CarouselNext>
      </CarouselControl>

      <CarouselContent>
        {slides.map((slide, index) => (
          <CarouselItem index={index} key={slide}>
            <Card>
              <CardContent className="flex aspect-square items-center justify-center">
                <span className="text-4xl font-semibold">{slide}</span>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
    </PauseOnHover>
  </Carousel>
);

const slides = Array.from({ length: 5 }, (_, i) => i + 1);

export default CarouselPlugin;
