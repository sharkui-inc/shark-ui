import { CreditCardIcon, HardDriveIcon, UserIcon } from "lucide-react";
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
        <StepsItem index={index} key={index}>
          <StepsTrigger>
            <StepsIndicator>
              <item.icon />
            </StepsIndicator>
          </StepsTrigger>
          <StepsSeparator />
        </StepsItem>
      ))}
    </StepsList>
  </Steps>
);

const items = [
  { icon: UserIcon },
  { icon: HardDriveIcon },
  { icon: CreditCardIcon },
];

export default Example;
