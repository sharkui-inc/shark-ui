"use client";

import { usePreviewLocale } from "@/hooks/use-preview-locale";
import { createWavesAvatar } from "@/lib/dicebear";
import {
  ImageCropper,
  ImageCropperImage,
  ImageCropperSelection,
} from "@/registry/react/components/image-cropper";

const Example = () => {
  const { locale } = usePreviewLocale();

  const { values } = translations[locale];

  return (
    <ImageCropper className="aspect-video w-full max-w-lg">
      <ImageCropperImage
        alt={values.alt}
        src={createWavesAvatar("image cropper", "green-dark")}
      />
      <ImageCropperSelection />
    </ImageCropper>
  );
};

const translations = {
  ar: {
    values: {
      alt: "اقتصاص",
    },
  },
  en: {
    values: {
      alt: "Crop me",
    },
  },
  he: {
    values: {
      alt: "חתוך",
    },
  },
};

export default Example;
