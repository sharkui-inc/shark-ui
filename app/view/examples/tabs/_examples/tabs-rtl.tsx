"use client";

import {
  Card,
  CardContent,
  CardHeader,
} from "@/registry/react/components/card";
import { LocaleProvider } from "@/registry/react/components/locale";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/registry/react/components/tabs";

const TabsRtl = () => (
  <div dir="rtl">
    <LocaleProvider locale="ar-SA">
      <Tabs className="w-full max-w-sm" defaultValue="overview">
        <TabsList>
          {tabs.map((tab) => (
            <TabsTrigger key={tab.value} value={tab.value}>
              {tab.title}
            </TabsTrigger>
          ))}
        </TabsList>

        {tabs.map((tab) => (
          <TabsContent key={tab.value} value={tab.value}>
            <Card>
              <CardHeader description={tab.description} title={tab.title} />
              <CardContent className="text-muted-foreground text-sm">
                {tab.content}
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>
    </LocaleProvider>
  </div>
);

const tabs = [
  {
    content: "لديك ١٢ مشروعًا نشطًا و٣ مهام معلقة.",
    description:
      "عرض مقاييسك الرئيسية وأنشطة المشروع الأخيرة. تتبع التقدم عبر جميع مشاريعك النشطة.",
    title: "نظرة عامة",
    value: "overview",
  },
  {
    content: "زادت مشاهدات الصفحة بنسبة ٢٥٪ مقارنة بالشهر الماضي.",
    description:
      "تتبع مقاييس الأداء ومشاركة المستخدمين. راقب الاتجاهات وحدد فرص النمو.",
    title: "التحليلات",
    value: "analytics",
  },
  {
    content: "لديك ٥ تقارير جاهزة ومتاحة للتصدير.",
    description:
      "إنشاء وتنزيل تقاريرك التفصيلية. تصدير البيانات بتنسيقات متعددة للتحليل.",
    title: "التقارير",
    value: "reports",
  },
  {
    content: "تكوين الإشعارات والأمان والسمات.",
    description: "إدارة تفضيلات حسابك وخياراته. تخصيص تجربتك لتناسب احتياجاتك.",
    title: "الإعدادات",
    value: "settings",
  },
];

export default TabsRtl;
