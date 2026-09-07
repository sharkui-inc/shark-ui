import {
  PlanItem,
  PlanItemContent,
  PlanItemDetail,
  PlanItemDetailFile,
  PlanItemTrigger,
} from "@/registry/react/components/plan";

const Example = () => (
  <PlanItem className="max-w-lg" defaultOpen status="completed">
    <PlanItemTrigger title="Archive resolved support conversations" />
    <PlanItemContent>
      <PlanItemDetail>
        Archived 42 conversations and saved the export to
        <PlanItemDetailFile>exports/support-archive.csv</PlanItemDetailFile>
      </PlanItemDetail>
    </PlanItemContent>
  </PlanItem>
);

export default Example;
