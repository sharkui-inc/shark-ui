import { ThumbCard, type ThumbCardProps } from "./thumb-card";

export const AutocompleteThumb = (props: ThumbCardProps) => (
  <ThumbCard {...props}>
    <div className="flex w-full flex-col gap-2">
      <div className="flex h-8 items-center rounded-lg border border-input bg-muted px-4 shadow-md/5">
        <div className="h-2 w-1/3 rounded-full bg-muted-foreground/16" />
      </div>
      <div className="flex flex-col gap-1 rounded-lg border border-input border-dashed bg-muted p-1.5 shadow-md/5">
        <div className="rounded-md bg-primary px-2 py-1.5">
          <div className="h-2 w-1/3 rounded-full bg-primary-foreground" />
        </div>
        <div className="px-2 py-1.5">
          <div className="h-2 w-2/4 rounded-full bg-muted-foreground/16" />
        </div>
      </div>
    </div>
  </ThumbCard>
);
