import { WavesHorizontalIcon } from "lucide-react";
import {
  QrCode,
  QrCodeFrame,
  QrCodeOverlay,
} from "@/registry/react/components/qr-code";

const Example = () => (
  <QrCode value="https://x.com/vinihvc">
    <QrCodeFrame />
    <QrCodeOverlay>
      <WavesHorizontalIcon />
    </QrCodeOverlay>
  </QrCode>
);

export default Example;
