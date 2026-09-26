import { GitBranchIcon, RotateCcwIcon } from "lucide-react";
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
          <MessageBubbleContent>The change is in.</MessageBubbleContent>
        </MessageBubble>
      </MessageContent>
    </Message>
    <div className="flex flex-col gap-3">
      <Marker asChild>
        <a href="#pull-request">
          <MarkerIcon>
            <GitBranchIcon />
          </MarkerIcon>
          <MarkerContent>View the pull request</MarkerContent>
        </a>
      </Marker>
      <Marker asChild>
        <button type="button">
          <MarkerIcon>
            <RotateCcwIcon />
          </MarkerIcon>
          <MarkerContent>Revert this change</MarkerContent>
        </button>
      </Marker>
    </div>
    <Message align="end">
      <MessageContent>
        <MessageBubble align="end">
          <MessageBubbleContent>Opening the request.</MessageBubbleContent>
        </MessageBubble>
      </MessageContent>
    </Message>
  </div>
);

export default Example;
