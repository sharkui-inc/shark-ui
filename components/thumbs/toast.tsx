import { InfoIcon } from "lucide-react";
import { ThumbCard, type ThumbCardProps } from "./thumb-card";

export const ToastThumb = (props: ThumbCardProps) => (
  <ThumbCard {...props}>
    <div className="relative isolate flex min-h-14 items-center justify-center">
      <div className="border-input bg-muted absolute inset-x-0 -top-3 h-12 w-full scale-90 rounded-lg border border-dashed opacity-32" />
      <div className="border-input bg-muted absolute inset-x-0 -top-1 h-12 w-full scale-95 rounded-lg border border-dashed opacity-64" />

      <div className="border-input bg-muted relative z-10 flex h-12 w-full items-center justify-start gap-2 rounded-lg border border-dashed px-3 shadow-sm/4">
        <div className="mt-4 flex h-full items-start justify-start">
          <InfoIcon aria-hidden className="text-primary size-3" />
        </div>
        <div className="flex w-full flex-1 flex-col gap-1.5">
          <div className="bg-muted-foreground/24 h-1.5 w-1/2 rounded-full" />
          <div className="bg-muted-foreground/24 h-1.5 w-4/5 rounded-full" />
        </div>
      </div>
    </div>
  </ThumbCard>
);
