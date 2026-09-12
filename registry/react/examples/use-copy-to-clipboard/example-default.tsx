"use client";

import { CheckIcon, ClipboardIcon } from "lucide-react";
import { Button } from "@/registry/react/components/button";
import { useCopyToClipboard } from "@/registry/react/hooks/use-copy-to-clipboard";

const UseCopyToClipboardDemo = () => {
  const clipboard = useCopyToClipboard({
    defaultValue: "https://shark.vini.one",
  });

  return (
    <Button onClick={() => clipboard.copy()}>
      {clipboard.copied ? (
        <CheckIcon aria-hidden="true" />
      ) : (
        <ClipboardIcon aria-hidden="true" />
      )}
      {clipboard.copied ? "Copied" : "Copy"}
    </Button>
  );
};

export default UseCopyToClipboardDemo;
