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
  <ScrollArea
    className="h-[min(32rem,70vh)] w-full min-w-0 rounded-xl border"
    orientation="vertical"
    scrollFade
  >
    <Masonry className="columns-1 gap-x-4 gap-y-6 p-4 sm:columns-2">
      {projects.map((project) => (
        <MasonryItem key={project.title}>
          <Collapsible defaultOpen={project.defaultOpen}>
            <section className="overflow-hidden rounded-xl border bg-muted/48 shadow-xs/4">
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
                  <h3 className="font-heading font-semibold text-lg tracking-tight">
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
              <CollapsibleContent className="border-t bg-background">
                <div className="flex flex-col gap-3 p-4">
                  <p className="text-muted-foreground text-sm leading-6">
                    {project.details}
                  </p>
                  <a
                    className="inline-flex w-fit items-center gap-1.5 text-primary text-sm underline-offset-4 hover:underline focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring/24"
                    href="#"
                  >
                    Open project
                    <ArrowUpRightIcon aria-hidden="true" className="size-3.5" />
                  </a>
                </div>
              </CollapsibleContent>
            </section>
          </Collapsible>
        </MasonryItem>
      ))}
    </Masonry>
  </ScrollArea>
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
    summary: "A monthly evening for people building thoughtful products.",
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
];

export default Example;
