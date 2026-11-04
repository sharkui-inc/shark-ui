import { ArrowUpRightIcon } from "lucide-react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/react/components/avatar";
import { Badge } from "@/registry/react/components/badge";
import { Button } from "@/registry/react/components/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleIndicator,
  CollapsibleTrigger,
} from "@/registry/react/components/collapsible";
import { Masonry, MasonryItem } from "@/registry/react/components/masonry";
import { ScrollArea } from "@/registry/react/components/scroll-area";

const Example = () => (
  <div className="w-full p-4 sm:p-6">
    <ScrollArea
      className="h-[min(32rem,70vh)] min-w-0 rounded-xl border"
      orientation="vertical"
      scrollFade
    >
      <Masonry className="columns-1 gap-x-4 gap-y-6 p-4 sm:columns-2 lg:columns-3">
        {projects.map((project) => (
          <MasonryItem key={project.title}>
            <Collapsible defaultOpen={project.defaultOpen}>
              <section className="bg-muted/48 overflow-hidden rounded-xl border shadow-xs/4">
                <div className="flex flex-col gap-4 p-4">
                  <div className="flex items-start justify-between gap-3">
                    <Avatar size="lg">
                      <AvatarImage alt={project.owner} src={project.avatar} />
                      <AvatarFallback>{project.initials}</AvatarFallback>
                    </Avatar>
                    <Badge size="sm" variant={project.statusVariant}>
                      {project.status}
                    </Badge>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3 className="font-heading text-lg font-semibold tracking-tight">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-6">
                      {project.summary}
                    </p>
                  </div>
                  <CollapsibleTrigger asChild>
                    <Button className="w-full" variant="outline">
                      Project details
                      <CollapsibleIndicator />
                    </Button>
                  </CollapsibleTrigger>
                </div>
                <CollapsibleContent className="bg-background border-t">
                  <div className="flex flex-col gap-3 p-4">
                    <p className="text-muted-foreground text-sm leading-6">
                      {project.details}
                    </p>
                    <a
                      className="text-primary focus-visible:ring-ring/24 inline-flex w-fit items-center gap-1.5 text-sm underline-offset-4 hover:underline focus-visible:ring-2 focus-visible:outline-hidden"
                      href="#"
                    >
                      Open project
                      <ArrowUpRightIcon aria-hidden className="size-3.5" />
                    </a>
                  </div>
                </CollapsibleContent>
              </section>
            </Collapsible>
          </MasonryItem>
        ))}
      </Masonry>
    </ScrollArea>
  </div>
);

const projects = [
  {
    avatar:
      "https://api.dicebear.com/10.x/waves/svg?backgroundColor=faf6e0&scale=1.2&seed=Mara+Kim&waveColor=ca8a04",
    defaultOpen: true,
    details:
      "The team is refining the first-run flow after five customer calls. The next review focuses on the invitation step and empty state.",
    initials: "MK",
    owner: "Mara Kim",
    status: "In review",
    statusVariant: "secondary" as const,
    summary: "A first ritual for new teams.",
    title: "Welcome",
  },
  {
    avatar:
      "https://api.dicebear.com/10.x/waves/svg?backgroundColor=e8f1fb&scale=1.2&seed=Ravi+Singh&waveColor=2b6cb0",
    defaultOpen: false,
    details:
      "We are testing the library with two product teams and documenting the smallest set of patterns they reach for repeatedly.",
    initials: "RS",
    owner: "Ravi Singh",
    status: "Exploring",
    statusVariant: "info" as const,
    summary:
      "A compact pattern library for the decisions that need a shared language, clearer ownership, and a record that helps the next team begin without starting from scratch.",
    title: "Pattern library for shared decisions",
  },
  {
    avatar:
      "https://api.dicebear.com/10.x/waves/svg?backgroundColor=f8e8ee&scale=1.2&seed=Amina+Cole&waveColor=e11d48",
    defaultOpen: false,
    details:
      "The next session pairs community questions with working prototypes, so each conversation ends with something tangible to test.",
    initials: "AC",
    owner: "Amina Cole",
    status: "Planning",
    statusVariant: "outline" as const,
    summary: "Monthly evening for thoughtful products.",
    title: "Onda sessions",
  },
  {
    avatar:
      "https://api.dicebear.com/10.x/waves/svg?backgroundColor=eef4e6&scale=1.2&seed=Leo+Martin&waveColor=1a6b5c",
    defaultOpen: false,
    details:
      "We are gathering the small operational practices that help makers protect deep work without disappearing from their collaborators.",
    initials: "LM",
    owner: "Leo Martin",
    status: "Shipping",
    statusVariant: "success" as const,
    summary:
      "A collection of small tools, prompts, and shared routines for making a busy week feel more intentional without making collaboration harder.",
    title: "Focus kit for a busy week",
  },
  {
    avatar:
      "https://api.dicebear.com/10.x/waves/svg?backgroundColor=f3e8fb&scale=1.2&seed=Maya+Chen&waveColor=7c3aed",
    defaultOpen: false,
    details:
      "Capture the coast dawn and studio desk tiles that keep showing up in customer moodboards, then publish a short guide for teams building their first gallery.",
    initials: "MC",
    owner: "Maya Chen",
    status: "Drafting",
    statusVariant: "secondary" as const,
    summary: "Moodboard guide.",
    title: "Gallery starter",
  },
  {
    avatar:
      "https://api.dicebear.com/10.x/waves/svg?backgroundColor=faf0e4&scale=1.2&seed=Noah+Williams&waveColor=ea580c",
    defaultOpen: false,
    details:
      "Instrument the board so we can see when balanced packing helps versus when stable reflow keeps critique threads intact during live reviews.",
    initials: "NW",
    owner: "Noah Williams",
    status: "Measuring",
    statusVariant: "info" as const,
    summary:
      "Instrumentation for packing modes across live design reviews, so we know when denser columns help and when keeping cards in place matters more.",
    title: "Packing metrics",
  },
  {
    avatar:
      "https://api.dicebear.com/10.x/waves/svg?backgroundColor=e8f1fb&scale=1.2&seed=Iris+Okafor&waveColor=2b6cb0",
    defaultOpen: false,
    details: "Ship the empty state illustration this sprint.",
    initials: "IO",
    owner: "Iris Okafor",
    status: "Blocked",
    statusVariant: "outline" as const,
    summary: "Empty state art.",
    title: "Illustrations",
  },
  {
    avatar:
      "https://api.dicebear.com/10.x/waves/svg?backgroundColor=f8e8ee&scale=1.2&seed=Sofia+Alvarez&waveColor=e11d48",
    defaultOpen: false,
    details:
      "Write the onboarding email that links new teams to Welcome, Focus kit, and the first Onda session on their calendar.",
    initials: "SA",
    owner: "Sofia Alvarez",
    status: "Writing",
    statusVariant: "secondary" as const,
    summary: "Onboarding email that points new teams to Welcome and Focus kit.",
    title: "Launch email",
  },
  {
    avatar:
      "https://api.dicebear.com/10.x/waves/svg?backgroundColor=faf6e0&scale=1.2&seed=Jon+Bell&waveColor=ca8a04",
    defaultOpen: false,
    details:
      "Close the loop on last month's feedback: three teams asked for denser boards on desktop and a single column on phones.",
    initials: "JB",
    owner: "Jon Bell",
    status: "Done",
    statusVariant: "success" as const,
    summary: "Responsive board feedback.",
    title: "Feedback loop",
  },
];

export default Example;
