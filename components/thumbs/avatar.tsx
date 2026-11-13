import { UserIcon } from "lucide-react";
import { ThumbCard, type ThumbCardProps } from "./thumb-card";

export const AvatarThumb = (props: ThumbCardProps) => (
  <ThumbCard {...props}>
    <div className="flex items-center justify-center">
      <div className="bg-primary relative flex size-14 items-center justify-center rounded-full shadow-sm/4">
        <UserIcon
          aria-hidden="true"
          className="text-primary-foreground size-6"
        />
      </div>
    </div>
  </ThumbCard>
);
