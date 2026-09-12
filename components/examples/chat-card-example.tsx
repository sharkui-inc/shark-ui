"use client";

import { ArrowUpIcon, InfoIcon } from "lucide-react";
import {
  useEffect,
  useEffectEvent,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { cn } from "@/lib/utils";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/react/components/avatar";
import { Button } from "@/registry/react/components/button";
import { ButtonGroup } from "@/registry/react/components/button-group";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/registry/react/components/card";
import {
  Dialog,
  DialogBody,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
} from "@/registry/react/components/dialog";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/registry/react/components/input-group";
import {
  ScrollArea,
  useScrollArea,
} from "@/registry/react/components/scroll-area";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/registry/react/components/tooltip";

interface ChatMessage {
  content: string;
  role: "agent" | "user";
}

const initialMessages: ChatMessage[] = [
  {
    content: "Hi, how can I help you today?",
    role: "agent",
  },
  {
    content: "Hey, I'm having trouble with my account.",
    role: "user",
  },
  {
    content: "What seems to be the problem?",
    role: "agent",
  },
  {
    content: "I can't log in.",
    role: "user",
  },
];

export const ChatCardExample = (props: React.ComponentProps<"div">) => {
  const [messages, setMessages] = useState(initialMessages);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const replyTimeoutRef = useRef<number>(0);
  const inputLength = input.trim().length;

  const threadSize = messages.length + Number(isTyping);

  useEffect(
    () => () => {
      window.clearTimeout(replyTimeoutRef.current);
    },
    []
  );

  const sendMessage = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (inputLength === 0 || isTyping) {
      return;
    }

    const content = input.trim();

    setMessages((current) => [...current, { content, role: "user" }].slice(-8));
    setInput("");
    setIsTyping(true);

    window.clearTimeout(replyTimeoutRef.current);
    replyTimeoutRef.current = window.setTimeout(() => {
      setMessages((current) =>
        [...current, { content: replyFor(content), role: "agent" }].slice(-8)
      );
      setIsTyping(false);
    }, 700);
  };

  return (
    <Card {...props}>
      <CardHeader className="flex flex-row items-center justify-between gap-2">
        <div className="flex items-center gap-4">
          <Avatar>
            <AvatarImage
              alt="Vinicius Vicentini"
              src="https://github.com/vinihvc.png"
            />
            <AvatarFallback>VV</AvatarFallback>
          </Avatar>
          <div className="flex flex-col gap-0.5">
            <p className="font-medium text-sm leading-none">
              Vinicius Vicentini
            </p>
            <p className="text-muted-foreground text-xs">m@example.com</p>
          </div>
        </div>
        <ButtonGroup>
          <Dialog>
            <Tooltip>
              <TooltipTrigger asChild>
                <span className="inline-flex">
                  <DialogTrigger asChild>
                    <Button
                      aria-label="Agent details"
                      size="icon-sm"
                      variant="ghost"
                    >
                      <InfoIcon aria-hidden="true" />
                    </Button>
                  </DialogTrigger>
                </span>
              </TooltipTrigger>
              <TooltipContent>Agent details</TooltipContent>
            </Tooltip>
            <DialogContent>
              <DialogHeader
                description="Support agent for account and billing questions."
                title="Vinicius Vicentini"
              />
              <DialogBody>
                <p className="text-sm">
                  Typically replies in a few seconds. This preview uses canned
                  answers so you can try the thread without a backend.
                </p>
              </DialogBody>
              <DialogFooter>
                <DialogClose asChild>
                  <Button>Close</Button>
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </ButtonGroup>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-64" orientation="vertical" scrollFade>
          <FollowThread threadSize={threadSize} />
          <div className="flex flex-col gap-4">
            {messages.map((message, index) => {
              const key = `${message.role}-${index}`;

              return (
                <div
                  className={cn(
                    "flex w-max max-w-[75%] flex-col gap-2 rounded-lg px-3 py-2 text-sm",
                    message.role === "user"
                      ? "ms-auto bg-primary text-primary-foreground"
                      : "bg-muted"
                  )}
                  key={key}
                >
                  {message.content}
                </div>
              );
            })}
            {isTyping ? (
              <div className="flex w-max max-w-[75%] flex-col gap-2 rounded-lg bg-muted px-3 py-2 text-muted-foreground text-sm">
                Typing…
              </div>
            ) : null}
          </div>
        </ScrollArea>
      </CardContent>
      <CardFooter>
        <form className="relative w-full" onSubmit={sendMessage}>
          <InputGroup>
            <InputGroupInput
              autoComplete="off"
              onChange={(event) => setInput(event.target.value)}
              placeholder="Type your message..."
              value={input}
            />
            <InputGroupAddon align="inline-end">
              <Tooltip>
                <TooltipTrigger asChild>
                  <InputGroupButton
                    aria-label="Send"
                    className="rounded-sm"
                    disabled={isTyping}
                    size="icon-xs"
                    type="submit"
                    variant="default"
                  >
                    <ArrowUpIcon aria-hidden />
                  </InputGroupButton>
                </TooltipTrigger>
                <TooltipContent>Send</TooltipContent>
              </Tooltip>
            </InputGroupAddon>
          </InputGroup>
        </form>
      </CardFooter>
    </Card>
  );
};

const FollowThread = ({ threadSize }: { threadSize: number }) => {
  const { scrollToEdge } = useScrollArea();

  const followThread = useEffectEvent((size: number) => {
    if (size < 1) {
      return;
    }

    scrollToEdge({ edge: "bottom" });
  });

  useLayoutEffect(() => {
    followThread(threadSize);
  }, [threadSize]);

  return null;
};

const replyFor = (message: string) => {
  const normalized = message.toLowerCase();

  if (normalized.includes("login") || normalized.includes("log in")) {
    return "Try resetting your password from the sign-in screen. I can walk you through it.";
  }

  if (normalized.includes("account") || normalized.includes("billing")) {
    return "I can see the account. Which part is blocked: sign-in, billing, or a workspace invite?";
  }

  return "Got it. Tell me a bit more and I’ll point you to the next step.";
};
