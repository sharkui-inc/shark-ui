import { Marker, MarkerContent } from "@/registry/react/components/marker";
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
          <MessageBubbleContent>Pull in what I missed.</MessageBubbleContent>
        </MessageBubble>
      </MessageContent>
    </Message>
    <div className="flex flex-col gap-3">
      <Marker role="status">
        <MarkerContent className="shimmer">
          Loading earlier messages
        </MarkerContent>
      </Marker>
      <Marker role="status">
        <MarkerContent className="shimmer">Syncing the thread</MarkerContent>
      </Marker>
    </div>
    <Message align="end">
      <MessageContent>
        <MessageBubble align="end">
          <MessageBubbleContent>Starting once they land.</MessageBubbleContent>
        </MessageBubble>
      </MessageContent>
    </Message>
  </div>
);

export default Example;
