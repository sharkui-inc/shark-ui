import { ExternalLinkIcon, MailIcon } from "lucide-react";
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
  FieldGroup,
  FieldLabel,
} from "@/registry/react/components/field";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
  InputGroupTextarea,
} from "@/registry/react/components/input-group";

const InputGroupInCard = () => (
  <Card className="w-full">
    <CardHeader>
      <CardTitle>Card with Input Group</CardTitle>
      <CardDescription>This is a card with an input group.</CardDescription>
    </CardHeader>
    <CardContent>
      <FieldGroup>
        <Field>
          <FieldLabel>Email Address</FieldLabel>
          <InputGroup>
            <InputGroupInput placeholder="you@example.com" type="email" />
            <InputGroupAddon align="inline-end">
              <MailIcon aria-hidden />
            </InputGroupAddon>
          </InputGroup>
        </Field>
        <Field>
          <FieldLabel>Website URL</FieldLabel>
          <InputGroup>
            <InputGroupAddon>
              <InputGroupText>https://</InputGroupText>
            </InputGroupAddon>
            <InputGroupInput placeholder="example.com" />
            <InputGroupAddon align="inline-end">
              <ExternalLinkIcon aria-hidden />
            </InputGroupAddon>
          </InputGroup>
        </Field>
        <Field>
          <FieldLabel>Feedback &amp; Comments</FieldLabel>
          <InputGroup>
            <InputGroupTextarea
              className="min-h-[100px]"
              placeholder="Share your thoughts..."
            />
            <InputGroupAddon align="block-end">
              <InputGroupText>0/500 characters</InputGroupText>
            </InputGroupAddon>
          </InputGroup>
        </Field>
      </FieldGroup>
    </CardContent>
    <CardFooter className="justify-end gap-2">
      <Button variant="outline">Cancel</Button>
      <Button>Submit</Button>
    </CardFooter>
  </Card>
);

export default InputGroupInCard;
