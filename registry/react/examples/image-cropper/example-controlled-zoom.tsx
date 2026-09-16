"use client";

import { ZoomInIcon, ZoomOutIcon } from "lucide-react";
import React from "react";
import { createWavesAvatar } from "@/lib/dicebear";
import { Button } from "@/registry/react/components/button";
import { Card, CardContent } from "@/registry/react/components/card";
import {
  ImageCropper,
  ImageCropperImage,
  ImageCropperSelection,
} from "@/registry/react/components/image-cropper";

const Example = () => {
  const [zoom, setZoom] = React.useState(1);

  return (
    <Card className="w-full max-w-sm pt-0 [--space:--spacing(4)]">
      <ImageCropper onZoomChange={(e) => setZoom(e.zoom)} zoom={zoom}>
        <ImageCropperImage
          alt="Crop me"
          src={createWavesAvatar("image cropper", "green-dark")}
        />
        <ImageCropperSelection />
      </ImageCropper>
      <CardContent className="flex justify-end gap-2">
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
      </CardContent>
    </Card>
  );
};

export default Example;
