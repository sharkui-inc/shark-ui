import { DotIcon } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/registry/react/components/breadcrumb";

const BreadcrumbCustomSeparator = () => (
  <Breadcrumb>
    <BreadcrumbList>
      <BreadcrumbItem>
        <BreadcrumbLink href="/">Home</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbSeparator>
        <DotIcon aria-hidden="true" />
      </BreadcrumbSeparator>
      <BreadcrumbItem>
        <BreadcrumbLink href="/components">Components</BreadcrumbLink>
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

export default BreadcrumbCustomSeparator;
