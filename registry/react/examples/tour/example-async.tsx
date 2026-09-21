"use client";

import {
  ChevronRightIcon,
  CircleAlertIcon,
  WavesHorizontalIcon,
} from "lucide-react";
import React from "react";
import { Button } from "@/registry/react/components/button";
import { Spinner } from "@/registry/react/components/spinner";
import {
  Tour,
  TourActions,
  TourContent,
  TourDescription,
  TourFooter,
  TourHeader,
  TourProgressText,
  type TourStepType,
  TourTitle,
  TourTrigger,
  useTour,
} from "@/registry/react/components/tour";

const Example = () => {
  const [profile, setProfile] = React.useState<Profile | null>(null);
  const [profileStatus, setProfileStatus] =
    React.useState<ProfileStatus>("idle");
  const profileRef = React.useRef(profile);
  profileRef.current = profile;

  const steps = React.useMemo(
    () => createSteps(setProfile, setProfileStatus, profileRef),
    []
  );

  const tour = useTour({ steps });

  return (
    <div className="flex w-full max-w-sm flex-col gap-4">
      <Tour tour={tour}>
        <TourTrigger asChild>
          <Button variant="outline">Start tour</Button>
        </TourTrigger>

        <div
          aria-busy={profileStatus === "loading"}
          className="flex items-center gap-3 rounded-lg border bg-card p-3 shadow-xs/4"
          id="tour-async-profile"
        >
          <ProfileCard profile={profile} status={profileStatus} />
        </div>

        <TourContent>
          <TourHeader>
            <TourProgressText />
            <TourTitle>
              {profileStatus === "loading" ? "Loading profile" : null}
            </TourTitle>
            <TourDescription>
              {profileStatus === "loading" ? "Fetching from GitHub" : null}
            </TourDescription>
          </TourHeader>
          {profileStatus === "loading" ? (
            <TourFooter>
              <Button
                className="col-start-3 row-start-1 justify-self-end"
                isLoading
                size="sm"
              >
                Next
                <ChevronRightIcon
                  aria-hidden="true"
                  className="size-3.5 rtl:rotate-180"
                />
              </Button>
            </TourFooter>
          ) : (
            <TourActions />
          )}
        </TourContent>
      </Tour>
    </div>
  );
};

interface Profile {
  avatarUrl: string;
  followers: number;
  name: string;
  repos: number;
}

type ProfileStatus = "idle" | "loading" | "ready" | "error";

const ProfileCard = (props: {
  profile: Profile | null;
  status: ProfileStatus;
}) => {
  const { profile, status } = props;

  switch (status) {
    case "ready": {
      if (!profile) {
        return <ProfilePlaceholder />;
      }

      return (
        <>
          <img
            alt=""
            className="size-12 rounded-md object-cover"
            height={48}
            src={profile.avatarUrl}
            width={48}
          />
          <div className="flex min-w-0 flex-col">
            <span className="truncate font-medium text-sm">{profile.name}</span>
            <span className="truncate text-muted-foreground text-xs">
              {profile.repos} repos · {profile.followers} followers
            </span>
          </div>
        </>
      );
    }
    case "loading":
      return (
        <>
          <span className="flex size-12 shrink-0 items-center justify-center rounded-md bg-muted text-muted-foreground">
            <Spinner />
          </span>
          <div className="flex min-w-0 flex-col">
            <span className="truncate font-medium text-sm">
              Loading profile
            </span>
            <span className="truncate text-muted-foreground text-xs">
              Fetching from GitHub
            </span>
          </div>
        </>
      );
    case "error":
      return (
        <>
          <span className="flex size-12 shrink-0 items-center justify-center rounded-md bg-muted text-muted-foreground">
            <CircleAlertIcon aria-hidden="true" className="size-4" />
          </span>
          <div className="flex min-w-0 flex-col">
            <span className="truncate font-medium text-sm">
              Profile unavailable
            </span>
            <span className="truncate text-muted-foreground text-xs">
              GitHub did not respond
            </span>
          </div>
        </>
      );
    case "idle":
      return <ProfilePlaceholder />;
    default: {
      const exhaustive: never = status;
      return exhaustive;
    }
  }
};

const ProfilePlaceholder = () => (
  <>
    <span className="flex size-12 shrink-0 items-center justify-center rounded-md bg-muted text-muted-foreground">
      <WavesHorizontalIcon aria-hidden="true" className="size-4" />
    </span>
    <div className="flex min-w-0 flex-col">
      <span className="truncate font-medium text-sm">Waiting for GitHub</span>
      <span className="truncate text-muted-foreground text-xs">
        The profile loads with the next step
      </span>
    </div>
  </>
);

interface GitHubUser {
  avatar_url?: string;
  followers?: number;
  login?: string;
  name?: string | null;
  public_repos?: number;
}

const createSteps = (
  setProfile: React.Dispatch<React.SetStateAction<Profile | null>>,
  setProfileStatus: React.Dispatch<React.SetStateAction<ProfileStatus>>,
  profileRef: React.RefObject<Profile | null>
): TourStepType[] => [
  {
    actions: [{ action: "next", label: "Next" }],
    description: "The next step loads a GitHub profile first.",
    id: "intro",
    title: "Load a profile",
    type: "dialog",
  },
  {
    actions: [{ action: "prev", label: "Back" }],
    description: "Fetching the profile…",
    effect({ show, update }) {
      const controller = new AbortController();

      setProfileStatus("loading");

      fetch("https://api.github.com/users/vinihvc", {
        signal: controller.signal,
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Request failed");
          }

          return response.json() as Promise<GitHubUser>;
        })
        .then((data) => {
          const name = data.name ?? data.login ?? "GitHub user";
          const repos = data.public_repos ?? 0;
          const followers = data.followers ?? 0;

          setProfile({
            avatarUrl:
              data.avatar_url ||
              "https://api.dicebear.com/10.x/waves/svg?backgroundColor=e8f1fb&scale=1.2&seed=github-profile&waveColor=2b6cb0",
            followers,
            name,
            repos,
          });
          setProfileStatus("ready");
          update({
            actions: [
              { action: "prev", label: "Back" },
              { action: "next", label: "Next" },
            ],
            description: `${name} has ${repos} public repositories and ${followers} followers.`,
            title: `Welcome, ${name}`,
          });
          show();
        })
        .catch((error: unknown) => {
          if (error instanceof DOMException && error.name === "AbortError") {
            setProfileStatus((status) => {
              if (status !== "loading") {
                return status;
              }

              return profileRef.current ? "ready" : "idle";
            });
            return;
          }

          setProfile(null);
          setProfileStatus("error");
          update({
            actions: [
              { action: "prev", label: "Back" },
              { action: "next", label: "Next" },
            ],
            description:
              "Could not load the GitHub profile. You can still continue.",
            title: "Profile unavailable",
          });
          show();
        });

      return () => controller.abort();
    },
    id: "user-info",
    target: () => document.querySelector<HTMLElement>("#tour-async-profile"),
    title: "Loading…",
    type: "tooltip",
  },
  {
    actions: [{ action: "dismiss", label: "Done" }],
    description: "The profile card and this step used the same request.",
    id: "complete",
    title: "Profile loaded",
    type: "dialog",
  },
];

export default Example;
