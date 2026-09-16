import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/react/components/avatar";

const AvatarSizes = () => (
  <div className="flex flex-row flex-wrap items-center gap-4">
    <Avatar size="sm">
      <AvatarImage src="https://github.com/vinihvc.png" />
      <AvatarFallback>VV</AvatarFallback>
    </Avatar>
    <Avatar size="md">
      <AvatarImage src="https://github.com/vinihvc.png" />
      <AvatarFallback>VV</AvatarFallback>
    </Avatar>
    <Avatar size="lg">
      <AvatarImage src="https://github.com/vinihvc.png" />
      <AvatarFallback>VV</AvatarFallback>
    </Avatar>
  </div>
);

export default AvatarSizes;
