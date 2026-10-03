import { ArrowUpRightIcon } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/registry/react/components/badge";

const BadgeWithLink = () => (
  <Badge asChild>
    <Link href="/">
      Open Link <ArrowUpRightIcon data-icon="inline-end" />
    </Link>
  </Badge>
);

export default BadgeWithLink;
