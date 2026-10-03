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

const AlertDialogBasic = () => (
  <AlertDialog>
    <AlertDialogTrigger asChild>
      <Button variant="outline">Show Dialog</Button>
    </AlertDialogTrigger>
    <AlertDialogContent>
      <AlertDialogHeader
        description="Do you want to allow the USB accessory to connect to this device?"
        title="Allow accessory to connect?"
      />
      <AlertDialogFooter>
        <AlertDialogCancel>Don't allow</AlertDialogCancel>
        <AlertDialogClose asChild>
          <AlertDialogAction>Allow</AlertDialogAction>
        </AlertDialogClose>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
);

export default AlertDialogBasic;
