import { Loader2Icon } from "lucide-react";
import {
  Steps,
  StepsIndicator,
  StepsItem,
  StepsList,
  StepsSeparator,
  StepsTrigger,
} from "@/registry/react/components/steps";

const Example = () => (
  <Steps className="w-full max-w-md" count={items.length}>
    <StepsList>
      {items.map((item, index) => (
        <StepsItem index={index} key={item.id}>
          <StepsTrigger disabled>
            <StepsIndicator>
              {item.loading ? (
                <Loader2Icon className="animate-spin" />
              ) : (
                index + 1
              )}
            </StepsIndicator>
          </StepsTrigger>

          <StepsSeparator />
        </StepsItem>
      ))}
    </StepsList>
  </Steps>
);

const items = [
  { id: "loading", loading: true },
  { id: "review", loading: false },
  { id: "complete", loading: false },
];

export default Example;
