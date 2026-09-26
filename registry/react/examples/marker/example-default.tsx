import { Marker, MarkerContent } from "@/registry/react/components/marker";
import { Message, MessageContent } from "@/registry/react/components/message";
import {
  MessageBubble,
  MessageBubbleContent,
} from "@/registry/react/components/message-bubble";

const MarkerDemo = () => (
  <div className="flex w-full max-w-sm flex-col gap-6">
    <Message>
      <MessageContent>
        <MessageBubble variant="secondary">
          <MessageBubbleContent>
            Can we pick this up tomorrow?
          </MessageBubbleContent>
        </MessageBubble>
      </MessageContent>
    </Message>
    <Marker variant="separator">
      <MarkerContent>Today</MarkerContent>
    </Marker>
    <Message align="end">
      <MessageContent>
        <MessageBubble align="end">
          <MessageBubbleContent>
            Yes. Starting with the summary.
          </MessageBubbleContent>
        </MessageBubble>
      </MessageContent>
    </Message>
  </div>
);

export default MarkerDemo;
