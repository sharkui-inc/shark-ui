"use client";

import { JsonTreeView as ArkJsonTreeView } from "@ark-ui/react/json-tree-view";
import { ChevronRightIcon } from "lucide-react";
import type React from "react";
import { cn } from "@/lib/utils";

type JsonTreeViewProps = React.ComponentProps<typeof ArkJsonTreeView.Root> & {
  renderValue?: React.ComponentProps<
    typeof ArkJsonTreeView.Tree
  >["renderValue"];
};

export const JsonTreeView = (props: JsonTreeViewProps) => {
  const {
    lazyMount = true,
    unmountOnExit = true,
    className,
    renderValue,
    ...rest
  } = props;

  return (
    <ArkJsonTreeView.Root
      className={cn(
        "[--json-tree-indent:--spacing(5)] [--json-tree-row-padding:--spacing(1.5)]",
        "w-full min-w-0 max-w-full shrink-0",
        "bg-card font-mono text-foreground text-xs leading-6",
        "rounded-xl border shadow-xs/4",
        "overflow-x-auto",
        "**:data-[part=branch-content]:relative",
        "**:data-[part=branch-indent-guide]:absolute **:data-[part=branch-indent-guide]:inset-s-[calc((var(--depth)-1)*var(--json-tree-indent)+1.125rem)] **:data-[part=branch-indent-guide]:h-full **:data-[part=branch-indent-guide]:w-px **:data-[part=branch-indent-guide]:bg-border/64",
        "[&_:is([data-part=branch],[data-part=item]):not(:last-child)]:mb-0.5",
        "[&_[data-part=branch-control][data-state=open]]:mb-0.5",
        "[&_:is([data-part=branch-control],[data-part=item])]:relative [&_:is([data-part=branch-control],[data-part=item])]:flex [&_:is([data-part=branch-control],[data-part=item])]:min-h-7.5 [&_:is([data-part=branch-control],[data-part=item])]:w-full [&_:is([data-part=branch-control],[data-part=item])]:min-w-0 [&_:is([data-part=branch-control],[data-part=item])]:max-w-full [&_:is([data-part=branch-control],[data-part=item])]:items-center",
        "[&_:is([data-part=branch-control],[data-part=item])]:px-(--json-tree-row-padding) [&_:is([data-part=branch-control],[data-part=item])]:ps-[calc((var(--depth)-1)*var(--json-tree-indent)+1.75rem)]",
        "[&_:is([data-part=branch-control],[data-part=item])]:select-none [&_:is([data-part=branch-control],[data-part=item])]:text-start",
        "[&_:is([data-part=branch-control],[data-part=item])]:rounded-md [&_:is([data-part=branch-control],[data-part=item])]:border [&_:is([data-part=branch-control],[data-part=item])]:border-transparent",
        "[&_:is([data-part=branch-control],[data-part=item])]:outline-hidden",
        "[&_:is([data-part=branch-control],[data-part=item])]:transition-colors [&_:is([data-part=branch-control],[data-part=item])]:duration-150 [&_:is([data-part=branch-control],[data-part=item])]:ease-out",
        "[&_:is([data-part=branch-control],[data-part=item])]:hover:bg-accent [&_:is([data-part=branch-control],[data-part=item])]:hover:text-foreground",
        "[&_:is([data-part=branch-control],[data-part=item])]:focus-visible:border-ring/64 [&_:is([data-part=branch-control],[data-part=item])]:focus-visible:ring-2 [&_:is([data-part=branch-control],[data-part=item])]:focus-visible:ring-ring/24",
        "[&_:is([data-part=branch-control],[data-part=item])]:data-focus:bg-accent [&_:is([data-part=branch-control],[data-part=item])]:data-focus:text-foreground",
        "**:data-[part=branch-control]:cursor-pointer",
        "**:data-[part=branch-indicator]:absolute **:data-[part=branch-indicator]:inset-s-[calc((var(--depth)-1)*var(--json-tree-indent)+0.25rem)] **:data-[part=branch-indicator]:flex **:data-[part=branch-indicator]:size-5 **:data-[part=branch-indicator]:items-center **:data-[part=branch-indicator]:justify-center",
        "**:data-[part=branch-indicator]:rounded-sm **:data-[part=branch-indicator]:text-muted-foreground",
        "**:data-[part=branch-indicator]:origin-center **:data-[part=branch-indicator]:transition-transform **:data-[part=branch-indicator]:duration-150 **:data-[part=branch-indicator]:ease-out",
        "**:data-[part=branch-indicator]:motion-reduce:transition-none [&_[data-part=branch-indicator][data-state=open]]:rotate-90",
        "[&_:is([data-part=branch-text],[data-part=item-text])]:flex [&_:is([data-part=branch-text],[data-part=item-text])]:min-w-0 [&_:is([data-part=branch-text],[data-part=item-text])]:max-w-full [&_:is([data-part=branch-text],[data-part=item-text])]:flex-1 [&_:is([data-part=branch-text],[data-part=item-text])]:items-baseline [&_:is([data-part=branch-text],[data-part=item-text])]:overflow-hidden",
        "**:data-[kind=key]:min-w-0 **:data-[kind=key]:max-w-[40%] **:data-[kind=key]:shrink **:data-[kind=key]:truncate",
        "**:data-[kind=colon]:shrink-0",
        "**:data-[kind=preview]:min-w-0 **:data-[kind=preview]:flex-1 **:data-[kind=preview]:truncate",
        className
      )}
      data-slot="json-tree-view"
      dir="ltr"
      lazyMount={lazyMount}
      unmountOnExit={unmountOnExit}
      {...rest}
    >
      <JsonTreeViewTree renderValue={renderValue} />
    </ArkJsonTreeView.Root>
  );
};

const JsonTreeViewTree = (
  props: React.ComponentProps<typeof ArkJsonTreeView.Tree>
) => {
  const { className, ...rest } = props;

  return (
    <ArkJsonTreeView.Tree
      arrow={<ChevronRightIcon className="size-3.5" />}
      className={cn(
        "flex w-full min-w-0 flex-col p-2",
        "text-muted-foreground text-xs leading-6",
        "[&_svg]:size-3.5",
        "**:data-[type=string]:text-success-foreground",
        "**:data-[type=number]:text-info-foreground",
        "**:data-[type=boolean]:font-semibold **:data-[type=boolean]:text-warning-foreground",
        "**:data-[type=null]:font-semibold **:data-[type=null]:text-muted-foreground **:data-[type=null]:italic",
        "**:data-[kind=key]:font-medium **:data-[kind=key]:text-foreground",
        "**:data-[kind=colon]:mx-1 **:data-[kind=colon]:text-muted-foreground",
        "**:data-[kind=preview-text]:text-muted-foreground **:data-[kind=preview]:text-muted-foreground",
        className
      )}
      data-slot="json-tree-view-tree"
      {...rest}
    />
  );
};
