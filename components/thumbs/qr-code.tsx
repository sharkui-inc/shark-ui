import { QrCodeIcon } from "lucide-react";
import { ThumbCard, type ThumbCardProps } from "./thumb-card";

export const QrCodeThumb = (props: ThumbCardProps) => (
  <ThumbCard {...props}>
    <div className="flex flex-col items-center justify-center gap-3">
      <div className="border-input bg-muted flex size-20 justify-center rounded-lg border p-2 shadow-sm/4">
        <QrCodeIcon
          aria-hidden
          className="text-muted-foreground/64 size-16 stroke-[1.5]"
        />
      </div>
      <div className="bg-muted-foreground/24 h-1.5 w-1/4 rounded-lg" />
    </div>
  </ThumbCard>
);
