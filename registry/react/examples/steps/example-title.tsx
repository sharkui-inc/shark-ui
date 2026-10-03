import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { Button } from "@/registry/react/components/button";
import {
  Steps,
  StepsIndicator,
  StepsItem,
  StepsList,
  StepsNext,
  StepsPrevious,
  StepsSeparator,
  StepsTitle,
  StepsTrigger,
} from "@/registry/react/components/steps";

const Example = () => (
  <div className="mx-auto w-full max-w-xl">
    <Steps className="w-full" count={items.length}>
      <StepsList>
        {items.map((item, index) => (
          <StepsItem index={index} key={item.title}>
            <StepsTrigger className="flex-col gap-2 sm:flex-row">
              <StepsIndicator>{index + 1}</StepsIndicator>
              <StepsTitle className="text-center sm:text-start">
                {item.title}
              </StepsTitle>
            </StepsTrigger>
            <StepsSeparator />
          </StepsItem>
        ))}
      </StepsList>

      <div className="mt-6 flex flex-row-reverse gap-2">
        <StepsNext asChild>
          <Button>
            Continue
            <ChevronRightIcon
              className="rtl:rotate-180"
              data-icon="inline-end"
            />
          </Button>
        </StepsNext>
        <StepsPrevious asChild>
          <Button variant="outline">
            <ChevronLeftIcon
              className="rtl:rotate-180"
              data-icon="inline-start"
            />
            Back
          </Button>
        </StepsPrevious>
      </div>
    </Steps>
  </div>
);

const items = [
  { title: "Choose a room" },
  { title: "Pick a time" },
  { title: "Confirm booking" },
];

export default Example;
