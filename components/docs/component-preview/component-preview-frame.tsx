import type React from "react";
import { cn } from "@/lib/utils";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/registry/react/components/tabs";

interface ComponentPreviewFrameProps extends React.ComponentProps<"div"> {
  /**
   * Size the preview to its content with equal padding on all sides,
   * instead of locking to a 450px frame that vertically centers short examples.
   *
   * @default false
   */
  autoHeight?: boolean;
  /** The content to display in the preview pane. */
  preview: React.ReactNode;
  /** Optional controls displayed above the preview content. */
  previewHeader?: React.ReactNode;
  /** Whether to show the dashed padding guide borders around the preview. */
  showBorders?: boolean;
  /** The source code to display in the code pane. */
  source: React.ReactNode;
}

export const ComponentPreviewFrame = (props: ComponentPreviewFrameProps) => {
  const {
    autoHeight = false,
    preview,
    previewHeader,
    source,
    showBorders = true,
    className,
    ...rest
  } = props;

  return (
    <Tabs
      {...rest}
      className={cn("group relative mt-4 mb-12", className)}
      defaultValue="preview"
    >
      <TabsList>
        <TabsTrigger value="preview">Preview</TabsTrigger>
        <TabsTrigger value="code">Code</TabsTrigger>
      </TabsList>

      <div className="group/stage relative overflow-hidden rounded-2xl border">
        <div
          className={cn(
            "relative w-full",
            "flex flex-col bg-code",
            "group-has-[[data-slot=tab-code]:not([hidden])]/stage:pointer-events-none",
            "group-has-[[data-slot=tab-code]:not([hidden])]/stage:invisible"
          )}
          data-slot="preview"
        >
          {previewHeader}
          <div
            className={cn(
              "relative flex min-h-0 items-center justify-center overflow-y-auto p-4 sm:p-10",
              autoHeight ? "min-h-[450px]" : "h-[450px]"
            )}
            data-slot="preview-content"
          >
            {showBorders ? (
              <>
                <div className="absolute inset-x-0 top-4 border border-border/64 border-dashed max-sm:hidden sm:top-10" />
                <div className="absolute inset-x-0 bottom-4 border border-border/64 border-dashed max-sm:hidden sm:bottom-10" />
                <div className="absolute inset-s-4 inset-y-0 border border-border/64 border-dashed max-sm:hidden sm:inset-s-10" />
                <div className="absolute inset-e-4 inset-y-0 border border-border/64 border-dashed max-sm:hidden sm:inset-e-10" />
              </>
            ) : null}
            {preview}
          </div>
        </div>
        <TabsContent
          className="absolute inset-0"
          data-slot="tab-code"
          dir="ltr"
          value="code"
        >
          <div
            className="h-full overflow-hidden **:[figure]:m-0! **:[figure]:h-full **:[figure]:border-0"
            data-slot="code"
          >
            {source}
          </div>
        </TabsContent>
      </div>
    </Tabs>
  );
};
