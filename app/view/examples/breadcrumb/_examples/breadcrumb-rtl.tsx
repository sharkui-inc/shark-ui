"use client";

import { ChevronDownIcon, DotIcon } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/registry/react/components/breadcrumb";
import { Button } from "@/registry/react/components/button";
import { LocaleProvider } from "@/registry/react/components/locale";
import {
  Menu,
  MenuContent,
  MenuItem,
  MenuTrigger,
} from "@/registry/react/components/menu";

const BreadcrumbRtl = () => (
  <div dir="rtl">
    <LocaleProvider locale="ar-SA">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">الرئيسية</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator>
            <DotIcon aria-hidden="true" />
          </BreadcrumbSeparator>
          <BreadcrumbItem>
            <Menu positioning={{ placement: "bottom-start" }}>
              <MenuTrigger asChild>
                <Button size="sm" variant="ghost">
                  المكونات
                  <ChevronDownIcon
                    className="size-3.5"
                    data-icon="inline-end"
                  />
                </Button>
              </MenuTrigger>
              <MenuContent className="w-44">
                <MenuItem asChild value="documentation">
                  <a href="#">التوثيق</a>
                </MenuItem>
                <MenuItem asChild value="themes">
                  <a href="#">السمات</a>
                </MenuItem>
                <MenuItem asChild value="github">
                  <a href="#">جيت هاب</a>
                </MenuItem>
              </MenuContent>
            </Menu>
          </BreadcrumbItem>
          <BreadcrumbSeparator>
            <DotIcon aria-hidden="true" />
          </BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbPage>مسار التنقل</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </LocaleProvider>
  </div>
);

export default BreadcrumbRtl;
