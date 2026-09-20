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
          src="https://api.dicebear.com/10.x/waves/svg?backgroundColor=eef4e6&scale=1.2&seed=image+cropper&waveColor=1a6b5c"
        />
        <ImageCropperSelection />
      </ImageCropper>
    </CardContent>
  </Card>
);

export default ImageCropperDemo;
