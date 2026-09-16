import { Clock3Icon } from "lucide-react";
import { createWavesAvatar } from "@/lib/dicebear";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/registry/react/components/accordion";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/react/components/avatar";
import { Badge } from "@/registry/react/components/badge";
import { Masonry, MasonryItem } from "@/registry/react/components/masonry";
import { ScrollArea } from "@/registry/react/components/scroll-area";

const Example = () => (
  <ScrollArea
    className="h-[min(32rem,70vh)] rounded-xl border"
    orientation="vertical"
    scrollFade
  >
    <Accordion defaultValue={["critique"]} multiple>
      <Masonry className="columns-1 p-4 [--gap:--spacing(5)] md:columns-2">
        {sessions.map((session) => (
          <MasonryItem key={session.value}>
            <AccordionItem
              className="overflow-hidden rounded-xl border bg-card shadow-xs/4"
              value={session.value}
            >
              <AccordionTrigger className="px-4 py-4">
                <span className="flex min-w-0 items-center gap-3">
                  <Avatar>
                    <AvatarImage alt={session.host} src={session.avatar} />
                    <AvatarFallback>{session.initials}</AvatarFallback>
                  </Avatar>
                  <span className="flex min-w-0 flex-col gap-0.5 text-start">
                    <span className="truncate font-medium">
                      {session.title}
                    </span>
                    <span className="truncate text-muted-foreground text-xs">
                      with {session.host}
                    </span>
                  </span>
                </span>
                <Badge className="me-2" size="sm" variant="secondary">
                  {session.day}
                </Badge>
              </AccordionTrigger>
              <AccordionContent className="border-t bg-muted/48">
                <div className="flex flex-col gap-4 px-4 pt-4 pb-5">
                  <p className="text-muted-foreground text-sm leading-6">
                    {session.description}
                  </p>
                  <div className="flex items-center gap-2 text-muted-foreground text-xs">
                    <Clock3Icon aria-hidden="true" className="size-3.5" />
                    {session.time}
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </MasonryItem>
        ))}
      </Masonry>
    </Accordion>
  </ScrollArea>
);

const sessions = [
  {
    avatar: createWavesAvatar("Elena Rossi", "purple"),
    day: "Tuesday",
    description:
      "Bring one work-in-progress and leave with a sharper next question. This is a gentle critique for interfaces still finding their shape.",
    host: "Elena Rossi",
    initials: "ER",
    time: "10:00–10:45 · Studio 2",
    title: "Open critique",
    value: "critique",
  },
  {
    avatar: createWavesAvatar("Marcel Green", "green-dark"),
    day: "Wednesday",
    description:
      "A practical walkthrough of the handoff moments that create confidence for both designers and engineers.",
    host: "Marcel Green",
    initials: "MG",
    time: "14:30–15:15 · Workshop room",
    title: "The handoff that holds",
    value: "handoff",
  },
  {
    avatar: createWavesAvatar("Priya Shah", "rose"),
    day: "Thursday",
    description:
      "Share a customer conversation, a research fragment, or an observation that has stayed with you. We will look for the signal together.",
    host: "Priya Shah",
    initials: "PS",
    time: "11:00–11:40 · Listening room",
    title: "Research tea",
    value: "research",
  },
  {
    avatar: createWavesAvatar("Theo Martin", "blue"),
    day: "Friday",
    description:
      "A relaxed studio hour for shaping a tiny prototype with someone from outside your usual project team.",
    host: "Theo Martin",
    initials: "TM",
    time: "16:00–17:00 · Common table",
    title: "Prototype pairing",
    value: "prototype",
  },
];

export default Example;
