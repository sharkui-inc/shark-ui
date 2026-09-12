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
        <PlanItemTrigger title="Validate the settlement export" />
        <PlanItemContent>
          <PlanItemDetail>
            Confirmed the bank export contains 14,208 settlement rows.
          </PlanItemDetail>
        </PlanItemContent>
      </PlanItem>
      <PlanItem collapsible defaultOpen status="error">
        <PlanItemTrigger title="Backfill payment reconciliation records" />
        <PlanItemContent>
          <PlanItemDetail>
            Stopped at row 8,321: settlement ref_7F3A appears twice in
            <PlanItemDetailFile>
              exports/settlements-2026-08-27.csv
            </PlanItemDetailFile>
          </PlanItemDetail>
          <PlanItemDetail>
            The source export needs correction before the backfill can resume.
          </PlanItemDetail>
        </PlanItemContent>
      </PlanItem>
      <PlanItem status="pending">
        <PlanItemTrigger title="Apply the corrected reconciliation records" />
      </PlanItem>
    </PlanContent>
    <PlanProgress completed={1} total={3} />
  </Plan>
);

export default Example;
