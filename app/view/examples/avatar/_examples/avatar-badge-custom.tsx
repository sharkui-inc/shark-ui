import {
  Avatar,
  AvatarBadge,
  AvatarFallback,
  AvatarImage,
} from "@/registry/react/components/avatar";

const AvatarBadgeCustom = () => (
  <Avatar>
    <AvatarImage alt="@shadcn" src="https://github.com/shadcn.png" />
    <AvatarFallback>CN</AvatarFallback>
    <AvatarBadge className="bg-green-500" />
  </Avatar>
);

export default AvatarBadgeCustom;
