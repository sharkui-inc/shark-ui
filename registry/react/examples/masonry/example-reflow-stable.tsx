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
      <Masonry
        className="columns-1 gap-x-4 gap-y-6 p-4 sm:columns-2 lg:columns-3"
        reflow="stable"
      >
        {notes.map((note) => (
          <MasonryItem key={note.title}>
            <Collapsible defaultOpen={note.defaultOpen}>
              <section className="bg-card overflow-hidden rounded-xl border shadow-xs/4">
                <div className="flex flex-col gap-3 p-4">
                  <div className="flex flex-col gap-1">
                    <h3 className="font-heading text-base font-semibold tracking-tight">
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
                <CollapsibleContent className="bg-muted/48 border-t">
                  <p className="text-muted-foreground p-4 text-sm leading-6">
                    {note.details}
                  </p>
                </CollapsibleContent>
              </section>
            </Collapsible>
          </MasonryItem>
        ))}
      </Masonry>
    </ScrollArea>
  </div>
);

const notes = [
  {
    defaultOpen: true,
    details:
      "Expanding this note keeps it in the same column. Neighboring items slide vertically instead of jumping to another column, which keeps reading order predictable while you skim a board.",
    summary: "Retain column placement.",
    title: "Stay in place",
  },
  {
    defaultOpen: false,
    details:
      "Stable reflow is the default for Accordion and Collapsible content, where height changes should not reshuffle the reading order across columns. Prefer it whenever interaction is local to one item.",
    summary:
      "Useful when items grow and shrink as people open details, especially across uneven copy lengths on a weekly changelog board.",
    title: "Height can change",
  },
  {
    defaultOpen: false,
    details:
      "Onda uses this mode for studio boards where each card may expand with feedback without sending the rest of the board into a new packing pass.",
    summary: "Local interaction stays local.",
    title: "Local interaction",
  },
  {
    defaultOpen: false,
    details:
      "New items still land in the shortest column. Existing items keep the column they already occupy until the column count itself changes at a breakpoint.",
    summary: "Only new items pick the shortest column on arrival.",
    title: "New items still pack",
  },
  {
    defaultOpen: false,
    details:
      "Keep changelog entries short in the summary and park the full write-up behind the trigger so the board stays scannable at three columns.",
    summary: "Ok.",
    title: "Scan first",
  },
  {
    defaultOpen: false,
    details:
      "When a note expands, only that column grows. Cards in the other columns keep their vertical position, so teammates following a thread do not lose their place.",
    summary:
      "A longer summary for notes that need more context before someone opens the full details on the design critique board.",
    title: "Keep your place",
  },
  {
    defaultOpen: false,
    details: "Done for this week.",
    summary: "Ship checklist.",
    title: "Done",
  },
  {
    defaultOpen: false,
    details:
      "Pair stable reflow with Collapsible when the board mixes one-line reminders with multi-paragraph design notes. The short cards stay put while the tall ones grow in place.",
    summary: "Mix short and tall notes freely.",
    title: "Mixed lengths",
  },
  {
    defaultOpen: false,
    details:
      "Resize the preview to one, two, or three columns. Existing notes keep their column until the count changes, then pack again for the new layout.",
    summary: "Breakpoints still reflow.",
    title: "Column count",
  },
];

export default Example;
