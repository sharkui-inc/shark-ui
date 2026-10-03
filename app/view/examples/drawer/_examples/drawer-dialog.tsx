"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/registry/react/components/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/registry/react/components/dialog";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/registry/react/components/drawer";
import { FieldLabel } from "@/registry/react/components/field";
import { Input } from "@/registry/react/components/input";
import { useMediaQuery } from "@/registry/react/hooks/use-media-query";

const DrawerDialog = () => {
  const [open, setOpen] = React.useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  if (isDesktop) {
    return (
      <Dialog
        onOpenChange={({ open: nextOpen }) => setOpen(nextOpen)}
        open={open}
      >
        <DialogTrigger asChild>
          <Button variant="outline">Edit Profile</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you&apos;re
              done.
            </DialogDescription>
          </DialogHeader>
          <ProfileForm className="px-6 pb-6" />
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer
      onOpenChange={({ open: nextOpen }) => setOpen(nextOpen)}
      open={open}
    >
      <DrawerTrigger asChild>
        <Button variant="outline">Edit Profile</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle>Edit profile</DrawerTitle>
          <DrawerDescription>
            Make changes to your profile here. Click save when you&apos;re done.
          </DrawerDescription>
        </DrawerHeader>
        <ProfileForm className="p-4" />
      </DrawerContent>
    </Drawer>
  );
};

const ProfileForm = (props: React.ComponentProps<"form">) => {
  const { className, ...rest } = props;

  return (
    <form className={cn("grid items-start gap-6", className)} {...rest}>
      <div className="grid gap-3">
        <FieldLabel htmlFor="drawer-dialog-email">Email</FieldLabel>
        <Input
          defaultValue="shadcn@example.com"
          id="drawer-dialog-email"
          type="email"
        />
      </div>
      <div className="grid gap-3">
        <FieldLabel htmlFor="drawer-dialog-username">Username</FieldLabel>
        <Input defaultValue="@shadcn" id="drawer-dialog-username" />
      </div>
      <Button type="submit">Save changes</Button>
    </form>
  );
};

export default DrawerDialog;
