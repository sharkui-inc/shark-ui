import { EyeIcon } from "lucide-react";
import { ThumbCard, type ThumbCardProps } from "./thumb-card";

export const PasswordInputThumb = (props: ThumbCardProps) => (
  <ThumbCard {...props}>
    <div className="border-input bg-muted relative flex h-8 w-48 items-center justify-between overflow-hidden rounded-lg border px-3 shadow-sm/4">
      <div className="flex flex-1 items-center">
        <span
          aria-hidden
          className="text-muted-foreground/64 relative mt-2 text-xl leading-none select-none"
        >
          ********
        </span>
      </div>
      <EyeIcon aria-hidden className="text-muted-foreground/64 size-3" />
    </div>
  </ThumbCard>
);
