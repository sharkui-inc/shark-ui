import { Field } from "@/registry/react/components/field";
import { FormatNumber } from "@/registry/react/components/format";
import { Progress, ProgressLabel } from "@/registry/react/components/progress";

const Example = () => (
  <div className="flex w-full max-w-xs flex-col gap-5">
    <Field>
      <Progress value={75}>
        <ProgressLabel>Storage used</ProgressLabel>
        <span className="ms-auto text-sm tabular-nums tracking-tight">
          <FormatNumber style="percent" value={0.75} />
        </span>
      </Progress>
    </Field>
    <Field>
      <Progress value={75.67}>
        <ProgressLabel>Precise fill</ProgressLabel>
        <span className="ms-auto text-sm tabular-nums tracking-tight">
          <FormatNumber
            minimumFractionDigits={2}
            style="percent"
            value={0.7567}
          />
        </span>
      </Progress>
    </Field>
  </div>
);

export default Example;
