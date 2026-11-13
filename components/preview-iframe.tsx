import type React from "react";
import { cn } from "@/lib/utils";

type PreviewIframeProps = React.ComponentProps<"iframe"> & {
  /**
   * The height of the iframe.
   *
   * @default 450
   */
  height?: number;
  /**
   * When true, sets `loading="lazy"` on the iframe.
   *
   * @default true
   */
  lazy?: boolean;
  /**
   * The source URL of the iframe.
   */
  src: string;
  /**
   * The title of the iframe.
   */
  title: string;
};

export const PreviewIframe = (props: PreviewIframeProps) => {
  const { height = 450, lazy = true, src, title, className, ...rest } = props;

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
        className="bg-background size-full"
        loading={lazy ? "lazy" : "eager"}
        {...rest}
        height={height}
        src={src}
        title={title}
      />
    </div>
  );
};
