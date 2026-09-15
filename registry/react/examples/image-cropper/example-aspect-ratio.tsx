import { createWavesAvatar } from "@/lib/dicebear";
import {
  ImageCropper,
  ImageCropperImage,
  ImageCropperSelection,
} from "@/registry/react/components/image-cropper";

const Example = () => (
  <ImageCropper aspectRatio={16 / 9} className="max-w-lg">
    <ImageCropperImage
      alt="Crop me"
      src={createWavesAvatar("image cropper", "green-dark")}
    />
    <ImageCropperSelection />
  </ImageCropper>
);

export default Example;
