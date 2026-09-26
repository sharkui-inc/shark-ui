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
  <Carousel
    autoplay
    className="w-full max-w-48"
    loop
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
);

const slides = Array.from({ length: 4 }, (_, id) => ({ id }));

export default Example;
