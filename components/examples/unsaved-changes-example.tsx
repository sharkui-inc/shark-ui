"use client";

import { FileTextIcon } from "lucide-react";
import { useState } from "react";
import { toast } from "@/components/examples/example-toast";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogClose,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTrigger,
} from "@/registry/react/components/alert-dialog";
import { Badge } from "@/registry/react/components/badge";
import { Button } from "@/registry/react/components/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/registry/react/components/card";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/registry/react/components/item";

export const UnsavedChangesExample = (props: React.ComponentProps<"div">) => {
  const [status, setStatus] = useState<"discarded" | "idle" | "saved">("idle");
  const [isSaving, setIsSaving] = useState(false);
  const badge = STATUS_BADGE[status];

  return (
    <Card {...props}>
      <CardHeader
        description={
          status === "idle"
            ? "Save before leaving this page?"
            : "You can keep editing this preview."
        }
        title={STATUS_TITLE[status]}
      />
      <CardContent>
        <Item variant="outline">
          <ItemMedia variant="icon">
            <FileTextIcon aria-hidden="true" />
          </ItemMedia>
          <ItemContent>
            <ItemTitle>Q3 launch notes</ItemTitle>
            <ItemDescription>{STATUS_META[status]}</ItemDescription>
          </ItemContent>
          <ItemActions>
            <Badge variant={badge.variant}>{badge.label}</Badge>
          </ItemActions>
        </Item>
      </CardContent>
      <CardFooter>
        <div className="grid w-full grid-cols-2 gap-2">
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button className="w-full" variant="outline">
                Discard
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader
                description="This preview will reset. You cannot undo this in the demo."
                title="Discard unsaved changes?"
              />
              <AlertDialogFooter>
                <AlertDialogCancel>Keep editing</AlertDialogCancel>
                <AlertDialogClose asChild>
                  <AlertDialogAction
                    onClick={() => {
                      setStatus("discarded");
                      toast.info({ title: "Changes discarded" });
                    }}
                    variant="destructive"
                  >
                    Discard
                  </AlertDialogAction>
                </AlertDialogClose>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
          <Button
            className="w-full"
            isLoading={isSaving}
            onClick={async () => {
              setIsSaving(true);
              await new Promise((resolve) => {
                window.setTimeout(resolve, 600);
              });
              setIsSaving(false);
              setStatus("saved");
              toast.success({ title: "Changes saved" });
            }}
          >
            Save
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

const STATUS_TITLE = {
  discarded: "Changes discarded",
  idle: "Unsaved changes",
  saved: "All changes saved",
} as const;

const STATUS_META = {
  discarded: "Draft reset in this preview.",
  idle: "Edited 2 min ago · 3 unsaved edits",
  saved: "Saved just now",
} as const;

const STATUS_BADGE = {
  discarded: { label: "Discarded", variant: "outline" },
  idle: { label: "Unsaved", variant: "warning" },
  saved: { label: "Saved", variant: "success" },
} as const;
