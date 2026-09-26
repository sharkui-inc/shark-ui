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
    className="h-[min(32rem,70vh)] min-w-0 rounded-xl border"
    orientation="vertical"
    scrollFade
  >
    <Masonry
      className="columns-1 gap-x-4 gap-y-6 p-4 sm:columns-2"
      reflow="stable"
    >
      {notes.map((note) => (
        <MasonryItem key={note.title}>
          <Collapsible defaultOpen={note.defaultOpen}>
            <section className="overflow-hidden rounded-xl border bg-card shadow-xs/4">
              <div className="flex flex-col gap-3 p-4">
                <div className="flex flex-col gap-1">
                  <h3 className="font-heading font-semibold text-base tracking-tight">
                    {note.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-6">
                    {note.summary}
                  </p>
                </div>
                <CollapsibleTrigger asChild>
                  <Button className="w-full" size="sm" variant="outline">
                    Read more
                    <CollapsibleIndicator />
                  </Button>
                </CollapsibleTrigger>
              </div>
              <CollapsibleContent className="border-t bg-muted/48">
                <p className="p-4 text-muted-foreground text-sm leading-6">
                  {note.details}
                </p>
              </CollapsibleContent>
            </section>
          </Collapsible>
        </MasonryItem>
      ))}
    </Masonry>
  </ScrollArea>
);

const notes = [
  {
    defaultOpen: true,
    details:
      "Expanding this note keeps it in the same column. Neighboring items slide vertically instead of jumping to another column.",
    summary: "A short note on retaining column placement.",
    title: "Stay in place",
  },
  {
    defaultOpen: false,
    details:
      "Stable reflow is the default for Accordion and Collapsible content, where height changes should not reshuffle the reading order across columns.",
    summary:
      "Useful when items grow and shrink as people open details, especially across uneven copy lengths.",
    title: "Height can change",
  },
  {
    defaultOpen: false,
    details:
      "Onda uses this mode for studio boards where each card may expand with feedback without sending the rest of the board into a new packing pass.",
    summary: "Prefer stable when interaction is local to one item.",
    title: "Local interaction",
  },
  {
    defaultOpen: false,
    details:
      "New items still land in the shortest column. Existing items keep the column they already occupy until the column count itself changes.",
    summary: "Only new items pick the shortest column on arrival.",
    title: "New items still pack",
  },
];

export default Example;
