import type { RegistryItemType } from "@/lib/registry";
import { absoluteUrl } from "@/lib/url";

const manifest: RegistryItemType = {
  dependencies: ["@ai-sdk/react", "@tanstack/ai-react", "ai"],
  description: "Connect a local chat to AI SDK or TanStack AI useChat.",
  files: [
    {
      path: "registry/react/hooks/use-chat-helper.ts",
      type: "registry:hook",
    },
  ],
  name: "use-chat-helper",
  registryDependencies: [absoluteUrl("/r/create-chat.json")],
  type: "registry:hook",
};

export default manifest;
