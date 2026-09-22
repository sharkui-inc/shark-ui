import { CheckCircle2Icon, InfoIcon } from "lucide-react";
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/registry/react/components/alert";

const AlertRtl = () => (
  <div className="flex max-w-md flex-col gap-4">
    <Alert>
      <CheckCircle2Icon aria-hidden />
      <AlertTitle>تم الدفع بنجاح</AlertTitle>
      <AlertDescription>
        تمت معالجة دفعتك البالغة 29.99 دولارًا. تم إرسال إيصال إلى عنوان بريدك
        الإلكتروني.
      </AlertDescription>
    </Alert>

    <Alert variant="info">
      <InfoIcon aria-hidden />
      <AlertTitle>ميزة جديدة متاحة</AlertTitle>
      <AlertDescription>
        لقد أضفنا دعم الوضع الداكن. يمكنك تفعيله في إعدادات حسابك.
      </AlertDescription>
    </Alert>
  </div>
);

export default AlertRtl;
