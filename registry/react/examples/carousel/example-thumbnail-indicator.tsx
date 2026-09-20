import {
  Carousel,
  CarouselContent,
  CarouselControl,
  CarouselIndicator,
  CarouselIndicatorGroup,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/registry/react/components/carousel";

const Example = () => (
  <Carousel className="w-full max-w-48" loop slideCount={slides.length}>
    <CarouselControl className="relative">
      <CarouselPrevious>Previous</CarouselPrevious>
      <CarouselNext>Next</CarouselNext>

      <CarouselContent>
        {slides.map((slide, index) => (
          <CarouselItem index={index} key={slide.src}>
            <img alt={slide.alt} height={300} src={slide.src} width={500} />
          </CarouselItem>
        ))}
      </CarouselContent>
    </CarouselControl>

    <CarouselIndicatorGroup className="mt-4">
      {slides.map((slide) => (
        <CarouselIndicator
          className="size-10 rounded-md"
          index={slides.indexOf(slide)}
          key={slide.src}
        >
          <img alt={slide.alt} height={40} src={slide.src} width={40} />
        </CarouselIndicator>
      ))}
    </CarouselIndicatorGroup>
  </Carousel>
);

const slides = [
  {
    alt: "Green mesh gradient",
    src: "https://api.dicebear.com/10.x/waves/svg?backgroundColor=eef4e6&scale=1.2&seed=green+carousel+slide&waveColor=1a6b5c",
  },
  {
    alt: "Blue mesh gradient",
    src: "https://api.dicebear.com/10.x/waves/svg?backgroundColor=e8f1fb&scale=1.2&seed=blue+carousel+slide&waveColor=2b6cb0",
  },
  {
    alt: "Purple mesh gradient",
    src: "https://api.dicebear.com/10.x/waves/svg?backgroundColor=f3e8fb&scale=1.2&seed=purple+carousel+slide&waveColor=7c3aed",
  },
  {
    alt: "Orange mesh gradient",
    src: "https://api.dicebear.com/10.x/waves/svg?backgroundColor=faf0e4&scale=1.2&seed=orange+carousel+slide&waveColor=ea580c",
  },
  {
    alt: "Rose mesh gradient",
    src: "https://api.dicebear.com/10.x/waves/svg?backgroundColor=f8e8ee&scale=1.2&seed=rose+carousel+slide&waveColor=e11d48",
  },
];

export default Example;
