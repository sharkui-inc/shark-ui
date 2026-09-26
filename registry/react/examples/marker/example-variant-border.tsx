import { GitBranchIcon } from "lucide-react";
import {
  Marker,
  MarkerContent,
  MarkerIcon,
} from "@/registry/react/components/marker";
import { Message, MessageContent } from "@/registry/react/components/message";
import {
  MessageBubble,
  MessageBubbleContent,
} from "@/registry/react/components/message-bubble";

const Example = () => (
  <div className="flex w-full max-w-sm flex-col gap-6">
    <Message>
      <MessageContent>
        <MessageBubble variant="secondary">
          <MessageBubbleContent>
            Which branch should I read?
          </MessageBubbleContent>
        </MessageBubble>
      </MessageContent>
    </Message>
    <Marker variant="border">
      <MarkerIcon>
        <GitBranchIcon />
      </MarkerIcon>
      <MarkerContent>Switched to release-candidate</MarkerContent>
    </Marker>
    <Message align="end">
      <MessageContent>
        <MessageBubble align="end">
          <MessageBubbleContent>I'll start there.</MessageBubbleContent>
        </MessageBubble>
      </MessageContent>
    </Message>
  </div>
);

export default Example;
