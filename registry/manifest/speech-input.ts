import type { RegistryItemType } from "@/lib/registry";
import { registryUrl } from "@/lib/url";

const manifest: RegistryItemType = {
  dependencies: ["@ark-ui/react", "lucide-react"],
  description:
    "Compound microphone recording input with waveform, duration, and browser transcription.",
  name: "speech-input",
  registryDependencies: [
    registryUrl("/r/button.json"),
    registryUrl("/r/native-select.json"),
  ],
  type: "registry:ui",
};

export default manifest;
