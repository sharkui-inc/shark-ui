import { UserIcon } from "lucide-react";
import { ThumbCard, type ThumbCardProps } from "./thumb-card";

export const AvatarThumb = (props: ThumbCardProps) => (
  <ThumbCard {...props}>
    <div className="flex items-center justify-center">
      <div className="relative flex size-14 items-center justify-center rounded-full bg-primary shadow-md/5">
        <UserIcon
          aria-hidden="true"
          className="size-6 text-primary-foreground"
        />
      </div>
    </div>
  </ThumbCard>
);
