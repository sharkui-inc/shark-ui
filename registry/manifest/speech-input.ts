import type { RegistryItemType } from "@/lib/registry";
import { absoluteUrl } from "@/lib/url";

const manifest: RegistryItemType = {
  dependencies: ["lucide-react"],
  description:
    "Compound microphone recording input with waveform, duration, and browser transcription.",
  name: "speech-input",
  registryDependencies: [
    absoluteUrl("/r/button.json"),
    absoluteUrl("/r/native-select.json"),
  ],
  type: "registry:ui",
};

export default manifest;
