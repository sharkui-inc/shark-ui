"use client";

import { CheckIcon } from "lucide-react";
import { useState } from "react";
import { toast } from "@/components/examples/example-toast";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogClose,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTrigger,
} from "@/registry/react/components/alert-dialog";
import { Button } from "@/registry/react/components/button";
import { ButtonGroup } from "@/registry/react/components/button-group";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/registry/react/components/card";
import {
  Item,
  ItemContent,
  ItemGroup,
  ItemMedia,
  ItemTitle,
} from "@/registry/react/components/item";

export const ActivateAgentExample = (props: React.ComponentProps<"div">) => {
  const [status, setStatus] = useState<"dismissed" | "enabled" | "idle">(
    "idle"
  );
  const [isEnabling, setIsEnabling] = useState(false);

  if (status === "dismissed") {
    return (
      <Card {...props}>
        <CardHeader
          description="You can turn reviews and traces on later from this repo."
          title="Maybe later"
        />
        <CardFooter className="justify-end">
          <Button onClick={() => setStatus("idle")} variant="outline">
            Show again
          </Button>
        </CardFooter>
      </Card>
    );
  }

  return (
    <Card {...props}>
      <CardHeader
        description="Reviews, suggestions, and traces stay in this repo."
        title="AI agent"
      />
      <CardContent>
        <ItemGroup className="gap-0">
          {agentFeatures.map((feature) => (
            <Item className="px-0" key={feature}>
              <ItemMedia variant="icon">
                <CheckIcon aria-hidden="true" className="size-4" />
              </ItemMedia>
              <ItemContent>
                <ItemTitle>{feature}</ItemTitle>
              </ItemContent>
            </Item>
          ))}
        </ItemGroup>
      </CardContent>
      <CardFooter className="justify-end">
        <ButtonGroup>
          {status === "enabled" ? (
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="outline">Disable</Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader
                  description="Reviews and sandbox suggestions will stop for this repo."
                  title="Disable the agent?"
                />
                <AlertDialogFooter>
                  <AlertDialogCancel>Keep enabled</AlertDialogCancel>
                  <AlertDialogClose asChild>
                    <AlertDialogAction
                      onClick={() => {
                        setStatus("idle");
                        toast.info({
                          description: "You can enable it again anytime.",
                          title: "Agent disabled",
                        });
                      }}
                      variant="destructive"
                    >
                      Disable
                    </AlertDialogAction>
                  </AlertDialogClose>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          ) : (
            <Button onClick={() => setStatus("dismissed")} variant="outline">
              Not now
            </Button>
          )}
          <Button
            disabled={status === "enabled"}
            isLoading={isEnabling}
            onClick={async () => {
              setIsEnabling(true);
              await new Promise((resolve) => {
                window.setTimeout(resolve, 600);
              });
              setIsEnabling(false);
              setStatus("enabled");
              toast.success({
                description: "Reviews and traces are on for this repo.",
                title: "Agent enabled",
              });
            }}
          >
            {status === "enabled" ? "Enabled" : "Enable"}
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};

const agentFeatures = [
  "Reviews with full codebase context",
  "Suggestions checked in a sandbox",
  "Root-cause traces from deploys",
];
