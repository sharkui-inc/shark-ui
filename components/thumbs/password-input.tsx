import { EyeIcon } from "lucide-react";
import { ThumbCard, type ThumbCardProps } from "./thumb-card";

export const PasswordInputThumb = (props: ThumbCardProps) => (
  <ThumbCard {...props}>
    <div className="relative flex h-8 w-48 items-center justify-between overflow-hidden rounded-lg border border-input bg-muted px-3 shadow-md/5">
      <div className="flex flex-1 items-center">
        <span
          aria-hidden
          className="relative mt-2 select-none text-muted-foreground/64 text-xl leading-none"
        >
          ********
        </span>
      </div>
      <EyeIcon aria-hidden className="size-3 text-muted-foreground/64" />
    </div>
  </ThumbCard>
);
