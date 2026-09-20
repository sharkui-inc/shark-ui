"use client";

import { usePreviewLocale } from "@/hooks/use-preview-locale";
import { Card, CardContent } from "@/registry/react/components/card";
import {
  ImageCropper,
  ImageCropperImage,
  ImageCropperSelection,
} from "@/registry/react/components/image-cropper";

const Example = () => {
  const { locale } = usePreviewLocale();

  const { values } = translations[locale];

  return (
    <Card className="w-full max-w-sm pt-0 [--space:--spacing(4)]">
      <CardContent>
        <ImageCropper>
          <ImageCropperImage
            alt={values.alt}
            src="https://api.dicebear.com/10.x/waves/svg?backgroundColor=eef4e6&scale=1.2&seed=image+cropper&waveColor=1a6b5c"
          />
          <ImageCropperSelection />
        </ImageCropper>
      </CardContent>
    </Card>
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
