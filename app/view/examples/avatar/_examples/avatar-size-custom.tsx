import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/react/components/avatar";

const AvatarSizeCustom = () => (
  <Avatar className="size-16">
    <AvatarImage alt="@vinihvc" src="https://github.com/vinihvc.png" />
    <AvatarFallback>VV</AvatarFallback>
  </Avatar>
);

export default AvatarSizeCustom;
