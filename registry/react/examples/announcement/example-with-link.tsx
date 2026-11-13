import { ArrowUpRightIcon } from "lucide-react";
import Link from "next/link";
import {
  Announcement,
  AnnouncementTitle,
} from "@/registry/react/components/announcement";
import { Badge } from "@/registry/react/components/badge";

const Example = () => (
  <Announcement asChild>
    <Link href="#">
      <Badge>Latest update</Badge>
      <AnnouncementTitle>
        New feature added
        <ArrowUpRightIcon aria-hidden="true" />
      </AnnouncementTitle>
    </Link>
  </Announcement>
);

export default Example;
