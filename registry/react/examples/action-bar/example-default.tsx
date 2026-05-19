import {
  ArchiveIcon,
  DownloadIcon,
  PencilIcon,
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

const ActionBarDemo = () => (
  <ActionBar>
    <ActionBarTrigger asChild>
      <Button variant="outline">Open</Button>
    </ActionBarTrigger>
    <ActionBarContent aria-label="Bulk actions">
      <ActionBarValue count={3} />
      <ActionBarSeparator />
      <ActionBarBody>
        <Button variant="ghost">
          <PencilIcon />
          <span className="max-sm:sr-only">Edit</span>
        </Button>
        <Button variant="ghost">
          <DownloadIcon />
          <span className="max-sm:sr-only">Export</span>
        </Button>
        <Button variant="ghost">
          <ArchiveIcon />
          <span className="max-sm:sr-only">Archive</span>
        </Button>
        <ActionBarSeparator />
        <Button variant="destructive">
          <Trash2Icon />
          <span className="max-sm:sr-only">Delete</span>
        </Button>
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

export default ActionBarDemo;
