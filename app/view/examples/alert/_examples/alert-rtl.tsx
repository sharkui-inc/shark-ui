import { CheckCircle2Icon, InfoIcon } from "lucide-react";
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/registry/react/components/alert";
import { LocaleProvider } from "@/registry/react/components/locale";

const AlertRtl = () => (
  <div dir="rtl">
    <LocaleProvider locale="ar-SA">
      <div className="flex max-w-md flex-col gap-4">
        <Alert>
          <CheckCircle2Icon aria-hidden="true" />
          <AlertTitle>تم الدفع بنجاح</AlertTitle>
          <AlertDescription>
            تمت معالجة دفعتك البالغة 29.99 دولارًا. تم إرسال إيصال إلى عنوان
            بريدك الإلكتروني.
          </AlertDescription>
        </Alert>

        <Alert variant="info">
          <InfoIcon aria-hidden="true" />
          <AlertTitle>ميزة جديدة متاحة</AlertTitle>
          <AlertDescription>
            لقد أضفنا دعم الوضع الداكن. يمكنك تفعيله في إعدادات حسابك.
          </AlertDescription>
        </Alert>
      </div>
    </LocaleProvider>
  </div>
);

export default AlertRtl;
