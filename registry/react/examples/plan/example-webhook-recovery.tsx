import { ExternalLinkIcon, InfoIcon } from "lucide-react";
import {
  Alert,
  AlertAction,
  AlertDescription,
  AlertTitle,
} from "@/registry/react/components/alert";
import { Button } from "@/registry/react/components/button";
import {
  Plan,
  PlanContent,
  PlanHeader,
  PlanItem,
  PlanItemContent,
  PlanItemDetail,
  PlanItemDetailFile,
  PlanItemTrigger,
} from "@/registry/react/components/plan";

const Example = () => (
  <Plan className="max-w-xl" status="in-progress">
    <PlanHeader
      description="Patching the retry worker and validating the backfill"
      title="Recover failed invoice webhooks"
    />
    <PlanContent>
      <PlanItem collapsible defaultOpen status="completed">
        <PlanItemTrigger title="Inspect the failed delivery batch" />
        <PlanItemContent>
          <PlanItemDetail>
            Isolated 42 retryable delivery failures from the last deployment.
          </PlanItemDetail>
          <PlanItemDetail>
            The failures are limited to
            <PlanItemDetailFile>
              apps/api/src/webhooks/deliver.ts
            </PlanItemDetailFile>
          </PlanItemDetail>
        </PlanItemContent>
      </PlanItem>
      <PlanItem collapsible defaultOpen status="in-progress">
        <PlanItemTrigger title="Patch the retry worker" />
        <PlanItemContent>
          <PlanItemDetail>
            Adding idempotency guards before replaying the delivery queue.
          </PlanItemDetail>
          <PlanItemDetail>
            Updating
            <PlanItemDetailFile>
              apps/api/src/jobs/retry-webhooks.ts
            </PlanItemDetailFile>
            and
            <PlanItemDetailFile>
              apps/api/src/queues/invoices.ts
            </PlanItemDetailFile>
          </PlanItemDetail>
          <Alert variant="info">
            <InfoIcon aria-hidden="true" />
            <AlertTitle>Staging validation is running</AlertTitle>
            <AlertDescription>
              The agent is replaying a copy of the failed batch before it
              touches production events.
            </AlertDescription>
            <AlertAction>
              <Button size="sm" variant="outline">
                View run
                <ExternalLinkIcon aria-hidden="true" />
              </Button>
            </AlertAction>
          </Alert>
        </PlanItemContent>
      </PlanItem>
      <PlanItem status="pending">
        <PlanItemTrigger title="Replay failed webhooks" />
      </PlanItem>
      <PlanItem status="pending">
        <PlanItemTrigger title="Verify invoice state and close the incident" />
      </PlanItem>
    </PlanContent>
  </Plan>
);

export default Example;
