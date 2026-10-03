import { CalendarIcon } from "lucide-react";
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
            Who else is on this thread?
          </MessageBubbleContent>
        </MessageBubble>
      </MessageContent>
    </Message>
    <Marker>
      <MarkerIcon>
        <CalendarIcon />
      </MarkerIcon>
      <MarkerContent>Ada joined the conversation</MarkerContent>
    </Marker>
    <Message align="end">
      <MessageContent>
        <MessageBubble align="end">
          <MessageBubbleContent>She just came in.</MessageBubbleContent>
        </MessageBubble>
      </MessageContent>
    </Message>
  </div>
);

export default Example;
