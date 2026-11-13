import {
  ImageCropper,
  ImageCropperImage,
  ImageCropperSelection,
} from "@/registry/react/components/image-cropper";

const ImageCropperDemo = () => (
  <ImageCropper className="max-w-sm">
    <ImageCropperImage
      alt="Crop me"
      src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200"
    />
    <ImageCropperSelection />
  </ImageCropper>
);

export default ImageCropperDemo;
