import { createWavesAvatar } from "@/lib/dicebear";
import {
  Carousel,
  CarouselContent,
  CarouselControl,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/registry/react/components/carousel";

const Example = () => (
  <Carousel className="w-full max-w-48" slideCount={slides.length}>
    <CarouselControl>
      <CarouselPrevious>Previous</CarouselPrevious>
      <CarouselNext>Next</CarouselNext>
    </CarouselControl>

    <CarouselContent>
      {slides.map((slide, index) => (
        <CarouselItem index={index} key={slide.src}>
          <img alt={slide.alt} height={300} src={slide.src} width={500} />
        </CarouselItem>
      ))}
    </CarouselContent>
  </Carousel>
);

const slides = [
  {
    alt: "Green mesh gradient",
    src: createWavesAvatar("green carousel slide", "green-dark"),
  },
  {
    alt: "Blue mesh gradient",
    src: createWavesAvatar("blue carousel slide", "blue"),
  },
  {
    alt: "Purple mesh gradient",
    src: createWavesAvatar("purple carousel slide", "purple"),
  },
  {
    alt: "Orange mesh gradient",
    src: createWavesAvatar("orange carousel slide", "orange"),
  },
  {
    alt: "Rose mesh gradient",
    src: createWavesAvatar("rose carousel slide", "rose"),
  },
];

export default Example;
