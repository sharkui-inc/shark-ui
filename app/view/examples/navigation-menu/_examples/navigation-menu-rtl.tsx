"use client";

import {
  CircleAlertIcon,
  CircleCheckIcon,
  CircleDashedIcon,
} from "lucide-react";
import type React from "react";
import { LocaleProvider } from "@/registry/react/components/locale";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/registry/react/components/navigation-menu";

const components: { title: string; description: string }[] = [
  {
    description: "حوار نافذة يقطع المستخدم بمحتوى مهم ويتوقع استجابة.",
    title: "حوار التنبيه",
  },
  {
    description: "للمستخدمين المبصرين لمعاينة المحتوى المتاح خلف الرابط.",
    title: "بطاقة التحويم",
  },
  {
    description: "يعرض مؤشرًا يوضح تقدم إتمام المهمة، عادةً يتم عرضه كشريط تقدم.",
    title: "التقدم",
  },
  {
    description: "يفصل المحتوى بصريًا أو دلاليًا.",
    title: "منطقة التمرير",
  },
  {
    description:
      "مجموعة من أقسام المحتوى المتعددة الطبقات—المعروفة بألواح التبويب—التي يتم عرضها واحدة في كل مرة.",
    title: "التبويبات",
  },
  {
    description:
      "نافذة منبثقة تعرض معلومات متعلقة بعنصر عندما يتلقى العنصر التركيز على لوحة المفاتيح أو عند تحويم الماوس فوقه.",
    title: "تلميح",
  },
];

const NavigationMenuRtl = () => (
  <div dir="rtl">
    <LocaleProvider locale="ar-SA">
      <div className="flex min-h-80 w-full justify-center pt-2">
        <NavigationMenu aria-label="التنقل الرئيسي">
          <NavigationMenuList>
            <NavigationMenuItem value="getting-started">
              <NavigationMenuTrigger>البدء</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="w-96">
                  <ListItem href="#" title="مقدمة">
                    مكونات قابلة لإعادة الاستخدام مبنية باستخدام Tailwind CSS.
                  </ListItem>
                  <ListItem href="#" title="التثبيت">
                    كيفية تثبيت التبعيات وتنظيم تطبيقك.
                  </ListItem>
                  <ListItem href="#" title="الطباعة">
                    أنماط للعناوين والفقرات والقوائم...إلخ
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem value="components">
              <NavigationMenuTrigger>المكونات</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  {components.map((component) => (
                    <ListItem
                      href="#"
                      key={component.title}
                      title={component.title}
                    >
                      {component.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem value="with-icon">
              <NavigationMenuTrigger>مع أيقونة</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[200px]">
                  <li>
                    <NavigationMenuLink
                      className="flex-row items-center gap-2"
                      href="#"
                    >
                      <CircleAlertIcon />
                      قائمة الانتظار
                    </NavigationMenuLink>
                    <NavigationMenuLink
                      className="flex-row items-center gap-2"
                      href="#"
                    >
                      <CircleDashedIcon />
                      المهام
                    </NavigationMenuLink>
                    <NavigationMenuLink
                      className="flex-row items-center gap-2"
                      href="#"
                    >
                      <CircleCheckIcon />
                      منجز
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem value="docs">
              <NavigationMenuLink href="#">الوثائق</NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </LocaleProvider>
  </div>
);

const ListItem = ({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) => (
  <li {...props}>
    <NavigationMenuLink className="h-auto items-start" href={href}>
      <div className="flex flex-col gap-1 text-sm">
        <div className="font-medium leading-none">{title}</div>
        <div className="line-clamp-2 text-muted-foreground">{children}</div>
      </div>
    </NavigationMenuLink>
  </li>
);

export default NavigationMenuRtl;
