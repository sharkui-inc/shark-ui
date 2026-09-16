"use client";

import { ImageIcon } from "lucide-react";
import React from "react";
import { createWavesAvatar } from "@/lib/dicebear";
import { Button } from "@/registry/react/components/button";
import { Card } from "@/registry/react/components/card";
import {
  ImageCropper,
  ImageCropperContext,
  ImageCropperImage,
  ImageCropperSelection,
} from "@/registry/react/components/image-cropper";

const Example = () => {
  const [isGenerating, setIsGenerating] = React.useState(false);
  const [previewUrl, setPreviewUrl] = React.useState<string>();

  return (
    <div className="flex w-full flex-col items-center gap-3 md:flex-row md:items-start md:justify-center">
      <Card className="aspect-video w-full max-w-sm [--space:--spacing(0)]">
        <ImageCropper>
          <ImageCropperImage
            alt="Crop me"
            crossOrigin="anonymous"
            src={createWavesAvatar("image cropper", "green-dark")}
          />
          <ImageCropperSelection />
          <ImageCropperContext>
            {(cropper) => (
              <Button
                className="absolute inset-e-3 bottom-3"
                isLoading={isGenerating}
                onClick={async () => {
                  setIsGenerating(true);
                  setPreviewUrl(undefined);

                  try {
                    const image = await cropper.getCroppedImage({
                      maxSize: { height: 512, width: 512 },
                      output: "dataUrl",
                    });

                    if (typeof image === "string") {
                      setPreviewUrl(image);
                    }
                  } finally {
                    setIsGenerating(false);
                  }
                }}
                size="sm"
              >
                Preview crop
              </Button>
            )}
          </ImageCropperContext>
        </ImageCropper>
      </Card>

      <Card className="aspect-video w-full max-w-sm [--space:--spacing(0)]">
        <div className="w-full" data-slot="crop-preview">
          {previewUrl ? (
            <img
              alt="Crop preview"
              className="fade-in-0 size-full animate-in rounded-md object-contain duration-150 ease-out"
              height={512}
              src={previewUrl}
              width={512}
            />
          ) : (
            <div className="flex flex-col items-center gap-2 text-center text-muted-foreground">
              <ImageIcon aria-hidden className="size-5" />
              <span className="text-xs">Preview appears here</span>
            </div>
          )}
        </div>
        <span aria-live="polite" className="sr-only">
          {previewUrl ? "Crop preview ready" : "Crop preview is empty"}
        </span>
      </Card>
    </div>
  );
};

export default Example;
