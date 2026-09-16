import { BadgeCheck, BookmarkIcon } from "lucide-react";
import { Badge } from "@/registry/react/components/badge";
import { LocaleProvider } from "@/registry/react/components/locale";

const BadgeRtl = () => (
  <div dir="rtl">
    <LocaleProvider locale="ar-SA">
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
    </LocaleProvider>
  </div>
);

export default BadgeRtl;
