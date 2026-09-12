import { CircleAlertIcon } from "lucide-react";
import {
  PlanItem,
  PlanItemContent,
  PlanItemDetail,
  PlanItemTrigger,
} from "@/registry/react/components/plan";

const Example = () => (
  <PlanItem className="max-w-md" collapsible defaultOpen status="error">
    <PlanItemTrigger title="Refresh the warehouse inventory cache">
      <CircleAlertIcon
        aria-hidden="true"
        className="size-3.5 shrink-0 text-destructive-foreground"
      />
      <span className="min-w-0 truncate font-medium">
        <span className="sr-only">Failed: </span>
        Refresh the warehouse inventory cache
      </span>
    </PlanItemTrigger>
    <PlanItemContent>
      <PlanItemDetail>
        Retry after the inventory provider resolves its maintenance window.
      </PlanItemDetail>
    </PlanItemContent>
  </PlanItem>
);

export default Example;
