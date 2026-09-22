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
import {
  Menu,
  MenuContent,
  MenuItem,
  MenuTrigger,
} from "@/registry/react/components/menu";

const BreadcrumbRtl = () => (
  <Breadcrumb>
    <BreadcrumbList>
      <BreadcrumbItem>
        <BreadcrumbLink href="/">الرئيسية</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbSeparator>
        <DotIcon aria-hidden />
      </BreadcrumbSeparator>
      <BreadcrumbItem>
        <Menu positioning={{ placement: "bottom-start" }}>
          <MenuTrigger asChild>
            <Button size="sm" variant="ghost">
              المكونات
              <ChevronDownIcon data-icon="inline-end" />
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
        <DotIcon aria-hidden />
      </BreadcrumbSeparator>
      <BreadcrumbItem>
        <BreadcrumbPage>مسار التنقل</BreadcrumbPage>
      </BreadcrumbItem>
    </BreadcrumbList>
  </Breadcrumb>
);

export default BreadcrumbRtl;
