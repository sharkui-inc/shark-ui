"use client";

import { BadgeCheckIcon, MailIcon } from "lucide-react";
import { useState } from "react";
import { toast } from "@/components/examples/example-toast";
import { Avatar, AvatarFallback } from "@/registry/react/components/avatar";
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
  Dialog,
  DialogBody,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
} from "@/registry/react/components/dialog";
import {
  Field,
  FieldGroup,
  FieldLabel,
} from "@/registry/react/components/field";
import { Textarea } from "@/registry/react/components/textarea";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/registry/react/components/tooltip";
import { SharkIcon } from "../icons/shark";

export const SocialProfileExample = (props: React.ComponentProps<"div">) => {
  const [isFollowing, setIsFollowing] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [messageOpen, setMessageOpen] = useState(false);
  const followers = isFollowing ? "12.5K" : "12.4K";

  return (
    <Card {...props}>
      <CardHeader className="flex flex-row items-center gap-3">
        <Avatar size="lg">
          <AvatarFallback>
            <SharkIcon />
          </AvatarFallback>
        </Avatar>

        <div className="flex min-w-0 flex-col gap-0.5">
          <div className="flex items-center gap-1">
            <CardTitle className="text-sm">Shark UI</CardTitle>
            <Tooltip>
              <TooltipTrigger asChild>
                <span className="inline-flex">
                  <BadgeCheckIcon aria-label="Verified" className="size-4" />
                </span>
              </TooltipTrigger>
              <TooltipContent>Verified</TooltipContent>
            </Tooltip>
          </div>
          <CardDescription className="text-xs">@shark_ui</CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm">Accessible primitives on Ark UI and Tailwind.</p>
      </CardContent>
      <CardFooter className="flex-wrap justify-between gap-3">
        <div className="flex gap-4">
          <p className="text-sm">
            <span className="font-medium text-foreground">4</span>{" "}
            <span className="text-muted-foreground">Following</span>
          </p>
          <p className="text-sm">
            <span className="font-medium text-foreground">{followers}</span>{" "}
            <span className="text-muted-foreground">Followers</span>
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Dialog
            onOpenChange={({ open: openNext }) => setMessageOpen(openNext)}
            open={messageOpen}
          >
            <Tooltip>
              <TooltipTrigger asChild>
                <DialogTrigger asChild>
                  <Button aria-label="Message" size="icon-sm" variant="outline">
                    <MailIcon aria-hidden="true" />
                  </Button>
                </DialogTrigger>
              </TooltipTrigger>
              <TooltipContent>Message</TooltipContent>
            </Tooltip>
            <DialogContent>
              <form
                className="contents"
                onSubmit={async (event) => {
                  event.preventDefault();
                  setIsSending(true);
                  await new Promise((resolve) => {
                    window.setTimeout(resolve, 600);
                  });
                  setIsSending(false);
                  setMessageOpen(false);
                  toast.success({
                    description: "Your note was sent to @shark_ui.",
                    title: "Message sent",
                  });
                }}
              >
                <DialogHeader
                  description="This preview does not deliver a real message."
                  title="Message Shark UI"
                />
                <DialogBody>
                  <FieldGroup>
                    <Field>
                      <FieldLabel>Message</FieldLabel>
                      <Textarea placeholder="Say hello…" required rows={4} />
                    </Field>
                  </FieldGroup>
                </DialogBody>
                <DialogFooter>
                  <DialogClose asChild>
                    <Button variant="outline">Cancel</Button>
                  </DialogClose>
                  <Button isLoading={isSending} type="submit">
                    Send
                  </Button>
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>
          <Button
            onClick={() => setIsFollowing((current) => !current)}
            size="sm"
            variant={isFollowing ? "outline" : "default"}
          >
            {isFollowing ? "Following" : "Follow"}
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};
