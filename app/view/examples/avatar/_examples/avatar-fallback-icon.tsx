import { UserIcon } from "lucide-react";
import { Avatar, AvatarFallback } from "@/registry/react/components/avatar";

const AvatarFallbackIcon = () => (
  <Avatar size="lg">
    <AvatarFallback>
      <UserIcon aria-hidden />
    </AvatarFallback>
  </Avatar>
);

export default AvatarFallbackIcon;
