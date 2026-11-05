import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { Button } from "@/registry/react/components/button";
import {
  Steps,
  StepsCompletedContent,
  StepsContent,
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

interface StepPanelProps {
  content: string;
  details: { label: string; value: string }[];
  title: string;
}

const StepPanel = (props: StepPanelProps) => {
  const { content, details, title } = props;

  return (
    <div className="flex max-w-sm flex-col gap-4 py-1">
      <div className="flex flex-col gap-1.5">
        <h4 className="font-heading min-h-5 text-base leading-tight font-semibold">
          {title}
        </h4>
        <p className="text-muted-foreground min-h-12 text-sm leading-relaxed">
          {content}
        </p>
      </div>
      <dl className="flex flex-col gap-1.5">
        {details.map((detail) => (
          <div className="flex items-baseline gap-2" key={detail.label}>
            <dt className="text-muted-foreground text-xs">{detail.label}</dt>
            <dd className="text-sm">{detail.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
};

const Example = () => (
  <div className="mx-auto w-full max-w-xl">
    <Steps
      className="min-h-72 w-full"
      count={items.length}
      orientation="vertical"
    >
      <StepsList>
        {items.map((item, index) => (
          <StepsItem index={index} key={item.title}>
            <StepsTrigger className="items-start text-start">
              <StepsIndicator>{index + 1}</StepsIndicator>
              <span className="flex flex-col items-start gap-1">
                <StepsTitle>{item.title}</StepsTitle>
                <StepsDescription>{item.description}</StepsDescription>
              </span>
            </StepsTrigger>
            <StepsSeparator />
          </StepsItem>
        ))}
      </StepsList>

      <div className="flex min-w-0 flex-1 flex-col">
        {items.map((item, index) => (
          <StepsContent index={index} key={item.title}>
            <StepPanel
              content={item.content}
              details={item.details}
              title={item.panelTitle}
            />
          </StepsContent>
        ))}

        <StepsCompletedContent>
          <StepPanel
            content="Your team can start planning the first milestone."
            details={[
              { label: "Status", value: "Ready" },
              { label: "Next", value: "First milestone" },
            ]}
            title="Project space is ready"
          />
        </StepsCompletedContent>

        <div className="mt-4 flex flex-row-reverse gap-2">
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
      </div>
    </Steps>
  </div>
);

const items = [
  {
    content: "Name the project and give the team a shared starting point.",
    description: "Name and purpose",
    details: [
      { label: "Project name", value: "Northstar" },
      { label: "Purpose", value: "First release" },
    ],
    panelTitle: "Project details",
    title: "Details",
  },
  {
    content: "Set an initial milestone so everyone knows what comes first.",
    description: "Set a first milestone",
    details: [
      { label: "Milestone", value: "Design review" },
      { label: "Target date", value: "Jun 12" },
    ],
    panelTitle: "Project plan",
    title: "Plan",
  },
  {
    content: "Invite the people who will help move this project forward.",
    description: "Add your collaborators",
    details: [
      { label: "Teammates", value: "4 invited" },
      { label: "Roles", value: "Owner, editors" },
    ],
    panelTitle: "Team members",
    title: "Team",
  },
];

export default Example;
