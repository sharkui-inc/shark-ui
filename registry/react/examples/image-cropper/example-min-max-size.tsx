import {
  ImageCropper,
  ImageCropperImage,
  ImageCropperSelection,
} from "@/registry/react/components/image-cropper";

const Example = () => (
  <ImageCropper
    className="max-w-sm"
    maxHeight={160}
    maxWidth={280}
    minHeight={80}
    minWidth={80}
  >
    <ImageCropperImage
      alt="Crop me"
      src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200"
    />
    <ImageCropperSelection />
  </ImageCropper>
);

export default Example;
