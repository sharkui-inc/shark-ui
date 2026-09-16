import { Button } from "@/registry/react/components/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/registry/react/components/hover-card";

const HoverCardDemo = () => (
  <HoverCard>
    <HoverCardTrigger render={<Button variant="link" />}>
      Hover Here
    </HoverCardTrigger>
    <HoverCardContent className="flex w-64 flex-col gap-0.5">
      <div className="font-semibold">@nextjs</div>
      <div>The React Framework – created and maintained by @vercel.</div>
      <div className="mt-1 text-muted-foreground text-xs">
        Joined December 2021
      </div>
    </HoverCardContent>
  </HoverCard>
);

export default HoverCardDemo;
