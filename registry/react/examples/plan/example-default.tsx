import {
  Plan,
  PlanAction,
  PlanContent,
  PlanHeader,
  PlanItem,
  PlanItemContent,
  PlanItemDetailFile,
  PlanItemTrigger,
  PlanTrigger,
} from "@/registry/react/components/plan";

const Example = () => (
  <Plan className="max-w-lg" completed={1} total={3}>
    <PlanHeader title="Add email validation">
      <PlanAction>
        <PlanTrigger />
      </PlanAction>
    </PlanHeader>
    <PlanContent>
      <PlanItem status="completed">
        <PlanItemTrigger status="completed" title="Read current validator" />
        <PlanItemContent>
          <PlanItemDetailFile>src/utils/helpers.ts</PlanItemDetailFile>
        </PlanItemContent>
      </PlanItem>
      <PlanItem status="in-progress">
        <PlanItemTrigger status="in-progress" title="Patch isValidEmail" />
        <PlanItemContent>
          <PlanItemDetailFile>src/utils/helpers.ts</PlanItemDetailFile>
          <PlanItemDetailFile>src/app.tsx</PlanItemDetailFile>
        </PlanItemContent>
      </PlanItem>
      <PlanItem status="pending">
        <PlanItemTrigger status="pending" title="Run unit tests" />
      </PlanItem>
    </PlanContent>
  </Plan>
);

export default Example;
