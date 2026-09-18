import { createWavesAvatar } from "@/lib/dicebear";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardMedia,
  CardTitle,
} from "@/registry/react/components/card";
import { LinkBox, LinkOverlay } from "@/registry/react/components/link-overlay";
import { Message, MessageContent } from "@/registry/react/components/message";
import {
  MessageBubble,
  MessageBubbleContent,
} from "@/registry/react/components/message-bubble";

const Example = () => (
  <div className="flex w-full max-w-sm flex-col">
    <Message align="end">
      <MessageContent>
        <LinkBox asChild>
          <Card className="w-full max-w-64 [--space:--spacing(3)]">
            <CardMedia className="h-32 bg-muted" variant="image">
              <img
                alt=""
                height={144}
                src={createWavesAvatar("Tailwind Play", "green-dark")}
                width={256}
              />
            </CardMedia>
            <CardHeader>
              <LinkOverlay asChild>
                <CardTitle asChild>
                  <a href="https://play.tailwindcss.com">Tailwind Play</a>
                </CardTitle>
              </LinkOverlay>
              <CardDescription>
                An advanced online playground for Tailwind CSS that lets you use
                all of your custom config.
              </CardDescription>
            </CardHeader>
            <CardContent>play.tailwindcss.com</CardContent>
          </Card>
        </LinkBox>
        <MessageBubble align="end">
          <MessageBubbleContent asChild>
            <a href="https://play.tailwindcss.com">
              https://play.tailwindcss.com
            </a>
          </MessageBubbleContent>
        </MessageBubble>
      </MessageContent>
    </Message>
  </div>
);

export default Example;
