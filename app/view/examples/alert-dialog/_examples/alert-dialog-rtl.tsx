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
import { LocaleProvider } from "@/registry/react/components/locale";

const AlertDialogRtl = () => (
  <div dir="rtl">
    <LocaleProvider locale="ar-SA">
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
    </LocaleProvider>
  </div>
);

export default AlertDialogRtl;
