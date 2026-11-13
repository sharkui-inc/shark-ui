"use client";

import { useClipboard } from "@ark-ui/react/clipboard";
import { CheckIcon, ClipboardIcon } from "lucide-react";
import { Button } from "@/registry/react/components/button";
import { Input } from "@/registry/react/components/input";

const Example = () => {
  const { copied, copy, setValue, value } = useClipboard({
    defaultValue: "https://x.com/vinihvc",
  });

  return (
    <div className="flex max-w-sm items-center gap-2">
      <Input
        aria-label="URL to copy"
        onChange={(event) => setValue(event.currentTarget.value)}
        value={value}
      />

      <Button
        aria-label={copied ? "Copied" : "Copy URL"}
        onClick={copy}
        size="icon-md"
      >
        {copied ? (
          <CheckIcon aria-hidden="true" />
        ) : (
          <ClipboardIcon aria-hidden="true" />
        )}
      </Button>
    </div>
  );
};

export default Example;
