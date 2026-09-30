import { Badge } from "@registry/react/components/badge";
import { ArrowUpRightIcon } from "lucide-react";
import Link from "next/link";
import {
  Announcement,
  AnnouncementTitle,
} from "@/registry/react/components/announcement";

const Example = () => (
  <Announcement asChild>
    <Link href="#">
      <Badge>Latest update</Badge>
      <AnnouncementTitle>
        New feature added
        <ArrowUpRightIcon aria-hidden />
      </AnnouncementTitle>
    </Link>
  </Announcement>
);

export default Example;
