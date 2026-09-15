import { createWavesAvatar } from "@/lib/dicebear";
import {
  ImageCropper,
  ImageCropperImage,
  ImageCropperSelection,
} from "@/registry/react/components/image-cropper";

const Example = () => (
  <ImageCropper className="max-w-lg" maxZoom={2} minZoom={0.5}>
    <ImageCropperImage
      alt="Crop me"
      src={createWavesAvatar("image cropper", "green-dark")}
    />
    <ImageCropperSelection />
  </ImageCropper>
);

export default Example;
