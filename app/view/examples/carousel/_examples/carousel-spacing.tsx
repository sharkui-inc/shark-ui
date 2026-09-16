import { Card, CardContent } from "@/registry/react/components/card";
import {
  Carousel,
  CarouselContent,
  CarouselControl,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/registry/react/components/carousel";

const CarouselSpacing = () => (
  <Carousel
    className="w-full max-w-48"
    slideCount={slides.length}
    slidesPerPage={2}
    spacing="64px"
  >
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

const slides = Array.from({ length: 8 }, (_, i) => i + 1);

export default CarouselSpacing;
