import { MicIcon } from "lucide-react";
import { ThumbCard, type ThumbCardProps } from "./thumb-card";

export const SpeechInputThumb = (props: ThumbCardProps) => (
  <ThumbCard {...props}>
    <div className="flex w-full items-center justify-center">
      <div className="grid size-9 place-items-center rounded-full bg-primary shadow-md/5">
        <MicIcon
          aria-hidden="true"
          className="size-4 text-primary-foreground"
        />
      </div>
    </div>
  </ThumbCard>
);
