"use client";

import {
  FileIcon,
  GitBranchIcon,
  GitPullRequestIcon,
  MonitorIcon,
  PanelRightIcon,
  SlidersHorizontalIcon,
} from "lucide-react";
import { Button } from "@/registry/react/components/button";
import { DiffStats } from "@/registry/react/components/diff";
import {
  Menu,
  MenuContent,
  MenuGroup,
  MenuItem,
  MenuSeparator,
  MenuTrigger,
} from "@/registry/react/components/menu";
import { useSidebar } from "@/registry/react/components/sidebar";
import { environmentSources } from "../_data/chat";

export const ChatHeader = () => (
  <>
    <EnvironmentMenu />
    <AppsPanelToggle />
  </>
);

const AppsPanelToggle = () => {
  const { toggleSidebar } = useSidebar();

  return (
    <Button
      aria-label="Show apps"
      onClick={toggleSidebar}
      size="icon-sm"
      variant="ghost"
    >
      <PanelRightIcon aria-hidden="true" />
    </Button>
  );
};

const EnvironmentMenu = () => (
  <Menu positioning={{ placement: "bottom-end" }}>
    <MenuTrigger asChild>
      <Button aria-label="Open environment menu" size="icon-sm" variant="ghost">
        <SlidersHorizontalIcon aria-hidden="true" />
      </Button>
    </MenuTrigger>
    <MenuContent className="w-80">
      <MenuGroup heading="Environment">
        <MenuItem value="changes">
          <GitBranchIcon aria-hidden="true" />
          <span className="min-w-0 flex-1">Changes</span>
          <DiffStats added={78_040} removed={14_605} />
        </MenuItem>
        <MenuItem value="local">
          <MonitorIcon aria-hidden="true" />
          <span>Local</span>
        </MenuItem>
        <MenuItem value="branch">
          <GitBranchIcon aria-hidden="true" />
          <span>feat/new-components</span>
        </MenuItem>
        <MenuItem value="commit">
          <GitBranchIcon aria-hidden="true" />
          <span>Commit or push</span>
        </MenuItem>
        <MenuItem value="pull-request">
          <GitPullRequestIcon aria-hidden="true" />
          <span>Create pull request</span>
        </MenuItem>
      </MenuGroup>
      <MenuSeparator />
      <MenuGroup heading="Sources">
        {environmentSources.map((source) => (
          <MenuItem key={source} value={source}>
            <FileIcon aria-hidden="true" />
            <span className="truncate">{source}</span>
          </MenuItem>
        ))}
        <MenuItem value="view-all">
          <GitBranchIcon aria-hidden="true" />
          <span>View all</span>
        </MenuItem>
      </MenuGroup>
    </MenuContent>
  </Menu>
);
