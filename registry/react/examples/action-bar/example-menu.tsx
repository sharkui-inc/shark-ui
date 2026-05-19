import {
  ArchiveIcon,
  CopyIcon,
  EllipsisIcon,
  Trash2Icon,
  XIcon,
} from "lucide-react";
import {
  ActionBar,
  ActionBarBody,
  ActionBarClose,
  ActionBarContent,
  ActionBarSeparator,
  ActionBarTrigger,
  ActionBarValue,
} from "@/registry/react/components/action-bar";
import { Button } from "@/registry/react/components/button";
import {
  Menu,
  MenuContent,
  MenuItem,
  MenuTrigger,
} from "@/registry/react/components/menu";

const Example = () => (
  <ActionBar>
    <ActionBarTrigger asChild>
      <Button variant="outline">Open</Button>
    </ActionBarTrigger>
    <ActionBarContent aria-label="Bulk actions">
      <ActionBarValue count={3} />
      <ActionBarSeparator />
      <ActionBarBody>
        <Menu positioning={{ placement: "top" }}>
          <MenuTrigger asChild>
            <Button variant="ghost">
              <EllipsisIcon />
              <span className="max-sm:sr-only">More</span>
            </Button>
          </MenuTrigger>
          <MenuContent>
            <MenuItem value="archive">
              <ArchiveIcon />
              Archive
            </MenuItem>
            <MenuItem value="duplicate">
              <CopyIcon />
              Duplicate
            </MenuItem>
            <MenuItem value="delete" variant="destructive">
              <Trash2Icon />
              Delete
            </MenuItem>
          </MenuContent>
        </Menu>
      </ActionBarBody>
      <ActionBarSeparator />
      <ActionBarClose asChild>
        <Button size="icon-md" variant="ghost">
          <XIcon />
        </Button>
      </ActionBarClose>
    </ActionBarContent>
  </ActionBar>
);

export default Example;
