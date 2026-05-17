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
  <AlertDialog>
    <AlertDialogTrigger asChild>
      <Button variant="outline">Open</Button>
    </AlertDialogTrigger>
    <AlertDialogContent>
      <AlertDialogHeader
        description="This action cannot be undone. This will permanently delete the project and remove all data."
        title="Delete Project"
      />
      <AlertDialogFooter>
        <AlertDialogCancel>Cancel</AlertDialogCancel>
        <AlertDialogClose asChild>
          <AlertDialogAction variant="destructive">
            Delete project
          </AlertDialogAction>
        </AlertDialogClose>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
);

export default Example;
