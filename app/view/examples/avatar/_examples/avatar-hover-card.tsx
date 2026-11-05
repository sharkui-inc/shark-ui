import { CalendarIcon, MapPinIcon } from "lucide-react";
import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
  AvatarImage,
} from "@/registry/react/components/avatar";
import { Button } from "@/registry/react/components/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/registry/react/components/hover-card";
import { Separator } from "@/registry/react/components/separator";

const profiles = [
  {
    handle: "vinihvc",
    initials: "VV",
    joined: "Joined Dec 2016",
    location: "São Paulo",
    name: "Vinicius Vicentini",
    role: "Design Engineer at Shark UI",
    src: "https://github.com/vinihvc.png",
  },
  {
    handle: "shadcn",
    initials: "CN",
    joined: "Joined Mar 2020",
    location: "Remote",
    name: "shadcn",
    role: "Building open source UI",
    src: "https://github.com/shadcn.png",
  },
] as const;

const AvatarHoverCard = () => (
  <AvatarGroup>
    {profiles.map((profile) => (
      <HoverCard key={profile.handle}>
        <HoverCardTrigger asChild>
          <Avatar
            aria-label={`View profile for ${profile.name}`}
            className="cursor-pointer"
            size="lg"
          >
            <AvatarImage alt={`@${profile.handle}`} src={profile.src} />
            <AvatarFallback>{profile.initials}</AvatarFallback>
          </Avatar>
        </HoverCardTrigger>
        <HoverCardContent className="w-72">
          <div className="flex flex-col gap-3">
            <div className="flex items-start justify-between gap-3">
              <Avatar size="lg">
                <AvatarImage alt={`@${profile.handle}`} src={profile.src} />
                <AvatarFallback>{profile.initials}</AvatarFallback>
              </Avatar>
              <Button size="sm" variant="outline">
                Follow
              </Button>
            </div>
            <div className="flex flex-col gap-1">
              <div>
                <h4 className="text-sm leading-none font-semibold">
                  {profile.name}
                </h4>
                <p className="text-muted-foreground text-sm">
                  @{profile.handle}
                </p>
              </div>
              <p className="text-sm">{profile.role}</p>
            </div>
            <Separator />
            <div className="text-muted-foreground flex flex-col gap-1.5 text-xs">
              <p className="flex items-center gap-1.5">
                <MapPinIcon aria-hidden="true" className="size-3.5" />
                {profile.location}
              </p>
              <p className="flex items-center gap-1.5">
                <CalendarIcon aria-hidden="true" className="size-3.5" />
                {profile.joined}
              </p>
            </div>
          </div>
        </HoverCardContent>
      </HoverCard>
    ))}
  </AvatarGroup>
);

export default AvatarHoverCard;
