import type { Frame } from "@ark-ui/react";
import type React from "react";
import { cn } from "@/lib/utils";

interface PreviewIframeProps extends React.ComponentProps<typeof Frame> {
  /**
   * Which physical edge of the wide iframe stays visible when clipped.
   * Use `"right"` when the preview pins UI to the right (e.g. Sidebar RTL).
   *
   * @default "left"
   */
  side?: "left" | "right";
  /**
   * The source URL of the iframe
   */
  src: string;
  /**
   * The title of the iframe
   */
  title: string;
  /**
   * Clip a desktop-width iframe to the container (block previews like Sidebar).
   */
  wide?: boolean;
}

export const PreviewIframe = (props: PreviewIframeProps) => {
  const { side = "left", src, title, className, wide, ...rest } = props;

  if (wide) {
    return (
      <div
        className={cn(
          "relative min-h-[550px] w-full overflow-hidden rounded-2xl border",
          className
        )}
        data-slot="preview-iframe"
      >
        <iframe
          className={cn(
            "absolute inset-y-0 h-full w-[1600px] max-w-none border-0",
            side === "right" ? "right-0" : "left-0"
          )}
          src={src}
          title={title}
          {...rest}
        />
      </div>
    );
  }

  return (
    <iframe
      className={cn(
        "min-h-[450px] w-full",
        "rounded-2xl border",
        "overflow-hidden",
        className
      )}
      data-slot="preview-iframe"
      src={src}
      title={title}
      {...rest}
    />
  );
};
