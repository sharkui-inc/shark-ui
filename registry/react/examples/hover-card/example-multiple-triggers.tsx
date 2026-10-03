"use client";

import React from "react";
import { Avatar, AvatarFallback } from "@/registry/react/components/avatar";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/registry/react/components/hover-card";

const Example = () => {
  const [activeProfile, setActiveProfile] = React.useState<
    (typeof profiles)[number] | null
  >(null);

  return (
    <HoverCard
      onTriggerValueChange={({ value }) => {
        setActiveProfile(
          profiles.find((profile) => profile.value === value) ?? null
        );
      }}
    >
      <p className="text-muted-foreground text-sm">
        Reviewed by{" "}
        <HoverCardTrigger asChild value="alice">
          <button
            className="font-medium text-foreground underline underline-offset-4"
            type="button"
          >
            @alice
          </button>
        </HoverCardTrigger>
        ,{" "}
        <HoverCardTrigger asChild value="bob">
          <button
            className="font-medium text-foreground underline underline-offset-4"
            type="button"
          >
            @bob
          </button>
        </HoverCardTrigger>
        , and{" "}
        <HoverCardTrigger asChild value="carol">
          <button
            className="font-medium text-foreground underline underline-offset-4"
            type="button"
          >
            @carol
          </button>
        </HoverCardTrigger>
        .
      </p>
      <HoverCardContent>
        {activeProfile ? (
          <div className="flex gap-4">
            <Avatar>
              <AvatarFallback>{activeProfile.initials}</AvatarFallback>
            </Avatar>
            <div className="flex flex-col gap-2">
              <div className="flex flex-col">
                <span className="font-medium text-sm">
                  {activeProfile.name}
                </span>
                <span className="text-muted-foreground text-sm">
                  {activeProfile.username}
                </span>
              </div>
              <p className="text-muted-foreground text-sm">
                {activeProfile.bio}
              </p>
            </div>
          </div>
        ) : null}
      </HoverCardContent>
    </HoverCard>
  );
};

const profiles = [
  {
    bio: "Design engineer at Onda. Building clear product interfaces.",
    initials: "AJ",
    name: "Alice Johnson",
    username: "@alice",
    value: "alice",
  },
  {
    bio: "Full-stack developer and open source contributor.",
    initials: "BS",
    name: "Bob Smith",
    username: "@bob",
    value: "bob",
  },
  {
    bio: "DevOps lead. Automating the boring parts of shipping.",
    initials: "CD",
    name: "Carol Davis",
    username: "@carol",
    value: "carol",
  },
];

export default Example;
