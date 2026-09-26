import { PlusIcon } from "lucide-react";
import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
  AvatarImage,
} from "@/registry/react/components/avatar";
import { Button } from "@/registry/react/components/button";
import {
  State,
  StateContent,
  StateDescription,
  StateHeader,
  StateMedia,
  StateTitle,
} from "@/registry/react/components/state";

const Example = () => (
  <State>
    <StateHeader>
      <StateMedia>
        <AvatarGroup className="**:data-[slot=avatar]:size-12 **:data-[slot=avatar]:grayscale">
          <Avatar>
            <AvatarImage alt="@shadcn" src="https://github.com/vinihvc.png" />
            <AvatarFallback>VV</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarImage alt="@shadcn" src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarImage
              alt="@segunadebayo"
              src="https://github.com/segunadebayo.png"
            />
            <AvatarFallback>SA</AvatarFallback>
          </Avatar>
        </AvatarGroup>
      </StateMedia>
      <StateTitle asChild>
        <h2>No Team Members</h2>
      </StateTitle>
      <StateDescription>
        Invite your team to collaborate on this project.
      </StateDescription>
    </StateHeader>
    <StateContent>
      <Button size="sm">
        <PlusIcon aria-hidden data-icon="inline-start" />
        Invite Members
      </Button>
    </StateContent>
  </State>
);

export default Example;
