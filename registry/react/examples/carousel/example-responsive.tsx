"use client";

import { Card, CardContent } from "@/registry/react/components/card";
import {
  Carousel,
  CarouselContent,
  CarouselControl,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/registry/react/components/carousel";
import { useMediaQuery } from "@/registry/react/hooks/use-media-query";

const Example = () => {
  const isMedium = useMediaQuery("(min-width: 768px)");
  const isLarge = useMediaQuery("(min-width: 1024px)");

  const slidesPerPage = [2, 3, 4][Number(isMedium) + Number(isLarge)];

  return (
    <Carousel
      className="w-full max-w-lg"
      slideCount={slides.length}
      slidesPerPage={slidesPerPage}
      spacing="16px"
    >
      <CarouselControl>
        <CarouselPrevious>Previous</CarouselPrevious>
        <CarouselNext>Next</CarouselNext>
      </CarouselControl>

      <CarouselContent>
        {slides.map((slide, index) => (
          <CarouselItem index={index} key={slide.id}>
            <Card>
              <CardContent className="flex aspect-square items-center justify-center">
                <span className="font-semibold text-2xl">{index + 1}</span>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

const slides = Array.from({ length: 12 }, (_, id) => ({ id }));

export default Example;
