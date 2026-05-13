# Shark Image Cropper

## When to use

- Avatar uploads, cover images, or any flow where users must **crop before save**.
- Fixed aspect presets, circular masks, or zoom-bounded cropping.

## Install

```bash
npx shadcn@latest add @shark/image-cropper
```

Manual deps from docs:

```bash
npm install @ark-ui/react
```

## Canonical imports

```tsx
import {
  ImageCropper,
  ImageCropperGrid,
  ImageCropperHandle,
  ImageCropperImage,
  ImageCropperSelection,
  useImageCropper,
} from "@/components/ui/image-cropper"
```

## Minimal pattern

```tsx
<ImageCropper src={imageUrl}>
  <ImageCropperImage />
  <ImageCropperSelection>
    <ImageCropperGrid />
    <ImageCropperHandle x="0%" y="0%" />
    {/* additional handles per docs */}
  </ImageCropperSelection>
</ImageCropper>
```

### Key patterns

`useImageCropper` exposes Ark context for custom controls (zoom, reset). Examples show circle crops, min/max sizes, initial crop rectangles, and aspect locks—start from the closest example.

## Common pitfalls

- Missing `src` or using CORS-blocked images—cropping canvas needs loadable bitmaps.
- Omitting required handles/grid parts and expecting a draggable box by default.
- Ignoring min/max crop constraints—wire `minSize` / `maxSize` per docs when enforcing upload rules.

## Registry example files

- [`example-aspect-ratio.tsx`](/registry/react/examples/image-cropper/example-aspect-ratio.tsx)
- [`example-circle-crop.tsx`](/registry/react/examples/image-cropper/example-circle-crop.tsx)
- [`example-controlled-zoom.tsx`](/registry/react/examples/image-cropper/example-controlled-zoom.tsx)
- [`example-default.tsx`](/registry/react/examples/image-cropper/example-default.tsx)
- [`example-fixed-crop-area.tsx`](/registry/react/examples/image-cropper/example-fixed-crop-area.tsx)
- [`example-initial-crop.tsx`](/registry/react/examples/image-cropper/example-initial-crop.tsx)
- [`example-min-max-size.tsx`](/registry/react/examples/image-cropper/example-min-max-size.tsx)
- [`example-zoom-limits.tsx`](/registry/react/examples/image-cropper/example-zoom-limits.tsx)
