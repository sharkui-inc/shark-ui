import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/react/components/avatar";

const Example = () => (
  <Avatar size="sm">
    <AvatarImage alt="@vinihvc" src="https://github.com/vinihvc.png" />
    <AvatarFallback>VV</AvatarFallback>
  </Avatar>
);

export default Example;
