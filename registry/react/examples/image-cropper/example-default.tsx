import {
  ImageCropper,
  ImageCropperImage,
  ImageCropperSelection,
} from "@/registry/react/components/image-cropper";

const ImageCropperDemo = () => (
  <ImageCropper className="aspect-video w-full max-w-lg">
    <ImageCropperImage
      alt="Crop me"
      src="https://images.unsplash.com/photo-1662692735672-544412d65934?w=600&auto=format"
    />
    <ImageCropperSelection />
  </ImageCropper>
);

export default ImageCropperDemo;
