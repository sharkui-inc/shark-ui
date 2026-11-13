import { Card, CardContent } from "@/registry/react/components/card";
import {
  Carousel,
  CarouselContent,
  CarouselControl,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/registry/react/components/carousel";

const Example = () => (
  <div className="w-full px-12">
    <Carousel
      aria-label="Carousel with custom spacing"
      className="mx-auto w-full max-w-lg"
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
          <CarouselItem index={index} key={slide.id}>
            <Card>
              <CardContent className="flex aspect-square items-center justify-center">
                <span className="text-4xl font-semibold">{index + 1}</span>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  </div>
);

const slides = Array.from({ length: 8 }, (_, id) => ({ id }));

export default Example;
