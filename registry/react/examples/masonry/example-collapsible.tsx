import { ArrowUpRightIcon } from "lucide-react";
import { createWavesAvatar } from "@/lib/dicebear";
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
    className="h-[min(32rem,70vh)] rounded-xl border"
    orientation="vertical"
    scrollFade
  >
    <Masonry className="columns-1 p-4 [--gap:--spacing(5)] sm:columns-2 lg:columns-3">
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
    avatar: createWavesAvatar("Mara Kim", "amber"),
    defaultOpen: true,
    details:
      "The team is refining the first-run flow after five customer calls. The next review focuses on the invitation step and empty state.",
    initials: "MK",
    owner: "Mara Kim",
    status: "In review",
    statusVariant: "secondary" as const,
    summary: "A calmer way for new teams to find their first useful ritual.",
    title: "Welcome ritual",
  },
  {
    avatar: createWavesAvatar("Ravi Singh", "blue"),
    defaultOpen: false,
    details:
      "We are testing the library with two product teams and documenting the smallest set of patterns they reach for repeatedly.",
    initials: "RS",
    owner: "Ravi Singh",
    status: "Exploring",
    statusVariant: "info" as const,
    summary:
      "A compact pattern library for decisions that need a shared language.",
    title: "Pattern library",
  },
  {
    avatar: createWavesAvatar("Amina Cole", "rose"),
    defaultOpen: false,
    details:
      "The next session pairs community questions with working prototypes, so each conversation ends with something tangible to test.",
    initials: "AC",
    owner: "Amina Cole",
    status: "Planning",
    statusVariant: "outline" as const,
    summary:
      "A monthly evening for people building thoughtful digital products.",
    title: "Onda sessions",
  },
  {
    avatar: createWavesAvatar("Leo Martin", "green-dark"),
    defaultOpen: false,
    details:
      "We are gathering the small operational practices that help makers protect deep work without disappearing from their collaborators.",
    initials: "LM",
    owner: "Leo Martin",
    status: "Shipping",
    statusVariant: "success" as const,
    summary:
      "A collection of tools for making a busy week feel more intentional.",
    title: "Focus kit",
  },
];

export default Example;
