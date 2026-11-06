import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { Button } from "@/registry/react/components/button";
import {
  Steps,
  StepsDescription,
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
          <StepsItem className="items-start" index={index} key={item.title}>
            <StepsTrigger className="items-start text-start">
              <StepsIndicator>{index + 1}</StepsIndicator>
              <span className="flex min-w-0 flex-col gap-1">
                <StepsTitle>{item.title}</StepsTitle>
                <StepsDescription className="max-w-20">
                  {item.description}
                </StepsDescription>
              </span>
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
  { description: "Information", title: "Details" },
  { description: "Metrics", title: "Data" },
  { description: "Share", title: "Publish" },
];

export default Example;
