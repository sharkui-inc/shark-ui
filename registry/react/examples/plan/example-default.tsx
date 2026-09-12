import {
  Plan,
  PlanContent,
  PlanHeader,
  PlanItem,
  PlanItemContent,
  PlanItemDetailFile,
  PlanItemTrigger,
  PlanProgress,
} from "@/registry/react/components/plan";

const PlanDemo = () => (
  <Plan className="max-w-lg">
    <PlanHeader title="Add email validation" />
    <PlanContent>
      <PlanItem collapsible status="completed">
        <PlanItemTrigger title="Read current validator" />
        <PlanItemContent>
          <PlanItemDetailFile>src/utils/helpers.ts</PlanItemDetailFile>
        </PlanItemContent>
      </PlanItem>
      <PlanItem collapsible status="in-progress">
        <PlanItemTrigger title="Patch isValidEmail" />
        <PlanItemContent>
          <PlanItemDetailFile>src/utils/helpers.ts</PlanItemDetailFile>
          <PlanItemDetailFile>src/app.tsx</PlanItemDetailFile>
        </PlanItemContent>
      </PlanItem>
      <PlanItem status="pending">
        <PlanItemTrigger title="Run unit tests" />
      </PlanItem>
    </PlanContent>
    <PlanProgress completed={1} total={3} />
  </Plan>
);

export default PlanDemo;
