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
            <div className="flex min-h-48 flex-col justify-between py-2">
              <div>
                <h4 className="mt-1 font-semibold text-base">
                  {item.panelTitle}
                </h4>
                <p className="mt-2 max-w-sm text-muted-foreground text-sm">
                  {item.content}
                </p>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span
                    className="rounded-md border bg-background px-2.5 py-1 text-xs"
                    key={tag}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </StepsContent>
        ))}

        <StepsCompletedContent>
          <div className="flex min-h-48 items-center py-2">
            <div>
              <p className="font-semibold">Project space is ready</p>
              <p className="mt-1 text-muted-foreground text-sm">
                Your team can start planning the first milestone.
              </p>
            </div>
          </div>
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
    panelTitle: "Project details",
    tags: ["Project name", "Purpose"],
    title: "Details",
  },
  {
    content: "Set an initial milestone so everyone knows what comes first.",
    description: "Set a first milestone",
    panelTitle: "Project plan",
    tags: ["Milestone", "Target date"],
    title: "Plan",
  },
  {
    content: "Invite the people who will help move this project forward.",
    description: "Add your collaborators",
    panelTitle: "Team members",
    tags: ["Invite teammates", "Set roles"],
    title: "Team",
  },
];

export default Example;
