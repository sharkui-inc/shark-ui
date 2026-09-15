import { createWavesAvatar } from "@/lib/dicebear";
import {
  ImageCropper,
  ImageCropperImage,
  ImageCropperSelection,
} from "@/registry/react/components/image-cropper";

const ImageCropperDemo = () => (
  <ImageCropper className="aspect-video w-full max-w-lg">
    <ImageCropperImage
      alt="Crop me"
      src={createWavesAvatar("image cropper", "green-dark")}
    />
    <ImageCropperSelection />
  </ImageCropper>
);

export default ImageCropperDemo;
