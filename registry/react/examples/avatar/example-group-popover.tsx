import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
  AvatarImage,
} from "@/registry/react/components/avatar";
import { Button } from "@/registry/react/components/button";
import {
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverFooter,
  PopoverHeader,
  PopoverTrigger,
} from "@/registry/react/components/popover";
import { Separator } from "@/registry/react/components/separator";

const visible = [
  {
    initials: "VV",
    src: "https://github.com/vinihvc.png",
    username: "vinihvc",
  },
  {
    initials: "SA",
    src: "https://github.com/segunadebayo.png",
    username: "segunadebayo",
  },
  {
    initials: "PV",
    src: "https://github.com/pasqualevitiello.png",
    username: "pasqualevitiello",
  },
  {
    initials: "CN",
    src: "https://github.com/shadcn.png",
    username: "shadcn",
  },
] as const;

const moreMembers = [
  { initials: "SC", name: "Sara Chen", role: "Product Design" },
  { initials: "VC", name: "Vera Costa", role: "Engineering" },
  { initials: "NJ", name: "Noah Jung", role: "Research" },
  { initials: "RT", name: "Riley Torres", role: "Support" },
  { initials: "TS", name: "Talia Singh", role: "Marketing" },
] as const;

const Example = () => (
  <AvatarGroup>
    {visible.map((person) => (
      <Avatar key={person.username}>
        <AvatarImage alt={`@${person.username}`} src={person.src} />
        <AvatarFallback>{person.initials}</AvatarFallback>
      </Avatar>
    ))}
    <Popover positioning={{ placement: "bottom-end" }}>
      <AvatarGroupCount asChild>
        <PopoverTrigger asChild>
          <Button
            aria-label="Show 5 more members"
            className="size-8"
            pill
            size="icon-md"
            variant="ghost"
          >
            +5
          </Button>
        </PopoverTrigger>
      </AvatarGroupCount>

      <PopoverContent className="w-72">
        <PopoverHeader
          description="People with access to this project"
          title="5 more members"
        />
        <Separator />
        <PopoverBody className="flex flex-col gap-1 p-2">
          {moreMembers.map((member) => (
            <div
              className="flex items-center gap-3 rounded-lg px-2 py-1.5"
              key={member.initials}
            >
              <Avatar size="sm">
                <AvatarFallback>{member.initials}</AvatarFallback>
              </Avatar>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm leading-none font-medium">
                  {member.name}
                </p>
                <p className="text-muted-foreground truncate text-xs">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </PopoverBody>
        <PopoverFooter>
          <Button className="w-full" size="sm" variant="outline">
            View all members
          </Button>
        </PopoverFooter>
      </PopoverContent>
    </Popover>
  </AvatarGroup>
);

export default Example;
