import type React from "react";
import { cn } from "@/lib/utils";

type PreviewIframeProps = React.ComponentProps<"iframe"> & {
  src: string;
  title: string;
};

export const PreviewIframe = (props: PreviewIframeProps) => {
  const { className, height = 450, src, title, ...rest } = props;
  const style: React.CSSProperties & { "--height": string } = {
    "--height": `${height}px`,
  };

  return (
    <div
      className={cn(
        "h-(--height) w-full",
        "bg-background",
        "rounded-xl border",
        "overflow-hidden",
        className
      )}
      data-slot="preview-iframe"
      style={style}
    >
      <iframe
        className="size-full bg-background"
        loading="lazy"
        {...rest}
        height={height}
        src={src}
        title={title}
      />
    </div>
  );
};
