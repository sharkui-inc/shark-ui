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
    className="w-full max-w-lg"
    slideCount={slides.length}
    slidesPerPage={3}
    spacing="16px"
  >
    <CarouselControl>
      <CarouselPrevious>Previous</CarouselPrevious>
      <CarouselNext>Next</CarouselNext>
    </CarouselControl>

    <CarouselContent>
      {slides.map((_, index) => (
        <CarouselItem index={index} key={index}>
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

const slides = Array.from({ length: 16 });

export default Example;
