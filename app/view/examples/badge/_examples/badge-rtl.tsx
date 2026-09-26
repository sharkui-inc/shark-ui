import { BadgeCheck, BookmarkIcon } from "lucide-react";
import { Badge } from "@/registry/react/components/badge";

const BadgeRtl = () => (
  <div className="flex flex-wrap items-center gap-2">
    <Badge>شارة</Badge>
    <Badge variant="secondary">ثانوي</Badge>
    <Badge variant="destructive">مدمر</Badge>
    <Badge variant="outline">مخطط</Badge>
    <Badge>
      <BadgeCheck data-icon="inline-start" />
      متحقق
    </Badge>
    <Badge>
      إشارة مرجعية <BookmarkIcon data-icon="inline-end" />
    </Badge>
  </div>
);

export default BadgeRtl;
