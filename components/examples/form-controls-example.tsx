"use client";

import { CrownIcon, FileTextIcon, PencilIcon } from "lucide-react";
import { useState } from "react";
import { toast } from "@/components/examples/example-toast";
import {
  Avatar,
  AvatarBadge,
  AvatarFallback,
  AvatarGroup,
  AvatarImage,
} from "@/registry/react/components/avatar";
import { Badge } from "@/registry/react/components/badge";
import { Button } from "@/registry/react/components/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/registry/react/components/card";
import {
  Clipboard,
  ClipboardIndicator,
  ClipboardInput,
  ClipboardTrigger,
} from "@/registry/react/components/clipboard";
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
  FieldTitle,
} from "@/registry/react/components/field";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/registry/react/components/input-group";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/registry/react/components/item";
import {
  RadioGroup,
  RadioGroupItem,
} from "@/registry/react/components/radio-group";
import { Switch } from "@/registry/react/components/switch";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/registry/react/components/tooltip";

export const FormControlsExample = (props: React.ComponentProps<"div">) => {
  const [access, setAccess] = useState<"anyone" | "invite">(INITIAL.access);
  const [comments, setComments] = useState(INITIAL.comments);
  const [isSaving, setIsSaving] = useState(false);

  const isInvite = access === "invite";

  return (
    <Card {...props}>
      <CardHeader
        description="Choose who can open this file."
        title="Share access"
      />
      <CardContent>
        <FieldGroup>
          <Item variant="outline">
            <ItemMedia variant="icon">
              <FileTextIcon aria-hidden="true" />
            </ItemMedia>
            <ItemContent>
              <ItemTitle>Q3 launch notes</ItemTitle>
              <ItemDescription>PDF · 2.4 MB</ItemDescription>
            </ItemContent>
            <ItemActions>
              <Badge variant="outline">
                {isInvite ? "Invite only" : "Anyone"}
              </Badge>
            </ItemActions>
          </Item>
          <FieldSet>
            <FieldLegend variant="label">Access</FieldLegend>
            <RadioGroup
              onValueChange={({ value }) => {
                if (value === "anyone" || value === "invite") {
                  setAccess(value);
                }
              }}
              value={access}
            >
              {ACCESS_OPTIONS.map((option) => (
                <FieldLabel key={option.value}>
                  <Field orientation="horizontal">
                    <FieldContent>
                      <FieldTitle>{option.title}</FieldTitle>
                      <FieldDescription>{option.description}</FieldDescription>
                    </FieldContent>
                    <RadioGroupItem
                      className="**:data-[slot=radio-group-item-text]:hidden"
                      value={option.value}
                    />
                  </Field>
                </FieldLabel>
              ))}
            </RadioGroup>
          </FieldSet>
          {isInvite ? (
            <FieldSet>
              <FieldLegend variant="label">People with access</FieldLegend>
              <AvatarGroup>
                {PEOPLE.map((person) => (
                  <Avatar
                    aria-label={`${person.name}, ${person.role}`}
                    key={person.name}
                    size="lg"
                  >
                    <AvatarImage alt={person.name} src={person.avatar} />
                    <AvatarFallback>{person.initials}</AvatarFallback>
                    <AvatarBadge>
                      <person.BadgeIcon />
                    </AvatarBadge>
                  </Avatar>
                ))}
              </AvatarGroup>
            </FieldSet>
          ) : (
            <Field>
              <FieldLabel>Link</FieldLabel>
              <Clipboard
                className="w-full"
                onStatusChange={({ copied }) => {
                  if (!copied) {
                    return;
                  }

                  toast.success({
                    description: SHARE_URL,
                    title: "Link copied",
                  });
                }}
                value={SHARE_URL}
              >
                <InputGroup>
                  <ClipboardInput
                    asChild
                    className="h-full flex-1 rounded-none border-0 bg-transparent px-0 shadow-none focus-visible:ring-0 dark:bg-transparent"
                  >
                    <InputGroupInput
                      aria-label="Share link"
                      className="font-mono text-xs"
                      onFocus={(event) => event.currentTarget.select()}
                      readOnly
                    />
                  </ClipboardInput>
                  <InputGroupAddon align="inline-end">
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <ClipboardTrigger asChild>
                          <InputGroupButton
                            aria-label="Copy link"
                            size="icon-xs"
                          >
                            <ClipboardIndicator />
                          </InputGroupButton>
                        </ClipboardTrigger>
                      </TooltipTrigger>
                      <TooltipContent>Copy link</TooltipContent>
                    </Tooltip>
                  </InputGroupAddon>
                </InputGroup>
              </Clipboard>
            </Field>
          )}
        </FieldGroup>
      </CardContent>
      <CardFooter className="flex-col items-stretch gap-4">
        <Field className="justify-between" orientation="horizontal">
          <FieldLabel>Allow comments</FieldLabel>
          <Switch
            checked={comments}
            onCheckedChange={({ checked }) => setComments(checked === true)}
          />
        </Field>
        <Button
          className="w-full"
          isLoading={isSaving}
          onClick={async () => {
            setIsSaving(true);
            await new Promise((resolve) => {
              window.setTimeout(resolve, 600);
            });
            setIsSaving(false);
            toast.success({
              description: isInvite
                ? "Invited people can open this file."
                : "Anyone with the link can open this file.",
              title: "Access updated",
            });
          }}
        >
          Save changes
        </Button>
      </CardFooter>
    </Card>
  );
};

const SHARE_URL = "https://shark.vini.one/share/q3-launch";

const INITIAL = {
  access: "invite" as const,
  comments: true,
};

const ACCESS_OPTIONS = [
  {
    description: "Anyone who has the URL can open it.",
    title: "Anyone with the link",
    value: "anyone",
  },
  {
    description: "Only people you invite can open it.",
    title: "Invite only",
    value: "invite",
  },
] as const;

const PEOPLE = [
  {
    avatar: "https://github.com/vinihvc.png",
    BadgeIcon: CrownIcon,
    email: "m@example.com",
    initials: "VV",
    name: "Vinicius Vicentini",
    role: "Owner",
  },
  {
    avatar: "https://github.com/shadcn.png",
    BadgeIcon: PencilIcon,
    email: "p@example.com",
    initials: "SC",
    name: "Shadcn",
    role: "Can edit",
  },
] as const;
