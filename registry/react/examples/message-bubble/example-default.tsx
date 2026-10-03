import {
  MessageBubble,
  MessageBubbleContent,
} from "@/registry/react/components/message-bubble";

const MessageBubbleDemo = () => (
  <div className="flex w-full max-w-sm flex-col gap-3">
    <MessageBubble>
      <MessageBubbleContent>
        Need a hand with the registry build?
      </MessageBubbleContent>
    </MessageBubble>
  </div>
);

export default MessageBubbleDemo;
