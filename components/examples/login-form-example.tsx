"use client";

import { useState } from "react";
import { toast } from "@/components/examples/example-toast";
import { AppleIcon } from "@/components/icons/apple";
import { GoogleIcon } from "@/components/icons/google";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/react/components/avatar";
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
import { Input } from "@/registry/react/components/input";

export const LoginFormExample = (props: React.ComponentProps<"div">) => {
  const [open, setOpen] = useState(false);
  const [isCreating, setIsCreating] = useState(false);
  const [oauth, setOauth] = useState<"apple" | "google" | null>(null);

  const signInWith = async (provider: "apple" | "google") => {
    setOauth(provider);
    await new Promise((resolve) => {
      window.setTimeout(resolve, 600);
    });
    setOauth(null);
    toast.success({
      description: `Continue with ${provider === "google" ? "Google" : "Apple"} is a preview.`,
      title: "Signed in",
    });
  };

  return (
    <Card {...props}>
      <CardHeader className="flex flex-col items-center gap-4 text-center">
        <Avatar size="lg">
          <AvatarImage
            alt="Green mesh gradient"
            src="/images/gradients/purple.svg"
          />
          <AvatarFallback>AC</AvatarFallback>
        </Avatar>
        <div className="flex flex-col gap-1">
          <CardTitle className="text-2xl tracking-[-0.02em]">
            Create an account
          </CardTitle>
          <CardDescription>
            Start your free 7-day trial. No credit card required.
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <Dialog
          onOpenChange={({ open: openNext }) => setOpen(openNext)}
          open={open}
        >
          <DialogTrigger asChild>
            <Button className="w-full" size="lg">
              Get Started
            </Button>
          </DialogTrigger>
          <DialogContent>
            <form
              className="contents"
              onSubmit={async (event) => {
                event.preventDefault();
                setIsCreating(true);
                await new Promise((resolve) => {
                  window.setTimeout(resolve, 600);
                });
                setIsCreating(false);
                setOpen(false);
                toast.success({
                  description: "Your 7-day trial is ready.",
                  title: "Account created",
                });
              }}
            >
              <DialogHeader
                description="Use email to start the trial. This preview does not create a real account."
                title="Create an account"
              />
              <DialogBody>
                <FieldGroup>
                  <Field>
                    <FieldLabel>Email</FieldLabel>
                    <Input
                      autoComplete="email"
                      placeholder="you@example.com"
                      required
                      type="email"
                    />
                  </Field>
                  <Field>
                    <FieldLabel>Password</FieldLabel>
                    <Input
                      autoComplete="new-password"
                      placeholder="••••••••"
                      required
                      type="password"
                    />
                  </Field>
                </FieldGroup>
              </DialogBody>
              <DialogFooter>
                <DialogClose asChild>
                  <Button variant="outline">Cancel</Button>
                </DialogClose>
                <Button isLoading={isCreating} type="submit">
                  Create account
                </Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </CardContent>
      <CardFooter className="flex-col">
        <Button
          className="w-full"
          isLoading={oauth === "google"}
          onClick={() => signInWith("google")}
          variant="outline"
        >
          <GoogleIcon />
          Continue with Google
        </Button>
        <Button
          className="w-full"
          isLoading={oauth === "apple"}
          onClick={() => signInWith("apple")}
          variant="outline"
        >
          <AppleIcon />
          Continue with Apple
        </Button>
      </CardFooter>
    </Card>
  );
};
