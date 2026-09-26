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

const AlertDialogRtl = () => (
  <AlertDialog>
    <AlertDialogTrigger asChild>
      <Button variant="outline">فتح</Button>
    </AlertDialogTrigger>
    <AlertDialogContent>
      <AlertDialogHeader
        description="هل تريد السماح للملحق USB بالاتصال بهذا الجهاز؟"
        title="السماح للملحق بالاتصال بالجهاز؟"
      />
      <AlertDialogFooter>
        <AlertDialogCancel>لا تسمح</AlertDialogCancel>
        <AlertDialogClose asChild>
          <AlertDialogAction>السماح</AlertDialogAction>
        </AlertDialogClose>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
);

export default AlertDialogRtl;
