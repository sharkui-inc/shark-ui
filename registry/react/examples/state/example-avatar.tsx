import { WavesHorizontalIcon } from "lucide-react";
import { Avatar, AvatarFallback } from "@/registry/react/components/avatar";
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
        <Avatar className="size-12">
          <AvatarFallback>
            <WavesHorizontalIcon />
          </AvatarFallback>
        </Avatar>
      </StateMedia>
      <StateTitle asChild>
        <h2>We are working on it</h2>
      </StateTitle>
      <StateDescription>
        You can leave a message to notify us or try again later.
      </StateDescription>
    </StateHeader>
    <StateContent>
      <Button size="sm">Leave Message</Button>
    </StateContent>
  </State>
);

export default Example;
