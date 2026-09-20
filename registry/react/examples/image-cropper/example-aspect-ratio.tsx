import { Card } from "@/registry/react/components/card";
import {
  ImageCropper,
  ImageCropperImage,
  ImageCropperSelection,
} from "@/registry/react/components/image-cropper";

const Example = () => (
  <Card className="w-full max-w-sm [--space:--spacing(0)]">
    <ImageCropper aspectRatio={16 / 9}>
      <ImageCropperImage
        alt="Crop me"
        src="https://api.dicebear.com/10.x/waves/svg?backgroundColor=eef4e6&scale=1.2&seed=image+cropper&waveColor=1a6b5c"
      />
      <ImageCropperSelection />
    </ImageCropper>
  </Card>
);

export default Example;
