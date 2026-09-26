import { Card, CardContent } from "@/registry/react/components/card";
import {
  Carousel,
  CarouselContent,
  CarouselControl,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/registry/react/components/carousel";

const CarouselSize = () => (
  <Carousel
    className="w-full max-w-64 sm:max-w-80"
    slideCount={slides.length}
    slidesPerPage={3}
  >
    <CarouselControl>
      <CarouselPrevious>Previous</CarouselPrevious>
      <CarouselNext>Next</CarouselNext>
    </CarouselControl>

    <CarouselContent>
      {slides.map((slide, index) => (
        <CarouselItem className="basis-1/3" index={index} key={slide}>
          <Card>
            <CardContent className="flex h-40 items-center justify-center">
              <span className="font-semibold text-2xl">{slide}</span>
            </CardContent>
          </Card>
        </CarouselItem>
      ))}
    </CarouselContent>
  </Carousel>
);

const slides = Array.from({ length: 16 }, (_, i) => i + 1);

export default CarouselSize;
