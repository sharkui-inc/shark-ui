"use client";

import React from "react";
import {
  ImageCropper,
  ImageCropperImage,
  ImageCropperSelection,
} from "@/registry/react/components/image-cropper";

const Example = () => {
  const [crop, setCrop] = React.useState<Crop | undefined>();
  const [zoom, setZoom] = React.useState(1);

  return (
    <ImageCropper
      className="aspect-4/3 max-w-sm"
      onCropChange={(details) => setCrop(details.crop)}
      onZoomChange={(details) => setZoom(details.zoom)}
    >
      <ImageCropperImage
        alt="Crop me"
        src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200"
      />
      <ImageCropperSelection />

      <dl
        aria-label="Image cropper event values"
        className="bg-background/96 pointer-events-none absolute inset-x-3 bottom-3 grid grid-cols-[auto_repeat(4,minmax(0,1fr))] overflow-hidden rounded-lg text-sm shadow-sm/4"
      >
        <div className="flex flex-col justify-center gap-0.5 px-3 py-1.5">
          <dt className="text-xs font-medium">Events</dt>
          <dd className="text-muted-foreground font-mono text-xs tabular-nums">
            {zoom.toFixed(2)}×
          </dd>
        </div>
        <EventValue label="X" value={formatValue(crop?.x)} />
        <EventValue label="Y" value={formatValue(crop?.y)} />
        <EventValue label="W" value={formatValue(crop?.width)} />
        <EventValue label="H" value={formatValue(crop?.height)} />
      </dl>
    </ImageCropper>
  );
};

interface EventValueProps {
  label: string;
  value: string;
}

const EventValue = (props: EventValueProps) => {
  const { label, value } = props;

  return (
    <div className="border-input flex min-w-0 flex-col justify-center gap-0.5 border-s px-2 py-1.5">
      <dt className="text-muted-foreground text-xs">{label}</dt>
      <dd className="font-mono font-medium tabular-nums">{value}</dd>
    </div>
  );
};

const formatValue = (value: number | undefined) =>
  value === undefined ? "—" : Math.round(value).toString();

interface Crop {
  height: number;
  width: number;
  x: number;
  y: number;
}

export default Example;
