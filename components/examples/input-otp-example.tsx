"use client";

import { RefreshCwIcon } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { toast } from "@/components/examples/example-toast";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/react/components/avatar";
import { Badge } from "@/registry/react/components/badge";
import { Button } from "@/registry/react/components/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/react/components/card";
import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@/registry/react/components/field";
import {
  InputOTP,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/registry/react/components/input-otp";
import { Status } from "@/registry/react/components/status";

export const InputOTPExample = (props: React.ComponentProps<"div">) => {
  const [value, setValue] = useState<string[]>([...PREVIEW_VALUE]);
  const [cooldown, setCooldown] = useState(0);
  const [isVerified, setIsVerified] = useState(false);
  const [isContinuing, setIsContinuing] = useState(false);
  const cooldownIntervalRef = useRef(0);

  useEffect(
    () => () => {
      window.clearInterval(cooldownIntervalRef.current);
    },
    []
  );

  const resendCode = () => {
    setValue([...EMPTY_VALUE]);
    setIsVerified(false);
    window.clearInterval(cooldownIntervalRef.current);
    setCooldown(15);
    cooldownIntervalRef.current = window.setInterval(() => {
      setCooldown((current) => {
        if (current <= 1) {
          window.clearInterval(cooldownIntervalRef.current);
          return 0;
        }

        return current - 1;
      });
    }, 1000);
    toast.info({
      description: `Sent to ${EMAIL}.`,
      title: "Code resent",
    });
  };

  return (
    <Card {...props}>
      <CardHeader className="flex flex-col items-center gap-4 text-center">
        <Avatar size="lg">
          <AvatarImage
            alt="Green mesh gradient"
            src="/images/gradients/green-dark.svg"
          />
          <AvatarFallback>YO</AvatarFallback>
        </Avatar>
        <div className="flex flex-col items-center gap-1">
          <CardTitle className="text-2xl tracking-[-0.02em]">
            {isVerified ? "You're in" : "Check your email"}
          </CardTitle>
          <CardDescription>
            {isVerified
              ? `${EMAIL} is verified. Continue to your workspace.`
              : `We sent a 6-digit code to ${EMAIL}.`}
          </CardDescription>
        </div>
        {isVerified ? (
          <Badge variant="outline">
            <Status size="sm" variant="success" />
            Verified
          </Badge>
        ) : null}
      </CardHeader>
      {isVerified ? (
        <CardFooter className="flex-col">
          <Button
            className="w-full"
            isLoading={isContinuing}
            onClick={async () => {
              setIsContinuing(true);
              await new Promise((resolve) => {
                window.setTimeout(resolve, 600);
              });
              setIsContinuing(false);
              toast.success({
                description: "This preview does not open a workspace.",
                title: "Welcome in",
              });
            }}
            size="lg"
          >
            Continue
          </Button>
          <Button
            className="w-full"
            onClick={() => {
              setIsVerified(false);
              setValue([...EMPTY_VALUE]);
              toast.info({
                description: "This preview keeps you on this step.",
                title: "Use a different email",
              });
            }}
            variant="outline"
          >
            Use a different email
          </Button>
        </CardFooter>
      ) : (
        <CardContent>
          <Field className="gap-4">
            <FieldLabel className="sr-only">Verification code</FieldLabel>
            <InputOTP
              blurOnComplete
              className="w-full *:data-[slot=input-otp-input]:h-11 *:data-[slot=input-otp-input]:min-w-0 *:data-[slot=input-otp-input]:flex-1 *:data-[slot=input-otp-input]:font-medium *:data-[slot=input-otp-input]:text-lg"
              onValueChange={({ value: next }) => setValue(next)}
              onValueComplete={() => {
                setIsVerified(true);
                toast.success({
                  description: `${EMAIL} is verified.`,
                  title: "Code accepted",
                });
              }}
              value={value}
            >
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
              <InputOTPSeparator />
              <InputOTPSlot index={3} />
              <InputOTPSlot index={4} />
              <InputOTPSlot index={5} />
            </InputOTP>
            <FieldDescription className="text-center">
              The code expires in 10 minutes.
            </FieldDescription>
            <div className="flex flex-col items-center gap-2">
              <Button
                disabled={cooldown > 0}
                onClick={resendCode}
                size="sm"
                variant="ghost"
              >
                <RefreshCwIcon aria-hidden="true" />
                {cooldown > 0 ? `Resend in ${cooldown}s` : "Resend code"}
              </Button>
              <Button
                className="text-muted-foreground"
                onClick={() => {
                  toast.info({
                    description: "This preview keeps you on this step.",
                    title: "Use a different email",
                  });
                }}
                size="sm"
                variant="ghost"
              >
                Use a different email
              </Button>
            </div>
          </Field>
        </CardContent>
      )}
    </Card>
  );
};

const EMPTY_VALUE = ["", "", "", "", "", ""];
const PREVIEW_VALUE = ["5", "5", "1", "6", "", ""];
const EMAIL = "you@example.com";
