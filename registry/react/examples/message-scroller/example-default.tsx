import { SharkIcon } from "@/components/icons/shark";
import { Avatar, AvatarFallback } from "@/registry/react/components/avatar";
import { Marker, MarkerContent } from "@/registry/react/components/marker";
import {
  Message,
  MessageAvatar,
  MessageContent,
  MessageHeader,
} from "@/registry/react/components/message";
import {
  MessageBubble,
  MessageBubbleContent,
} from "@/registry/react/components/message-bubble";
import {
  MessageScroller,
  MessageScrollerButton,
  MessageScrollerContent,
  MessageScrollerItem,
  MessageScrollerViewport,
} from "@/registry/react/components/message-scroller";

const MessageScrollerDemo = () => (
  <MessageScroller className="h-96 w-full max-w-md rounded-xl border">
    <MessageScrollerViewport className="px-4 py-6">
      <MessageScrollerContent>
        <MessageScrollerItem>
          <Marker variant="separator">
            <MarkerContent>Today</MarkerContent>
          </Marker>
        </MessageScrollerItem>
        {turns.map((turn) => {
          const isYou = turn.from === "you";

          return (
            <MessageScrollerItem key={turn.text}>
              <Message align={isYou ? "end" : "start"}>
                {isYou ? null : (
                  <MessageAvatar>
                    <Avatar size="sm">
                      <AvatarFallback>
                        <SharkIcon />
                      </AvatarFallback>
                    </Avatar>
                  </MessageAvatar>
                )}
                <MessageContent>
                  {isYou ? null : <MessageHeader>Shark AI</MessageHeader>}
                  <MessageBubble
                    align={isYou ? "end" : "start"}
                    variant={isYou ? "default" : "secondary"}
                  >
                    <MessageBubbleContent>{turn.text}</MessageBubbleContent>
                  </MessageBubble>
                </MessageContent>
              </Message>
            </MessageScrollerItem>
          );
        })}
      </MessageScrollerContent>
    </MessageScrollerViewport>
    <MessageScrollerButton />
  </MessageScroller>
);

const turns = [
  { from: "ai", text: "Morning. Did the preview deploy?" },
  { from: "you", text: "Yes. Checking the chat primitives next." },
  { from: "ai", text: "Scroller first. Jump buttons if I scroll away." },
  { from: "you", text: "Ark ScrollArea, no extra headless package." },
  { from: "ai", text: "Nice. Marker for the date break?" },
  { from: "you", text: "Separator variant. Coming up." },
  { from: "ai", text: "Attachments too, if you still have time." },
  { from: "you", text: "File card is in. Image cards after lunch." },
  { from: "ai", text: "Ship a draft when the docs page renders." },
  { from: "you", text: "On it." },
] as const;

export default MessageScrollerDemo;
