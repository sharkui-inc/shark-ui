import {
  Avatar,
  AvatarBadge,
  AvatarFallback,
  AvatarImage,
} from "@/registry/react/components/avatar";

const AvatarWithStatus = () => (
  <div className="flex flex-row flex-wrap items-center gap-2">
    <Avatar>
      <AvatarImage alt="@vinihvc" src="https://github.com/vinihvc.png" />
      <AvatarFallback>VV</AvatarFallback>
      <AvatarBadge variant="success" />
    </Avatar>

    <Avatar>
      <AvatarImage alt="@shadcn" src="https://github.com/shadcn.png" />
      <AvatarFallback>CN</AvatarFallback>
      <AvatarBadge variant="warning" />
    </Avatar>

    <Avatar>
      <AvatarImage
        alt="@pasqualevitiello"
        src="https://github.com/pasqualevitiello.png"
      />
      <AvatarFallback>PV</AvatarFallback>
      <AvatarBadge variant="destructive" />
    </Avatar>
  </div>
);

export default AvatarWithStatus;
