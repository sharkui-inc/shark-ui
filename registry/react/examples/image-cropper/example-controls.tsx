"use client";

import {
  FlipHorizontalIcon,
  FlipVerticalIcon,
  RotateCcwIcon,
  RotateCwIcon,
  Undo2Icon,
  ZoomInIcon,
  ZoomOutIcon,
} from "lucide-react";
import { Button } from "@/registry/react/components/button";
import { ButtonGroup } from "@/registry/react/components/button-group";
import {
  ImageCropper,
  ImageCropperContext,
  ImageCropperImage,
  ImageCropperSelection,
} from "@/registry/react/components/image-cropper";

const Example = () => (
  <ImageCropper className="max-w-sm">
    <ImageCropperImage
      alt="Crop me"
      src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200"
    />
    <ImageCropperSelection />
    <ImageCropperContext>
      {(cropper) => (
        <div className="pointer-events-none absolute inset-x-3 bottom-3 flex justify-center">
          <div className="pointer-events-auto flex w-fit flex-wrap justify-center gap-2 rounded-lg bg-background/96 p-1.5 shadow-sm/4">
            <ButtonGroup aria-label="Zoom controls">
              <Button
                aria-label="Zoom out"
                onClick={() => cropper.zoomBy(-0.25)}
                size="icon-sm"
                variant="outline"
              >
                <ZoomOutIcon aria-hidden />
              </Button>
              <Button
                aria-label="Zoom in"
                onClick={() => cropper.zoomBy(0.25)}
                size="icon-sm"
                variant="outline"
              >
                <ZoomInIcon aria-hidden />
              </Button>
            </ButtonGroup>

            <ButtonGroup aria-label="Rotation controls">
              <Button
                aria-label="Rotate counterclockwise"
                onClick={() => cropper.rotateBy(-90)}
                size="icon-sm"
                variant="outline"
              >
                <RotateCcwIcon aria-hidden />
              </Button>
              <Button
                aria-label="Rotate clockwise"
                onClick={() => cropper.rotateBy(90)}
                size="icon-sm"
                variant="outline"
              >
                <RotateCwIcon aria-hidden />
              </Button>
            </ButtonGroup>

            <ButtonGroup aria-label="Flip controls">
              <Button
                aria-label="Flip horizontally"
                onClick={() => cropper.flipHorizontally()}
                size="icon-sm"
                variant="outline"
              >
                <FlipHorizontalIcon aria-hidden />
              </Button>
              <Button
                aria-label="Flip vertically"
                onClick={() => cropper.flipVertically()}
                size="icon-sm"
                variant="outline"
              >
                <FlipVerticalIcon aria-hidden />
              </Button>
            </ButtonGroup>

            <Button onClick={cropper.reset} size="sm" variant="outline">
              <Undo2Icon aria-hidden />
              Reset
            </Button>
          </div>
        </div>
      )}
    </ImageCropperContext>
  </ImageCropper>
);

export default Example;
