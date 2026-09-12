"use client";

import { PlusIcon } from "lucide-react";
import { useState } from "react";
import { toast } from "@/components/examples/example-toast";
import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
  AvatarImage,
} from "@/registry/react/components/avatar";
import { Button } from "@/registry/react/components/button";
import { Card, CardContent } from "@/registry/react/components/card";
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
import { Input } from "@/registry/react/components/input";

export const AvatarGroupEmptyExample = (props: React.ComponentProps<"div">) => {
  const [open, setOpen] = useState(false);
  const [isSending, setIsSending] = useState(false);

  return (
    <Card {...props}>
      <CardContent className="flex flex-col items-center gap-4">
        <AvatarGroup>
          {members.map((member) => (
            <Avatar key={member.username}>
              <AvatarImage
                alt={`@${member.username}`}
                src={`https://github.com/${member.username}.png`}
              />
              <AvatarFallback>{member.fallback}</AvatarFallback>
            </Avatar>
          ))}
        </AvatarGroup>
        <div className="text-center">
          <h3 className="font-medium">No Team Members</h3>
          <p className="text-muted-foreground text-sm">
            Invite your team to collaborate on this project.
          </p>
        </div>
        <Dialog
          onOpenChange={({ open: openNext }) => setOpen(openNext)}
          open={open}
        >
          <DialogTrigger asChild>
            <Button>
              <PlusIcon />
              Invite Members
            </Button>
          </DialogTrigger>
          <DialogContent>
            <form
              className="contents"
              onSubmit={async (event) => {
                event.preventDefault();
                const form = new FormData(event.currentTarget);
                const email = String(form.get("email") ?? "");
                setIsSending(true);
                await new Promise((resolve) => {
                  window.setTimeout(resolve, 600);
                });
                setIsSending(false);
                setOpen(false);
                toast.success({
                  description: email
                    ? `Invite sent to ${email}.`
                    : "Invite sent.",
                  title: "Invite sent",
                });
              }}
            >
              <DialogHeader
                description="They’ll get a link to join this preview workspace."
                title="Invite a teammate"
              />
              <DialogBody>
                <FieldGroup>
                  <Field>
                    <FieldLabel>Email</FieldLabel>
                    <Input
                      autoComplete="email"
                      name="email"
                      placeholder="alex@example.com"
                      required
                      type="email"
                    />
                  </Field>
                </FieldGroup>
              </DialogBody>
              <DialogFooter>
                <DialogClose asChild>
                  <Button variant="outline">Cancel</Button>
                </DialogClose>
                <Button isLoading={isSending} type="submit">
                  Send invite
                </Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </CardContent>
    </Card>
  );
};

const members = [
  { fallback: "VV", username: "vinihvc" },
  { fallback: "SA", username: "segunadebayo" },
  { fallback: "PV", username: "pasqualevitiello" },
  { fallback: "CN", username: "shadcn" },
];
