import { Trash2Icon, XIcon } from "lucide-react";
import {
  ActionBar,
  ActionBarBody,
  ActionBarClose,
  ActionBarContent,
  ActionBarSeparator,
  ActionBarTrigger,
  ActionBarValue,
} from "@/registry/react/components/action-bar";
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
import { Button } from "@/registry/react/components/button";

const Example = () => (
  <ActionBar>
    <ActionBarTrigger asChild>
      <Button variant="outline">Open</Button>
    </ActionBarTrigger>
    <ActionBarContent aria-label="Order bulk actions">
      <ActionBarValue count={3} />
      <ActionBarSeparator />
      <ActionBarBody>
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button variant="destructive">
              <Trash2Icon />
              <span className="max-sm:sr-only">Delete</span>
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader
              description="This action cannot be undone."
              title="Delete selected orders?"
            />
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogClose asChild>
                <AlertDialogAction variant="destructive">
                  Delete
                </AlertDialogAction>
              </AlertDialogClose>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
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
