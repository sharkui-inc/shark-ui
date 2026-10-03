import { PlusIcon } from "lucide-react";
import {
  Avatar,
  AvatarBadge,
  AvatarFallback,
  AvatarImage,
} from "@/registry/react/components/avatar";

const AvatarBadgeWithIcon = () => (
  <Avatar>
    <AvatarImage alt="@vinihvc" src="https://github.com/vinihvc.png" />
    <AvatarFallback>VV</AvatarFallback>
    <AvatarBadge>
      <PlusIcon aria-hidden />
    </AvatarBadge>
  </Avatar>
);

export default AvatarBadgeWithIcon;
