"use client";

import { usePreviewLocale } from "@/hooks/use-preview-locale";
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
  const { locale } = usePreviewLocale();

  const { values } = translations[locale];

  const slides = Array.from({ length: values.numbers.length }, (_, id) => ({
    id,
  }));

  return (
    <Carousel className="w-full max-w-48" slideCount={slides.length}>
      <CarouselControl>
        <CarouselPrevious>{values.previous}</CarouselPrevious>
        <CarouselNext>{values.next}</CarouselNext>
      </CarouselControl>

      <CarouselContent>
        {slides.map((slide, index) => (
          <CarouselItem index={index} key={slide.id}>
            <Card>
              <CardContent className="flex aspect-square items-center justify-center">
                <span className="font-semibold text-4xl">
                  {values.numbers[index]}
                </span>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

const translations = {
  ar: {
    values: {
      next: "التالي",
      numbers: ["١", "٢", "٣", "٤", "٥", "٦", "٧", "٨"],
      previous: "السابق",
    },
  },
  en: {
    values: {
      next: "Next",
      numbers: ["1", "2", "3", "4", "5", "6", "7", "8"],
      previous: "Previous",
    },
  },
  he: {
    values: {
      next: "הבא",
      numbers: ["1", "2", "3", "4", "5", "6", "7", "8"],
      previous: "קודם",
    },
  },
};

export default Example;
