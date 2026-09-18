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

const BreadcrumbDropdown = () => (
  <Breadcrumb>
    <BreadcrumbList>
      <BreadcrumbItem>
        <BreadcrumbLink href="/">Home</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbSeparator>
        <DotIcon aria-hidden="true" />
      </BreadcrumbSeparator>
      <BreadcrumbItem>
        <Menu positioning={{ placement: "bottom-start" }}>
          <MenuTrigger asChild>
            <Button size="sm" variant="ghost">
              Components
              <ChevronDownIcon className="size-3.5" data-icon="inline-end" />
            </Button>
          </MenuTrigger>
          <MenuContent className="w-44">
            <MenuItem asChild value="documentation">
              <a href="#">Documentation</a>
            </MenuItem>
            <MenuItem asChild value="themes">
              <a href="#">Themes</a>
            </MenuItem>
            <MenuItem asChild value="github">
              <a href="#">GitHub</a>
            </MenuItem>
          </MenuContent>
        </Menu>
      </BreadcrumbItem>
      <BreadcrumbSeparator>
        <DotIcon aria-hidden="true" />
      </BreadcrumbSeparator>
      <BreadcrumbItem>
        <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
      </BreadcrumbItem>
    </BreadcrumbList>
  </Breadcrumb>
);

export default BreadcrumbDropdown;
