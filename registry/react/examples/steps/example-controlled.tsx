"use client";

import React from "react";
import { Button } from "@/registry/react/components/button";
import {
  Steps,
  StepsIndicator,
  StepsItem,
  StepsList,
  StepsSeparator,
  StepsTitle,
  StepsTrigger,
} from "@/registry/react/components/steps";

const Example = () => {
  const [step, setStep] = React.useState(0);

  return (
    <div className="mx-auto w-full max-w-xl">
      <Steps
        className="w-full"
        count={items.length}
        onStepChange={(details) => setStep(details.step)}
        step={step}
      >
        <StepsList>
          {items.map((item, index) => (
            <StepsItem index={index} key={item.title}>
              <StepsTrigger aria-label={item.title}>
                <StepsIndicator>{index + 1}</StepsIndicator>
                <StepsTitle className="hidden sm:inline">
                  {item.title}
                </StepsTitle>
              </StepsTrigger>
              <StepsSeparator />
            </StepsItem>
          ))}
        </StepsList>
      </Steps>

      <div className="mt-5 flex items-center justify-between">
        <Button
          disabled={step === 0}
          onClick={() => setStep((current) => Math.max(0, current - 1))}
          variant="outline"
        >
          Back
        </Button>
        <div className="flex gap-2">
          {step > 0 && (
            <Button onClick={() => setStep(0)} variant="ghost">
              Start over
            </Button>
          )}
          <Button
            onClick={() =>
              setStep((current) => Math.min(items.length, current + 1))
            }
          >
            {step === items.length - 1 ? "Create workspace" : "Continue"}
          </Button>
        </div>
      </div>
    </div>
  );
};

const items = [
  { title: "Workspace" },
  { title: "Template" },
  { title: "Invite" },
];

export default Example;
