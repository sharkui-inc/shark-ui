import {
  Plan,
  PlanContent,
  PlanItem,
  PlanItemContent,
  PlanItemDetail,
  PlanItemDetailFile,
  PlanItemTrigger,
  PlanProgress,
} from "@/registry/react/components/plan";

const Example = () => (
  <Plan className="max-w-lg">
    <PlanContent>
      <PlanItem collapsible defaultOpen status="completed">
        <PlanItemTrigger title="Collect approved tenant documents" />
        <PlanItemContent>
          <PlanItemDetail>
            Collected 428 documents from
            <PlanItemDetailFile>content/customers/acme</PlanItemDetailFile>
          </PlanItemDetail>
        </PlanItemContent>
      </PlanItem>
      <PlanItem collapsible status="in-progress">
        <PlanItemTrigger title="Index the tenant knowledge base" />
        <PlanItemContent>
          <PlanItemDetail>
            Creating embeddings for 312 of 428 documents.
          </PlanItemDetail>
          <PlanItemDetail>
            The next batch includes
            <PlanItemDetailFile>
              security/incident-response.md
            </PlanItemDetailFile>
          </PlanItemDetail>
        </PlanItemContent>
      </PlanItem>
      <PlanItem status="pending">
        <PlanItemTrigger title="Publish the tenant search index" />
      </PlanItem>
    </PlanContent>
    <PlanProgress completed={1} total={3} />
  </Plan>
);

export default Example;
