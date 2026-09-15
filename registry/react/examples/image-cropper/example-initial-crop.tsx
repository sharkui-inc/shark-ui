import { createWavesAvatar } from "@/lib/dicebear";
import {
  ImageCropper,
  ImageCropperImage,
  ImageCropperSelection,
} from "@/registry/react/components/image-cropper";

const Example = () => (
  <ImageCropper
    className="max-w-lg"
    initialCrop={{
      height: 150,
      width: 200,
      x: 100,
      y: 80,
    }}
  >
    <ImageCropperImage
      alt="Crop me"
      src={createWavesAvatar("image cropper", "green-dark")}
    />
    <ImageCropperSelection />
  </ImageCropper>
);

export default Example;
