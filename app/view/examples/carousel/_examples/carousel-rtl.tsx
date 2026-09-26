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

const numbers = ["١", "٢", "٣", "٤", "٥"];

const CarouselRtl = () => (
  <Carousel className="w-full max-w-48" slideCount={numbers.length}>
    <CarouselControl>
      <CarouselPrevious>السابق</CarouselPrevious>
      <CarouselNext>التالي</CarouselNext>
    </CarouselControl>

    <CarouselContent>
      {numbers.map((number, index) => (
        <CarouselItem index={index} key={number}>
          <Card>
            <CardContent className="flex aspect-square items-center justify-center">
              <span className="font-semibold text-4xl">{number}</span>
            </CardContent>
          </Card>
        </CarouselItem>
      ))}
    </CarouselContent>
  </Carousel>
);

export default CarouselRtl;
