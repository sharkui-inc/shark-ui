"use client";

import { ZoomInIcon, ZoomOutIcon } from "lucide-react";
import React from "react";
import { Button } from "@/registry/react/components/button";
import {
  ImageCropper,
  ImageCropperImage,
  ImageCropperSelection,
} from "@/registry/react/components/image-cropper";

const Example = () => {
  const [zoom, setZoom] = React.useState(1);

  return (
    <div className="flex w-full max-w-sm flex-col gap-4">
      <ImageCropper onZoomChange={(e) => setZoom(e.zoom)} zoom={zoom}>
        <ImageCropperImage
          alt="Crop me"
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200"
        />
        <ImageCropperSelection />
      </ImageCropper>
      <div className="flex justify-end gap-2">
        <Button
          aria-label="Zoom out"
          onClick={() => setZoom(Math.max(0, zoom - 0.25))}
          size="icon-sm"
          variant="outline"
        >
          <ZoomOutIcon aria-hidden />
        </Button>
        <Button
          aria-label="Zoom in"
          onClick={() => setZoom(Math.min(3, zoom + 0.25))}
          size="icon-sm"
          variant="outline"
        >
          <ZoomInIcon aria-hidden />
        </Button>
      </div>
    </div>
  );
};

export default Example;
