import { CreditCardIcon, HardDriveIcon, UserIcon } from "lucide-react";
import {
  Steps,
  StepsContent,
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
          <StepsTrigger aria-label={item.name}>
            <StepsIndicator>
              <item.icon />
            </StepsIndicator>
          </StepsTrigger>
          <StepsSeparator />
        </StepsItem>
      ))}
    </StepsList>
    {items.map((item, index) => (
      <StepsContent index={index} key={item.name}>
        {item.name}
      </StepsContent>
    ))}
  </Steps>
);

const items = [
  { icon: UserIcon, name: "account" },
  { icon: HardDriveIcon, name: "files" },
  { icon: CreditCardIcon, name: "billing" },
];

export default Example;
