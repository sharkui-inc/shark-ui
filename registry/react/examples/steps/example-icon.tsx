import {
  ChevronLeftIcon,
  ChevronRightIcon,
  CreditCardIcon,
  FileTextIcon,
  UserRoundIcon,
} from "lucide-react";
import { Button } from "@/registry/react/components/button";
import {
  Steps,
  StepsIndicator,
  StepsItem,
  StepsList,
  StepsNext,
  StepsPrevious,
  StepsSeparator,
  StepsTrigger,
} from "@/registry/react/components/steps";

const Example = () => (
  <div className="mx-auto w-full max-w-xl">
    <Steps className="w-full gap-6" count={items.length}>
      <StepsList>
        {items.map((item, index) => (
          <StepsItem index={index} key={item.name}>
            <StepsTrigger aria-label={item.name}>
              <StepsIndicator>
                <item.icon aria-hidden="true" />
              </StepsIndicator>
            </StepsTrigger>
            <StepsSeparator />
          </StepsItem>
        ))}
      </StepsList>

      <div className="flex flex-row-reverse gap-2">
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
  { icon: UserRoundIcon, name: "Personal details" },
  { icon: FileTextIcon, name: "Business documents" },
  { icon: CreditCardIcon, name: "Payment method" },
];

export default Example;
