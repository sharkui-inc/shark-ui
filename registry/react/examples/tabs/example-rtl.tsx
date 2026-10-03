"use client";

import { usePreviewLocale } from "@/hooks/use-preview-locale";
import {
  Card,
  CardContent,
  CardHeader,
} from "@/registry/react/components/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/registry/react/components/tabs";

const Example = () => {
  const { locale } = usePreviewLocale();

  const { values } = translations[locale];

  return (
    <Tabs defaultValue="tab-1">
      <TabsList>
        <TabsTrigger value="tab-1">{values.profile}</TabsTrigger>
        <TabsTrigger value="tab-2">{values.settings}</TabsTrigger>
        <TabsTrigger value="tab-3">{values.security}</TabsTrigger>
      </TabsList>

      <TabsContent value="tab-1">
        <Card className="h-full w-sm">
          <CardHeader
            description={values.profileDescription}
            title={values.profile}
          />

          <CardContent className="text-muted-foreground text-sm">
            {values.profileBody}
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="tab-2">
        <Card className="h-full w-sm">
          <CardHeader
            description={values.settingsDescription}
            title={values.settings}
          />

          <CardContent className="text-muted-foreground text-sm">
            {values.settingsBody}
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="tab-3">
        <Card className="h-full w-sm">
          <CardHeader
            description={values.securityDescription}
            title={values.security}
          />
          <CardContent className="text-muted-foreground text-sm">
            {values.securityBody}
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
};

const translations = {
  ar: {
    values: {
      profile: "الملف الشخصي",
      profileBody:
        "عرض معلوماتك المشتركة هنا، حدّث اسم ملفك الشخصي وصورتك وبريدك الإلكتروني.",
      profileDescription: "إدارة معلومات ملفك الشخصي",
      security: "الأمان",
      securityBody: "حدّث إعدادات الأمان هنا، غيّر كلمة المرور والمزيد.",
      securityDescription: "احمِ حسابك وبياناتك",
      settings: "الإعدادات",
      settingsBody: "خصص طريقة التعامل مع الإشعارات، وحدّث السمة وكثافة النص.",
      settingsDescription: "حدّث تفضيلاتك",
    },
  },
  en: {
    values: {
      profile: "Profile",
      profileBody:
        "View you shared information here, update you profile name, picture and email.",
      profileDescription: "Manage your profile information",
      security: "Security",
      securityBody:
        "Update your security settings here, change your password and more.",
      securityDescription: "Protect your account and data",
      settings: "Settings",
      settingsBody:
        "Customize how to handle notifications, update the theme and text density.",
      settingsDescription: "Update your preferences",
    },
  },
  he: {
    values: {
      profile: "פרופיל",
      profileBody:
        "צפה כאן במידע המשותף שלך, עדכן את שם הפרופיל, התמונה והאימייל שלך.",
      profileDescription: "נהל את פרטי הפרופיל שלך",
      security: "אבטחה",
      securityBody: "עדכן כאן את הגדרות האבטחה, שנה את הסיסמה ועוד.",
      securityDescription: "הגן על החשבון ועל הנתונים שלך",
      settings: "הגדרות",
      settingsBody:
        "התאם אישית את הטיפול בהתראות, עדכן את העיצוב ואת צפיפות הטקסט.",
      settingsDescription: "עדכן את ההעדפות שלך",
    },
  },
};

export default Example;
