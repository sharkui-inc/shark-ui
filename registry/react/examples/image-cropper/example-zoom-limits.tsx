import { createWavesAvatar } from "@/lib/dicebear";
import { Card } from "@/registry/react/components/card";
import {
  ImageCropper,
  ImageCropperImage,
  ImageCropperSelection,
} from "@/registry/react/components/image-cropper";

const Example = () => (
  <Card className="w-full max-w-sm [--space:--spacing(0)]">
    <ImageCropper maxZoom={2} minZoom={0.5}>
      <ImageCropperImage
        alt="Crop me"
        src={createWavesAvatar("image cropper", "green-dark")}
      />
      <ImageCropperSelection />
    </ImageCropper>
  </Card>
);

export default Example;
