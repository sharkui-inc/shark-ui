import {
  Plan,
  PlanContent,
  PlanHeader,
  PlanItem,
  PlanItemContent,
  PlanItemDetailFile,
  PlanItemTrigger,
} from "@/registry/react/components/plan";

const Example = () => (
  <Plan className="max-w-lg" status="in-progress">
    <PlanHeader
      description="Editing validation utilities"
      title="Add email validation"
    />
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
    </PlanContent>
  </Plan>
);

export default Example;
