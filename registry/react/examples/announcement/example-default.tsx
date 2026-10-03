import { Badge } from "@registry/react/components/badge";
import {
  Announcement,
  AnnouncementTitle,
} from "@/registry/react/components/announcement";

const AnnouncementDemo = () => (
  <Announcement>
    <Badge>Release</Badge>
    <AnnouncementTitle>
      v2.1.0: Dark mode, faster builds, and 12 new components
    </AnnouncementTitle>
  </Announcement>
);

export default AnnouncementDemo;
