"use client";

import {
  ImageCropper as ArkImageCropper,
  useImageCropperContext as useArkImageCropperContext,
} from "@ark-ui/react/image-cropper";
import type React from "react";
import { cn } from "@/lib/utils";

export const useImageCropperContext = useArkImageCropperContext;
export const ImageCropperContext = (
  props: React.ComponentProps<typeof ArkImageCropper.Context>
) => <ArkImageCropper.Context {...props} />;

interface ImageCropperProps
  extends React.ComponentProps<typeof ArkImageCropper.Root> {}

export const ImageCropper = (props: ImageCropperProps) => {
  const { className, children, ...rest } = props;

  return (
    <ArkImageCropper.Root
      className={cn(
        "[--cropper-accent:var(--color-white)] [--cropper-handler-size:--spacing(2)] [--cropper-handler-width:--spacing(1)]",
        "relative",
        "w-full",
        "aspect-video",
        "rounded-md",
        "overflow-hidden",
        className
      )}
      data-slot="image-cropper"
      {...rest}
    >
      <ArkImageCropper.Viewport
        className={cn("size-full", "overflow-hidden")}
        data-slot="image-cropper-viewport"
      >
        {children}
      </ArkImageCropper.Viewport>
    </ArkImageCropper.Root>
  );
};

export const ImageCropperImage = (
  props: React.ComponentProps<typeof ArkImageCropper.Image>
) => {
  const { className, ...rest } = props;

  return (
    <ArkImageCropper.Image
      className={cn(
        "absolute top-0 left-0",
        "size-full object-contain",
        "select-none",
        "backface-hidden",
        "pointer-events-none",
        "origin-center",
        className
      )}
      data-slot="image-cropper-image"
      {...rest}
    />
  );
};

interface ImageCropperSelectionProps
  extends React.ComponentProps<typeof ArkImageCropper.Selection> {
  /**
   * The axis of the grid to show.
   *
   * @default "both"
   */
  axis?: "horizontal" | "vertical" | "both";
}

export const ImageCropperSelection = (props: ImageCropperSelectionProps) => {
  const { axis = "both", className, children, ...rest } = props;

  return (
    <ArkImageCropper.Selection
      className={cn(
        "shadow-[0_0_0_9999px_rgb(0_0_0/0.48)]",
        "border-2 border-white/64",
        "backface-visibility-hidden",
        "cursor-move",
        "data-[shape=circle]:rounded-full",
        "outline-hidden focus-visible:border-ring/64 focus-visible:ring-2 focus-visible:ring-ring/24",
        "data-disabled:cursor-default",
        "data-dragging:cursor-grabbing data-dragging:border-white/80",
        className
      )}
      data-slot="image-cropper-selection"
      {...rest}
    >
      {children}

      {(axis === "horizontal" || axis === "both") && (
        <ImageCropperGrid axis="horizontal" />
      )}
      {(axis === "vertical" || axis === "both") && (
        <ImageCropperGrid axis="vertical" />
      )}

      <ImageCropperHandle position="n" />
      <ImageCropperHandle position="e" />
      <ImageCropperHandle position="s" />
      <ImageCropperHandle position="w" />
      <ImageCropperHandle position="ne" />
      <ImageCropperHandle position="se" />
      <ImageCropperHandle position="sw" />
      <ImageCropperHandle position="nw" />
    </ArkImageCropper.Selection>
  );
};

export const ImageCropperHandle = (
  props: React.ComponentProps<typeof ArkImageCropper.Handle>
) => {
  const { className, ...rest } = props;

  return (
    <ArkImageCropper.Handle
      className={cn(
        "absolute flex touch-none items-center justify-center",
        "data-[position=ne]:z-1 data-[position=nw]:z-1 data-[position=se]:z-1 data-[position=sw]:z-1",
        "h-[calc(var(--cropper-handler-size)+8px)] w-[calc(var(--cropper-handler-size)+8px)]",
        "data-disabled:hidden",
        "data-[position=ne]:cursor-nesw-resize data-[position=nw]:cursor-nwse-resize",
        "data-[position=se]:cursor-nwse-resize data-[position=sw]:cursor-nesw-resize",
        "data-[position=n]:cursor-ns-resize data-[position=s]:cursor-ns-resize",
        "data-[position=e]:cursor-ew-resize data-[position=w]:cursor-ew-resize",
        "border-(--cropper-accent)",
        "[&>span]:bg-(--cropper-accent) [&>span]:shadow-[0_1px_3px_rgb(0_0_0/0.32)]",
        "[@media(hover:hover)_and_(pointer:fine)]:[[data-position=nw],[data-position=ne],[data-position=se],[data-position=sw]]:hover:**:scale-110",
        "data-[position=nw]:[&>span]:border-t-[length:(--cropper-handler-width)] data-[position=nw]:[&>span]:border-l-[length:(--cropper-handler-width)]",
        "data-[position=ne]:[&>span]:border-t-[length:(--cropper-handler-width)] data-[position=ne]:[&>span]:border-r-[length:(--cropper-handler-width)]",
        "data-[position=se]:[&>span]:border-r-[length:(--cropper-handler-width)] data-[position=se]:[&>span]:border-b-[length:(--cropper-handler-width)]",
        "data-[position=sw]:[&>span]:border-b-[length:(--cropper-handler-width)] data-[position=sw]:[&>span]:border-l-[length:(--cropper-handler-width)]",
        "[&:is([data-position=n],[data-position=s],[data-position=e],[data-position=w])>*]:size-1.5 [&:is([data-position=n],[data-position=s],[data-position=e],[data-position=w])>*]:opacity-0",
        "[[data-position=n],[data-position=s],[data-position=e],[data-position=w]]:hover:**:opacity-100",
        "after:absolute",
        "pointer-fine:data-[position=n]:after:inset-x-0 pointer-fine:data-[position=n]:after:-top-1 pointer-fine:data-[position=n]:after:h-1",
        "pointer-fine:data-[position=s]:after:inset-x-0 pointer-fine:data-[position=s]:after:-bottom-1 pointer-fine:data-[position=s]:after:h-1",
        "pointer-fine:data-[position=e]:after:inset-y-0 pointer-fine:data-[position=e]:after:-right-1 pointer-fine:data-[position=e]:after:w-1",
        "pointer-fine:data-[position=w]:after:inset-y-0 pointer-fine:data-[position=w]:after:-left-1 pointer-fine:data-[position=w]:after:w-1",
        "pointer-fine:data-[position=nw]:after:-top-1 pointer-fine:data-[position=nw]:after:-left-1 pointer-fine:data-[position=nw]:after:size-[calc(100%+--spacing(1))]",
        "pointer-fine:data-[position=ne]:after:-top-1 pointer-fine:data-[position=ne]:after:-right-1 pointer-fine:data-[position=ne]:after:size-[calc(100%+--spacing(1))]",
        "pointer-fine:data-[position=se]:after:-right-1 pointer-fine:data-[position=se]:after:-bottom-1 pointer-fine:data-[position=se]:after:size-[calc(100%+--spacing(1))]",
        "pointer-fine:data-[position=sw]:after:-bottom-1 pointer-fine:data-[position=sw]:after:-left-1 pointer-fine:data-[position=sw]:after:size-[calc(100%+--spacing(1))]",
        "pointer-coarse:data-[position=n]:after:inset-x-0 pointer-coarse:data-[position=n]:after:-top-6 pointer-coarse:data-[position=n]:after:h-6",
        "pointer-coarse:data-[position=s]:after:inset-x-0 pointer-coarse:data-[position=s]:after:-bottom-6 pointer-coarse:data-[position=s]:after:h-6",
        "pointer-coarse:data-[position=e]:after:inset-y-0 pointer-coarse:data-[position=e]:after:-right-6 pointer-coarse:data-[position=e]:after:w-6",
        "pointer-coarse:data-[position=w]:after:inset-y-0 pointer-coarse:data-[position=w]:after:-left-6 pointer-coarse:data-[position=w]:after:w-6",
        "pointer-coarse:data-[position=nw]:after:-top-6 pointer-coarse:data-[position=nw]:after:-left-6 pointer-coarse:data-[position=nw]:after:size-[calc(100%+--spacing(6))]",
        "pointer-coarse:data-[position=ne]:after:-top-6 pointer-coarse:data-[position=ne]:after:-right-6 pointer-coarse:data-[position=ne]:after:size-[calc(100%+--spacing(6))]",
        "pointer-coarse:data-[position=se]:after:-right-6 pointer-coarse:data-[position=se]:after:-bottom-6 pointer-coarse:data-[position=se]:after:size-[calc(100%+--spacing(6))]",
        "pointer-coarse:data-[position=sw]:after:-bottom-6 pointer-coarse:data-[position=sw]:after:-left-6 pointer-coarse:data-[position=sw]:after:size-[calc(100%+--spacing(6))]",
        className
      )}
      data-slot="image-cropper-handle"
      {...rest}
    >
      <span aria-hidden className="block size-(--cropper-handler-size)" />
    </ArkImageCropper.Handle>
  );
};

export const ImageCropperGrid = (
  props: React.ComponentProps<typeof ArkImageCropper.Grid>
) => {
  const { className, ...rest } = props;

  return (
    <ArkImageCropper.Grid
      className={cn(
        "absolute",
        "opacity-0",
        "pointer-events-none",
        "transition-opacity duration-200 ease-out",
        "data-[axis=horizontal]:inset-[33.33%_0] data-[axis=horizontal]:border-white/32 data-[axis=horizontal]:border-t data-[axis=horizontal]:border-b",
        "data-[axis=vertical]:inset-0_[33.33%] data-[axis=vertical]:border-white/32 data-[axis=vertical]:border-r data-[axis=vertical]:border-l",
        "data-dragging:opacity-100",
        "data-panning:opacity-100",
        "motion-reduce:transition-none",
        className
      )}
      data-slot="image-cropper-grid"
      {...rest}
    />
  );
};
