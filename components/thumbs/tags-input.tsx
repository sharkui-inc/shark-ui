import { XIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import type { InputGroupProps } from "@/registry/react/components/input-group";
import { ThumbCard, type ThumbCardProps } from "./thumb-card";

export interface TagsInputThumbProps extends ThumbCardProps {
  /**
   * Whether to show the clear button.
   *
   * @default true
   */
  showClear?: boolean;
  size?: NonNullable<InputGroupProps["size"]>;
}

const controlSizeClasses: Record<
  NonNullable<InputGroupProps["size"]>,
  string
> = {
  sm: "min-h-7",
  md: "min-h-8",
  lg: "min-h-9",
};

const tagSizeClasses: Record<NonNullable<InputGroupProps["size"]>, string> = {
  sm: "h-4 px-1",
  md: "h-4.5 px-1.5",
  lg: "h-5 px-2",
};

const tagBarSizeClasses: Record<
  NonNullable<InputGroupProps["size"]>,
  string
> = {
  sm: "h-1 w-3",
  md: "h-1.5 w-4",
  lg: "h-1.5 w-5",
};

const clearIconSizeClasses: Record<
  NonNullable<InputGroupProps["size"]>,
  string
> = {
  sm: "size-2",
  md: "size-2",
  lg: "size-2.5",
};

export const TagsInputThumb = ({
  size = "md",
  showClear = true,
  ...props
}: TagsInputThumbProps) => (
  <ThumbCard {...props}>
    <div
      className={cn(
        "flex w-full max-w-52 flex-wrap items-center gap-1 rounded-lg border border-input bg-muted p-1 shadow-md/5",
        controlSizeClasses[size]
      )}
      data-size={size}
    >
      <div
        className={cn(
          "flex items-center gap-1 rounded-md border border-border bg-secondary",
          tagSizeClasses[size]
        )}
      >
        <div
          className={cn(
            "rounded-lg bg-muted-foreground/16",
            tagBarSizeClasses[size]
          )}
        />
        <XIcon
          aria-hidden
          className={cn("text-muted-foreground/64", clearIconSizeClasses[size])}
        />
      </div>
      <div
        className={cn(
          "flex items-center gap-1 rounded-md border border-border bg-secondary",
          tagSizeClasses[size]
        )}
      >
        <div
          className={cn(
            "rounded-lg bg-muted-foreground/16",
            size === "md" ? "h-1.5 w-5" : tagBarSizeClasses[size]
          )}
        />
        <XIcon
          aria-hidden
          className={cn("text-muted-foreground/64", clearIconSizeClasses[size])}
        />
      </div>
      {showClear ? (
        <XIcon
          aria-hidden
          className={cn(
            "ms-auto text-muted-foreground/64",
            clearIconSizeClasses[size]
          )}
        />
      ) : null}
    </div>
  </ThumbCard>
);
