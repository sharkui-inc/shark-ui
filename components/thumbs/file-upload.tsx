import { CloudUploadIcon } from "lucide-react";
import { ThumbCard, type ThumbCardProps } from "./thumb-card";

export const FileUploadThumb = (props: ThumbCardProps) => (
  <ThumbCard {...props}>
    <div className="border-input bg-muted flex w-40 flex-col items-center justify-center gap-2 rounded-lg border border-dashed p-6 shadow-sm/4">
      <div className="bg-primary flex size-8 items-center justify-center rounded-full">
        <CloudUploadIcon
          aria-hidden="true"
          className="text-primary-foreground size-3"
        />
      </div>
      <div className="bg-muted-foreground/24 h-1.5 w-1/2 rounded-full" />
    </div>
  </ThumbCard>
);
