import { Spinner } from "@/registry/react/components/spinner";
import {
  Steps,
  StepsIndicator,
  StepsItem,
  StepsList,
  StepsSeparator,
  StepsTrigger,
} from "@/registry/react/components/steps";

const Example = () => (
  <div className="mx-auto w-full max-w-xl">
    <Steps className="w-full" count={items.length}>
      <StepsList>
        {items.map((item, index) => (
          <StepsItem index={index} key={item.title}>
            <StepsTrigger aria-label={item.title} disabled>
              <StepsIndicator>
                {item.loading ? <Spinner aria-hidden="true" /> : index + 1}
              </StepsIndicator>
            </StepsTrigger>
            <StepsSeparator />
          </StepsItem>
        ))}
      </StepsList>
    </Steps>
  </div>
);

const items = [
  {
    loading: true,
    title: "Build the file",
  },
  {
    loading: false,
    title: "Validate data",
  },
  {
    loading: false,
    title: "Download export",
  },
];

export default Example;
