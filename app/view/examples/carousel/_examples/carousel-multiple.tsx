import { Card, CardContent } from "@/registry/react/components/card";
import {
  Carousel,
  CarouselContent,
  CarouselControl,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/registry/react/components/carousel";

const CarouselMultiple = () => (
  <Carousel
    className="w-full max-w-64"
    slideCount={slides.length}
    slidesPerPage={2}
  >
    <CarouselControl>
      <CarouselPrevious>Previous</CarouselPrevious>
      <CarouselNext>Next</CarouselNext>
    </CarouselControl>

    <CarouselContent>
      {slides.map((slide, index) => (
        <CarouselItem className="basis-1/2" index={index} key={slide}>
          <Card>
            <CardContent className="flex aspect-square items-center justify-center">
              <span className="font-semibold text-3xl">{slide}</span>
            </CardContent>
          </Card>
        </CarouselItem>
      ))}
    </CarouselContent>
  </Carousel>
);

const slides = Array.from({ length: 8 }, (_, i) => i + 1);

export default CarouselMultiple;
