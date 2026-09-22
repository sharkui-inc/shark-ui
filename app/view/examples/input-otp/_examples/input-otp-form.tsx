import { RefreshCwIcon } from "lucide-react";
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

const InputOTPForm = () => (
  <Card className="mx-auto max-w-md">
    <CardHeader>
      <CardTitle>Verify your login</CardTitle>
      <CardDescription>
        Enter the verification code we sent to your email address:{" "}
        <span className="font-medium">m@example.com</span>.
      </CardDescription>
    </CardHeader>
    <CardContent>
      <Field>
        <div className="flex items-center justify-between">
          <FieldLabel htmlFor="otp-verification">Verification code</FieldLabel>
          <Button size="xs" variant="outline">
            <RefreshCwIcon aria-hidden data-icon="inline-start" />
            Resend Code
          </Button>
        </div>
        <InputOTP id="otp-verification" required>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
          <InputOTPSeparator className="mx-2" />
          <InputOTPSlot index={3} />
          <InputOTPSlot index={4} />
          <InputOTPSlot index={5} />
        </InputOTP>
        <FieldDescription>
          <a href="#">I no longer have access to this email address.</a>
        </FieldDescription>
      </Field>
    </CardContent>
    <CardFooter>
      <Field>
        <Button className="w-full" type="submit">
          Verify
        </Button>
        <div className="text-muted-foreground text-sm">
          Having trouble signing in?{" "}
          <a
            className="underline underline-offset-4 transition-colors hover:text-primary"
            href="#"
          >
            Contact support
          </a>
        </div>
      </Field>
    </CardFooter>
  </Card>
);

export default InputOTPForm;
