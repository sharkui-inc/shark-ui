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
        <StepsItem index={index} key={item.name}>
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
  { icon: UserIcon, name: "account" },
  { icon: HardDriveIcon, name: "files" },
  { icon: CreditCardIcon, name: "billing" },
];

export default Example;
