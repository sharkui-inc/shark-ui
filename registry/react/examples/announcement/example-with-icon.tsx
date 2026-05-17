import { Badge } from "@registry/react/components/badge";
import { SparklesIcon } from "lucide-react";
import {
  Announcement,
  AnnouncementTitle,
} from "@/registry/react/components/announcement";

const Example = () => (
  <Announcement>
    <Badge variant="info">
      <SparklesIcon />
      New features
    </Badge>
    <AnnouncementTitle>
      Dark mode and 12 new components available
    </AnnouncementTitle>
  </Announcement>
);

export default Example;
