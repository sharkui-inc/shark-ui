"use client";

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
} from "@/registry/react/components/alert-dialog";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/react/components/avatar";
import { Button } from "@/registry/react/components/button";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/registry/react/components/item";

export const CommunitiesExample = (props: React.ComponentProps<"div">) => {
  const [joined, setJoined] = useState<string[]>([]);
  const [leaving, setLeaving] = useState<string | null>(null);

  return (
    <div className="flex flex-col gap-1" {...props}>
      {communities.map((community) => {
        const isJoined = joined.includes(community.name);

        return (
          <Item key={community.name} variant="outline">
            <ItemMedia>
              <Avatar size="lg">
                <AvatarImage alt={community.name} src={community.image} />
                <AvatarFallback>{community.initials}</AvatarFallback>
              </Avatar>
            </ItemMedia>
            <ItemContent>
              <ItemTitle>{community.name}</ItemTitle>
              <ItemDescription>
                {community.members} · {community.by}
              </ItemDescription>
            </ItemContent>
            <ItemActions>
              {isJoined ? (
                <Button
                  onClick={() => setLeaving(community.name)}
                  size="sm"
                  variant="outline"
                >
                  Joined
                </Button>
              ) : (
                <Button
                  onClick={() => {
                    setJoined((current) => [...current, community.name]);
                    toast.success({
                      description: `You’re in ${community.name}.`,
                      title: "Joined",
                    });
                  }}
                  size="sm"
                >
                  Join
                </Button>
              )}
            </ItemActions>
          </Item>
        );
      })}

      <AlertDialog
        onOpenChange={({ open }) => {
          if (!open) {
            setLeaving(null);
          }
        }}
        open={leaving !== null}
      >
        <AlertDialogContent>
          <AlertDialogHeader
            description={`You can join ${leaving ?? "this community"} again later.`}
            title={`Leave ${leaving ?? "this community"}?`}
          />
          <AlertDialogFooter>
            <AlertDialogCancel>Stay</AlertDialogCancel>
            <AlertDialogClose asChild>
              <AlertDialogAction
                onClick={() => {
                  const name = leaving;
                  setJoined((current) =>
                    current.filter((item) => item !== name)
                  );
                  setLeaving(null);
                  toast.info({
                    description: name ? `You left ${name}.` : undefined,
                    title: "Left community",
                  });
                }}
                variant="destructive"
              >
                Leave
              </AlertDialogAction>
            </AlertDialogClose>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

const communities = [
  {
    by: "by Vinicius",
    image: "https://github.com/vinihvc.png",
    initials: "IH",
    members: "1.2k members",
    name: "Indie Hackers",
  },
  {
    by: "by Sage",
    image: "https://github.com/segunadebayo.png",
    initials: "SA",
    members: "8.4k members",
    name: "AI Builders",
  },
];
