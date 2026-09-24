"use client";

import { usePreviewLocale } from "@/hooks/use-preview-locale";
import {
  ImageCropper,
  ImageCropperImage,
  ImageCropperSelection,
} from "@/registry/react/components/image-cropper";

const Example = () => {
  const { locale } = usePreviewLocale();

  const { values } = translations[locale];

  return (
    <ImageCropper className="max-w-sm">
      <ImageCropperImage
        alt={values.alt}
        src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200"
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
