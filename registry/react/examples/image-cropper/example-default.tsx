import { createWavesAvatar } from "@/lib/dicebear";
import { Card, CardContent } from "@/registry/react/components/card";
import {
  ImageCropper,
  ImageCropperImage,
  ImageCropperSelection,
} from "@/registry/react/components/image-cropper";

const ImageCropperDemo = () => (
  <Card className="w-full max-w-sm pt-0 [--space:--spacing(4)]">
    <CardContent>
      <ImageCropper>
        <ImageCropperImage
          alt="Crop me"
          src={createWavesAvatar("image cropper", "green-dark")}
        />
        <ImageCropperSelection />
      </ImageCropper>
    </CardContent>
  </Card>
);

export default ImageCropperDemo;
