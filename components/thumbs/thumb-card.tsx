import type React from "react";
import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardHeader,
} from "@/registry/react/components/card";

export interface ThumbCardProps extends React.ComponentProps<typeof Card> {
  /**
   * The description of the card
   */
  description: string;
  /**
   * The title of the card
   */
  title: string;
}

export const ThumbCard = (props: ThumbCardProps) => {
  const { title, description, children, className, ...rest } = props;

  return (
    <Card
      aria-label={title}
      className={cn(
        "size-full gap-0 overflow-hidden bg-muted/48 pb-0 [--space:--spacing(4)]",
        "shadow-xs/5",
        "transition-[border-color,box-shadow] duration-200 ease-in-out",
        "hover:border-foreground/12 hover:shadow-xs/10",
        "motion-reduce:transition-none",
        className
      )}
      {...rest}
    >
      <CardHeader
        aria-hidden="true"
        className={cn(
          "flex h-auto min-h-18 flex-col pb-4",
          "**:data-[slot=card-title]:tracking-tight",
          "**:data-[slot=card-description]:line-clamp-2"
        )}
        description={description}
        title={title}
      />

      <CardContent
        aria-hidden="true"
        className={cn(
          "min-h-40 w-full flex-1",
          "flex items-center justify-center",
          "px-10 py-4",
          "bg-card",
          "select-none",
          "rounded-b-xl border-t",
          "overflow-hidden",
          "[&>div:not([class^='w-'],[class*='_w-'])]:w-full"
        )}
        role="img"
      >
        {children}
      </CardContent>
    </Card>
  );
};
