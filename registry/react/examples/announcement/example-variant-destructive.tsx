import { TriangleAlertIcon } from "lucide-react";
import {
  Announcement,
  AnnouncementTitle,
} from "@/registry/react/components/announcement";
import { Badge } from "@/registry/react/components/badge";

const Example = () => (
  <Announcement>
    <Badge variant="destructive">
      <TriangleAlertIcon data-icon="inline-start" /> Payment failed
    </Badge>
    <AnnouncementTitle>
      Your last invoice couldn&apos;t be processed. Update your billing info.
    </AnnouncementTitle>
  </Announcement>
);

export default Example;
