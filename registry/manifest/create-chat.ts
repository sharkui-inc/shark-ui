import type { RegistryItemType } from "@/lib/registry";

const manifest: RegistryItemType = {
  dependencies: [
    "@ai-sdk/react",
    "@tanstack/ai",
    "@tanstack/ai-client",
    "@tanstack/ai-react",
    "ai",
  ],
  description:
    "Create deterministic local conversations for AI SDK and TanStack AI.",
  files: [
    {
      path: "registry/react/hooks/use-chat-helper.ts",
      type: "registry:hook",
    },
  ],
  name: "create-chat",
  type: "registry:lib",
};

export default manifest;
