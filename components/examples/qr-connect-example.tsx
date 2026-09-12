"use client";

import { CopyIcon, LaptopIcon, RefreshCwIcon } from "lucide-react";
import { useState } from "react";
import { toast } from "@/components/examples/example-toast";
import { Badge } from "@/registry/react/components/badge";
import { Button } from "@/registry/react/components/button";
import {
  Card,
  CardAction,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/registry/react/components/card";
import { Field, FieldLabel } from "@/registry/react/components/field";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/registry/react/components/input-group";
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/registry/react/components/item";
import { QrCode, QrCodeFrame } from "@/registry/react/components/qr-code";
import { Status } from "@/registry/react/components/status";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/registry/react/components/tooltip";

export const QrConnectExample = (props: React.ComponentProps<"div">) => {
  const [isLinked, setIsLinked] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);
  const [session, setSession] = useState(0);

  const pairing = SESSIONS[session % SESSIONS.length];

  return (
    <Card {...props}>
      <CardHeader
        description={
          isLinked
            ? "This preview session is linked to your account."
            : "Scan in the Shark app, or enter the code below."
        }
        title={isLinked ? "Device linked" : "Connect device"}
      >
        {isLinked ? (
          <CardAction>
            <Badge variant="outline">
              <Status size="sm" variant="success" />
              Linked
            </Badge>
          </CardAction>
        ) : null}
      </CardHeader>
      <CardContent>
        {isLinked ? (
          <Item variant="outline">
            <ItemMedia variant="icon">
              <LaptopIcon aria-hidden="true" />
            </ItemMedia>
            <ItemContent>
              <ItemTitle>MacBook Pro</ItemTitle>
              <ItemDescription>Chrome on macOS · Just now</ItemDescription>
            </ItemContent>
          </Item>
        ) : (
          <div className="flex flex-col items-center gap-4">
            <QrCode
              aria-label="Scan to link this session"
              className="[--qr-code-size:11rem]"
              encoding={{ ecc: "H" }}
              value={pairing.url}
            >
              <QrCodeFrame />
            </QrCode>
            <Field>
              <FieldLabel>Pairing code</FieldLabel>
              <InputGroup>
                <InputGroupInput
                  className="font-mono tracking-widest"
                  onFocus={(event) => event.currentTarget.select()}
                  readOnly
                  value={pairing.code}
                />
                <InputGroupAddon align="inline-end">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <InputGroupButton
                        aria-label="Copy pairing code"
                        onClick={async () => {
                          await navigator.clipboard.writeText(pairing.code);
                          toast.success({
                            description: pairing.code,
                            title: "Copied",
                          });
                        }}
                        size="icon-xs"
                      >
                        <CopyIcon aria-hidden="true" />
                      </InputGroupButton>
                    </TooltipTrigger>
                    <TooltipContent>Copy code</TooltipContent>
                  </Tooltip>
                </InputGroupAddon>
              </InputGroup>
            </Field>
          </div>
        )}
      </CardContent>
      <CardFooter>
        {isLinked ? (
          <Button
            className="w-full"
            onClick={() => {
              setIsLinked(false);
              toast.info({ title: "Device disconnected" });
            }}
            variant="outline"
          >
            Disconnect
          </Button>
        ) : (
          <div className="grid w-full grid-cols-2 gap-2">
            <Button
              disabled={isVerifying}
              onClick={() => {
                setSession((current) => current + 1);
                toast.info({ title: "New code ready" });
              }}
              variant="outline"
            >
              <RefreshCwIcon aria-hidden="true" />
              Refresh
            </Button>
            <Button
              isLoading={isVerifying}
              onClick={async () => {
                setIsVerifying(true);
                await new Promise((resolve) => {
                  window.setTimeout(resolve, 700);
                });
                setIsVerifying(false);
                setIsLinked(true);
                toast.success({
                  description: "This preview session is linked.",
                  title: "Device linked",
                });
              }}
            >
              Verify
            </Button>
          </div>
        )}
      </CardFooter>
    </Card>
  );
};

const SESSIONS = [
  { code: "7K4M-2Q8P", url: "https://shark.vini.one/connect?s=1" },
  { code: "N4XP-8W3C", url: "https://shark.vini.one/connect?s=2" },
  { code: "Q2H9-L6DT", url: "https://shark.vini.one/connect?s=3" },
  { code: "B8RM-5Y1K", url: "https://shark.vini.one/connect?s=4" },
] as const;
