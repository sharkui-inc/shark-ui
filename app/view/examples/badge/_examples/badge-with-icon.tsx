import { BadgeCheck, BookmarkIcon } from "lucide-react";
import { Badge } from "@/registry/react/components/badge";

const BadgeWithIcon = () => (
  <div className="flex flex-wrap items-center gap-2">
    <Badge>
      <BadgeCheck data-icon="inline-start" />
      Verified
    </Badge>
    <Badge>
      Bookmark <BookmarkIcon data-icon="inline-end" />
    </Badge>
  </div>
);

export default BadgeWithIcon;
