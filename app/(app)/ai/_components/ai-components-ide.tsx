"use client";

import {
  ArchiveIcon,
  ChevronDownIcon,
  EllipsisIcon,
  LinkIcon,
  PencilIcon,
  PinIcon,
  SquareArrowUpIcon,
  SquareStackIcon,
  Trash2Icon,
} from "lucide-react";
import React from "react";
import { Button } from "@/registry/react/components/button";
import {
  Editable,
  EditableArea,
  EditableInput,
  EditablePreview,
} from "@/registry/react/components/editable";
import { Input } from "@/registry/react/components/input";
import {
  Menu,
  MenuContent,
  MenuItem,
  MenuList,
  MenuSeparator,
  MenuShortcut,
  MenuSub,
  MenuSubContent,
  MenuSubTrigger,
  MenuTrigger,
} from "@/registry/react/components/menu";
import {
  SidebarInset,
  SidebarProvider,
} from "@/registry/react/components/sidebar";
import { AiComponentsIdeChat } from "./ai-components-ide-chat";
import { AiComponentsIdeConversationMenu } from "./ai-components-ide-conversation-menu";
import { AiComponentsIdeSidebar } from "./ai-components-ide-sidebar";

const INITIAL_TITLES: Record<string, string> = {
  "dark-mode": "Add a dark mode toggle to settings",
  deps: "Weekly dependency audit",
  "double-charge": "Fix the double-charge bug in checkout",
  email: "Add email format validation",
  onboarding: "Rewrite onboarding empty states",
  "rate-limit": "Tighten API rate limits",
};

export const AiComponentsIde = () => {
  const [activeId, setActiveId] = React.useState("double-charge");
  const [titles, setTitles] = React.useState(INITIAL_TITLES);

  const title = titles[activeId] ?? "New task";

  return (
    <div className="relative h-svh min-h-0 w-full overflow-hidden">
      <SidebarProvider className="h-full min-h-0">
        <AiComponentsIdeSidebar activeId={activeId} onSelect={setActiveId} />
        <SidebarInset className="min-h-0 overflow-hidden md:m-0 md:rounded-none md:shadow-none">
          <AiComponentsIdeMain
            conversationId={activeId}
            onTitleChange={(next) => {
              setTitles((current) => ({
                ...current,
                [activeId]: next,
              }));
            }}
            title={title}
          />
        </SidebarInset>
      </SidebarProvider>
    </div>
  );
};

interface AiComponentsIdeMainProps {
  conversationId: string;
  onTitleChange: (title: string) => void;
  title: string;
}

const AiComponentsIdeMain = (props: AiComponentsIdeMainProps) => {
  const { conversationId, onTitleChange, title } = props;
  const [editing, setEditing] = React.useState(false);

  return (
    <div className="flex h-full min-h-0 flex-col">
      <header className="flex h-11 shrink-0 items-center gap-1 border-b px-3">
        <Editable
          autoResize
          edit={editing}
          onEditChange={(details) => setEditing(details.edit)}
          onValueChange={(details) => onTitleChange(details.value)}
          value={title}
        >
          <EditableArea>
            <EditableInput asChild>
              <Input
                className="h-8 border-transparent px-2 font-medium shadow-none"
                size="sm"
              />
            </EditableInput>
            <EditablePreview
              className="h-8 border-transparent px-2 font-medium shadow-none"
              size="sm"
              variant="ghost"
            />
          </EditableArea>
        </Editable>
        <Menu positioning={{ placement: "bottom-start" }}>
          <MenuTrigger asChild>
            <Button
              aria-label="Session options"
              size="icon-xs"
              type="button"
              variant="ghost"
            >
              <ChevronDownIcon aria-hidden="true" />
            </Button>
          </MenuTrigger>
          <MenuContent className="min-w-52">
            <MenuList>
              <MenuItem value="pin">
                <PinIcon aria-hidden="true" />
                Pin
                <MenuShortcut>P</MenuShortcut>
              </MenuItem>
              <MenuItem onSelect={() => setEditing(true)} value="rename">
                <PencilIcon aria-hidden="true" />
                Rename
                <MenuShortcut>R</MenuShortcut>
              </MenuItem>
              <MenuSub>
                <MenuSubTrigger>
                  <SquareStackIcon aria-hidden="true" />
                  Add to project
                </MenuSubTrigger>
                <MenuSubContent>
                  <MenuList>
                    <MenuItem value="project-research">
                      Research & Analysis
                    </MenuItem>
                    <MenuItem value="project-web">Web Search</MenuItem>
                    <MenuItem value="project-knowledge">
                      Knowledge Base
                    </MenuItem>
                  </MenuList>
                </MenuSubContent>
              </MenuSub>
              <MenuItem value="share">
                <SquareArrowUpIcon aria-hidden="true" />
                Share session
              </MenuItem>
              <MenuItem value="copy-link">
                <LinkIcon aria-hidden="true" />
                Copy link
              </MenuItem>
              <MenuSeparator />
              <MenuItem value="archive">
                <ArchiveIcon aria-hidden="true" />
                Archive
                <MenuShortcut>A</MenuShortcut>
              </MenuItem>
              <MenuItem value="delete" variant="destructive">
                <Trash2Icon aria-hidden="true" />
                Delete
                <MenuShortcut>D</MenuShortcut>
              </MenuItem>
            </MenuList>
          </MenuContent>
        </Menu>
        <div className="ms-auto">
          <AiComponentsIdeConversationMenu
            id={conversationId}
            onRename={() => setEditing(true)}
            positioning={{ placement: "bottom-end" }}
            trigger={
              <Button
                aria-label="More conversation options"
                size="icon-xs"
                type="button"
                variant="ghost"
              >
                <EllipsisIcon aria-hidden="true" />
              </Button>
            }
          />
        </div>
      </header>
      <div className="min-h-0 flex-1">
        <AiComponentsIdeChat />
      </div>
    </div>
  );
};
