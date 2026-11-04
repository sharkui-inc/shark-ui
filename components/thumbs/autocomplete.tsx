import { ThumbCard, type ThumbCardProps } from "./thumb-card";

export const AutocompleteThumb = (props: ThumbCardProps) => (
  <ThumbCard {...props}>
    <div className="flex w-full flex-col gap-2">
      <div className="border-input bg-muted flex h-8 items-center rounded-lg border px-4 shadow-sm/4">
        <div className="bg-muted-foreground/24 h-2 w-1/3 rounded-full" />
      </div>
      <div className="border-input bg-muted flex flex-col gap-1 rounded-lg border border-dashed p-1.5 shadow-sm/4">
        <div className="bg-primary rounded-md px-2 py-1.5">
          <div className="bg-primary-foreground h-2 w-1/3 rounded-full" />
        </div>
        <div className="px-2 py-1.5">
          <div className="bg-muted-foreground/24 h-2 w-2/4 rounded-full" />
        </div>
      </div>
    </div>
  </ThumbCard>
);
