import {
  ArchiveIcon,
  ArchiveXIcon,
  BellIcon,
  CirclePlusIcon,
  FolderInputIcon,
  MailXIcon,
  ReplyIcon,
  SendIcon,
  SquarePenIcon,
  Trash2Icon,
  TrashIcon,
} from "lucide-react";
import { Button } from "@/registry/react/components/button";
import {
  Menu,
  MenuCheckboxItem,
  MenuContent,
  MenuGroup,
  MenuItem,
  MenuRadioGroup,
  MenuRadioItem,
  MenuSeparator,
  MenuShortcut,
  MenuSub,
  MenuSubContent,
  MenuSubTrigger,
  MenuTrigger,
} from "@/registry/react/components/menu";

const MenuDemo = () => (
  <Menu>
    <MenuTrigger asChild>
      <Button variant="outline">Open</Button>
    </MenuTrigger>
    <MenuContent className="min-w-40">
      <MenuGroup>
        <MenuItem value="forward">
          <SendIcon /> Forward
          <MenuShortcut className="hidden sm:inline-flex">⌘F</MenuShortcut>
        </MenuItem>
        <MenuItem value="reply">
          <ReplyIcon /> Reply
          <MenuShortcut className="hidden sm:inline-flex">⌘R</MenuShortcut>
        </MenuItem>
        <MenuItem value="archive">
          <ArchiveIcon /> Archive
          <MenuShortcut className="hidden sm:inline-flex">⌘Z</MenuShortcut>
        </MenuItem>
        <MenuSub>
          <MenuSubTrigger>
            <FolderInputIcon /> Move to
          </MenuSubTrigger>
          <MenuSubContent>
            <MenuItem value="move-to-folder-1">
              <ArchiveXIcon /> Junk
            </MenuItem>
            <MenuItem value="move-to-folder-2">
              <TrashIcon /> Trash
            </MenuItem>
            <MenuItem value="move-to-folder-3">
              <BellIcon /> Reminders
            </MenuItem>
            <MenuSub>
              <MenuSubTrigger>
                <CirclePlusIcon />
                More
              </MenuSubTrigger>
              <MenuSubContent>
                <MenuItem value="move-to-folder-4">
                  <SquarePenIcon />
                  Drafts
                </MenuItem>
                <MenuItem value="move-to-folder-6">
                  <MailXIcon />
                  Spam
                </MenuItem>
              </MenuSubContent>
            </MenuSub>
          </MenuSubContent>
        </MenuSub>
        <MenuSeparator />
        <MenuRadioGroup heading="Priority" value="medium">
          <MenuRadioItem value="low">Low</MenuRadioItem>
          <MenuRadioItem value="medium">Medium</MenuRadioItem>
          <MenuRadioItem value="high">High</MenuRadioItem>
        </MenuRadioGroup>
        <MenuSeparator />
        <MenuCheckboxItem checked value="block">
          Block sender
        </MenuCheckboxItem>
        <MenuSeparator />
        <MenuItem value="delete" variant="destructive">
          <Trash2Icon /> Delete
          <MenuShortcut className="hidden sm:inline-flex">⌘ ⌫</MenuShortcut>
        </MenuItem>
      </MenuGroup>
    </MenuContent>
  </Menu>
);

export default MenuDemo;
