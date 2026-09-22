"use client";

import React from "react";
import { Card } from "@/registry/react/components/card";
import {
  ImageCropper,
  ImageCropperImage,
  ImageCropperSelection,
} from "@/registry/react/components/image-cropper";

const Example = () => {
  const [crop, setCrop] = React.useState<Crop | undefined>();
  const [zoom, setZoom] = React.useState(1);

  return (
    <Card className="w-full max-w-sm [--space:--spacing(0)]">
      <ImageCropper
        className="aspect-[4/3] w-full"
        onCropChange={(details) => setCrop(details.crop)}
        onZoomChange={(details) => setZoom(details.zoom)}
      >
        <ImageCropperImage
          alt="Crop me"
          src="https://api.dicebear.com/10.x/waves/svg?backgroundColor=eef4e6&scale=1.2&seed=image+cropper&waveColor=1a6b5c"
        />
        <ImageCropperSelection />

        <dl
          aria-label="Image cropper event values"
          className="pointer-events-none absolute inset-x-3 bottom-3 grid grid-cols-[auto_repeat(4,minmax(0,1fr))] overflow-hidden rounded-lg bg-background/96 text-sm shadow-sm/4"
        >
          <div className="flex flex-col justify-center gap-0.5 px-3 py-1.5">
            <dt className="font-medium text-xs">Events</dt>
            <dd className="font-mono text-muted-foreground text-xs tabular-nums">
              {zoom.toFixed(2)}×
            </dd>
          </div>
          <EventValue label="X" value={formatValue(crop?.x)} />
          <EventValue label="Y" value={formatValue(crop?.y)} />
          <EventValue label="W" value={formatValue(crop?.width)} />
          <EventValue label="H" value={formatValue(crop?.height)} />
        </dl>
      </ImageCropper>
    </Card>
  );
};

const EventValue = ({ label, value }: { label: string; value: string }) => (
  <div className="flex min-w-0 flex-col justify-center gap-0.5 border-input border-s px-2 py-1.5">
    <dt className="text-muted-foreground text-xs">{label}</dt>
    <dd className="font-medium font-mono tabular-nums">{value}</dd>
  </div>
);

const formatValue = (value: number | undefined) =>
  value === undefined ? "—" : Math.round(value).toString();

interface Crop {
  height: number;
  width: number;
  x: number;
  y: number;
}

export default Example;
