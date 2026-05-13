import {
  ImageCropper,
  ImageCropperImage,
  ImageCropperSelection,
} from "@/registry/react/components/image-cropper";

const Example = () => (
  <ImageCropper
    className="max-w-lg"
    maxHeight={160}
    maxWidth={280}
    minHeight={80}
    minWidth={80}
  >
    <ImageCropperImage
      alt="Crop me"
      src="https://images.unsplash.com/photo-1662692735672-544412d65934?w=600&auto=format"
    />
    <ImageCropperSelection />
  </ImageCropper>
);

export default Example;
