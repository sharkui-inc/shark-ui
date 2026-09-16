import { Button } from "@/registry/react/components/button";
import {
  Card,
  CardAction,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/registry/react/components/card";
import { Field, FieldLabel } from "@/registry/react/components/field";
import { Input } from "@/registry/react/components/input";

const CardDemo = () => (
  <Card className="w-full max-w-sm">
    <CardHeader
      description="Enter your email below to login to your account"
      title="Login to your account"
    >
      <CardAction>
        <Button variant="link">Sign Up</Button>
      </CardAction>
    </CardHeader>
    <CardContent>
      <form>
        <div className="flex flex-col gap-6">
          <Field>
            <FieldLabel htmlFor="email">Email</FieldLabel>
            <Input
              id="email"
              placeholder="m@example.com"
              required
              type="email"
            />
          </Field>
          <div className="grid gap-2">
            <div className="flex items-center">
              <FieldLabel htmlFor="password">Password</FieldLabel>
              <a
                className="ms-auto inline-block text-sm underline-offset-4 hover:underline"
                href="#"
              >
                Forgot your password?
              </a>
            </div>
            <Input id="password" required type="password" />
          </div>
        </div>
      </form>
    </CardContent>
    <CardFooter className="flex-col gap-2">
      <Button className="w-full" type="submit">
        Login
      </Button>
      <Button className="w-full" variant="outline">
        Login with Google
      </Button>
    </CardFooter>
  </Card>
);

export default CardDemo;
