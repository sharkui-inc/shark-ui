"use client";

import React from "react";
import { Card, CardContent } from "@/registry/react/components/card";
import {
  Carousel,
  CarouselContent,
  CarouselControl,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/registry/react/components/carousel";

const Example = () => {
  const [page, setPage] = React.useState(0);

  return (
    <div className="flex flex-col gap-4">
      <Carousel
        className="w-full max-w-48"
        onPageChange={({ page: nextPage }) => setPage(nextPage)}
        page={page}
        slideCount={slides.length}
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
                  <span className="font-semibold text-4xl">{index + 1}</span>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <p className="text-center text-muted-foreground text-sm">
        Current page: {page + 1} of 5
      </p>
    </div>
  );
};

const slides = Array.from({ length: 8 }, (_, id) => ({ id }));

export default Example;
