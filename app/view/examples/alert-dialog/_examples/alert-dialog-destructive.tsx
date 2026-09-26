import { Trash2Icon } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogClose,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/registry/react/components/alert-dialog";
import { Button } from "@/registry/react/components/button";

const AlertDialogDestructive = () => (
  <AlertDialog>
    <AlertDialogTrigger asChild>
      <Button variant="outline">Delete Chat</Button>
    </AlertDialogTrigger>
    <AlertDialogContent>
      <AlertDialogHeader>
        <Trash2Icon aria-hidden />
        <AlertDialogTitle>Delete Chat</AlertDialogTitle>
        <AlertDialogDescription>
          This action cannot be undone. This will permanently delete the chat
          and remove all messages.
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel>Cancel</AlertDialogCancel>
        <AlertDialogClose asChild>
          <AlertDialogAction variant="destructive">Delete</AlertDialogAction>
        </AlertDialogClose>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
);

export default AlertDialogDestructive;
