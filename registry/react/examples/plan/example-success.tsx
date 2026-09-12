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
        <PlanItemTrigger title="Export active accounts" />
        <PlanItemContent>
          <PlanItemDetail>
            Exported 1,842 active accounts from
            <PlanItemDetailFile>
              identity/active-accounts.csv
            </PlanItemDetailFile>
          </PlanItemDetail>
        </PlanItemContent>
      </PlanItem>
      <PlanItem collapsible defaultOpen status="completed">
        <PlanItemTrigger title="Flag inactive privileged accounts" />
        <PlanItemContent>
          <PlanItemDetail>
            Found 12 accounts that require review in
            <PlanItemDetailFile>
              reviews/privileged-access.md
            </PlanItemDetailFile>
          </PlanItemDetail>
        </PlanItemContent>
      </PlanItem>
      <PlanItem collapsible defaultOpen status="completed">
        <PlanItemTrigger title="Publish the quarterly access review" />
        <PlanItemContent>
          <PlanItemDetail>
            Shared the review package with Security Operations.
          </PlanItemDetail>
        </PlanItemContent>
      </PlanItem>
    </PlanContent>
    <PlanProgress completed={3} total={3} />
  </Plan>
);

export default Example;
