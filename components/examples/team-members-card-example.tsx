"use client";

import { createListCollection } from "@ark-ui/react";
import { useState } from "react";
import { toast } from "@/components/examples/example-toast";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/react/components/avatar";
import { Button } from "@/registry/react/components/button";
import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
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
import { Input } from "@/registry/react/components/input";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemTitle,
} from "@/registry/react/components/item";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/react/components/select";

const teamMembers = [
  {
    avatar: "https://github.com/vinihvc.png",
    email: "m@example.com",
    name: "Vinicius Vicentini",
    role: "Owner",
  },
  {
    avatar: "https://github.com/shadcn.png",
    email: "p@example.com",
    name: "Shadcn",
    role: "Developer",
  },
  {
    avatar: "https://github.com/pasqualevitiello.png",
    email: "i@example.com",
    name: "Pasquale Vitiello",
    role: "Billing",
  },
];

const collection = createListCollection({
  items: [
    {
      description: "Can view and comment.",
      value: "Viewer",
    },
    {
      description: "Can view, comment and edit.",
      value: "Developer",
    },
    {
      description: "Can view, comment and manage billing.",
      value: "Billing",
    },
    {
      description: "Admin-level access to all resources.",
      value: "Owner",
    },
  ],
});

export const TeamMembersCardExample = (props: React.ComponentProps<"div">) => {
  const [open, setOpen] = useState(false);
  const [isInviting, setIsInviting] = useState(false);

  return (
    <Card {...props}>
      <CardHeader
        description="Invite your team members to collaborate."
        title="Team Members"
      >
        <CardAction>
          <Dialog
            onOpenChange={({ open: openNext }) => setOpen(openNext)}
            open={open}
          >
            <DialogTrigger asChild>
              <Button size="sm">Invite</Button>
            </DialogTrigger>
            <DialogContent>
              <form
                className="contents"
                onSubmit={async (event) => {
                  event.preventDefault();
                  const form = new FormData(event.currentTarget);
                  const email = String(form.get("email") ?? "");
                  setIsInviting(true);
                  await new Promise((resolve) => {
                    window.setTimeout(resolve, 600);
                  });
                  setIsInviting(false);
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
                  description="They’ll receive a link to join this workspace."
                  title="Invite member"
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
                    <Field>
                      <FieldLabel>Role</FieldLabel>
                      <Select collection={collection} defaultValue={["Viewer"]}>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select a role" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup heading="Role">
                            {collection.items.map((role) => (
                              <SelectItem item={role} key={role.value}>
                                {role.value}
                              </SelectItem>
                            ))}
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </Field>
                  </FieldGroup>
                </DialogBody>
                <DialogFooter>
                  <DialogClose asChild>
                    <Button variant="outline">Cancel</Button>
                  </DialogClose>
                  <Button isLoading={isInviting} type="submit">
                    Send invite
                  </Button>
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>
        </CardAction>
      </CardHeader>

      <CardContent>
        {teamMembers.map((member) => (
          <Item className="px-0" key={member.name}>
            <Avatar className="self-start">
              <AvatarImage alt={member.name} src={member.avatar} />
              <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
            </Avatar>

            <ItemContent>
              <ItemTitle>{member.name}</ItemTitle>
              <ItemDescription>{member.email}</ItemDescription>
            </ItemContent>

            <ItemActions>
              <Select
                collection={collection}
                defaultValue={[member.role]}
                onValueChange={({ value }) => {
                  const role = value.at(0);

                  if (!role) {
                    return;
                  }

                  toast.info({
                    description: `${member.name} is now ${role}.`,
                    title: "Role updated",
                  });
                }}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select role..." />
                </SelectTrigger>

                <SelectContent>
                  <SelectGroup heading="Role">
                    {collection.items.map((role) => (
                      <SelectItem item={role} key={role.value}>
                        <div className="flex flex-col">
                          <p className="font-medium text-sm">{role.value}</p>
                          <p className="text-muted-foreground">
                            {role.description}
                          </p>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </ItemActions>
          </Item>
        ))}
      </CardContent>
    </Card>
  );
};
