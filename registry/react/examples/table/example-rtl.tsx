"use client";

import { usePreviewLocale } from "@/hooks/use-preview-locale";
import { Badge, type BadgeVariant } from "@/registry/react/components/badge";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/registry/react/components/table";

const Example = () => {
  const { locale } = usePreviewLocale();

  const { values } = translations[locale];

  return (
    <Table className="mx-auto w-full max-w-xl">
      <TableCaption>{values.caption}</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>{values.name}</TableHead>
          <TableHead>{values.email}</TableHead>
          <TableHead>{values.role}</TableHead>
          <TableHead className="text-center">{values.status}</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {users.map((user) => (
          <TableRow key={user.id}>
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{values.roles[user.role]}</TableCell>
            <TableCell className="text-center">
              <Badge
                className="capitalize"
                variant={statusVariants[user.status]}
              >
                {values.statuses[user.status]}
              </Badge>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

const statusVariants: Record<string, BadgeVariant> = {
  active: "success",
  inactive: "destructive",
  invited: "info",
};

const users = [
  {
    email: "alice.johnson@example.com",
    id: "1",
    name: "Alice Johnson",
    role: "Admin",
    status: "active",
  },
  {
    email: "bruno.silva@example.com",
    id: "2",
    name: "Bruno Silva",
    role: "Editor",
    status: "invited",
  },
  {
    email: "clara.mendes@example.com",
    id: "3",
    name: "Clara Mendes",
    role: "Viewer",
    status: "inactive",
  },
  {
    email: "david.park@example.com",
    id: "4",
    name: "David Park",
    role: "Editor",
    status: "active",
  },
] as const;

const translations = {
  ar: {
    values: {
      caption: "قائمة بالمستخدمين في مساحة عملك.",
      email: "البريد الإلكتروني",
      name: "الاسم",
      role: "الدور",
      roles: {
        Admin: "مدير",
        Editor: "محرر",
        Viewer: "مشاهد",
      },
      status: "الحالة",
      statuses: {
        active: "نشط",
        inactive: "غير نشط",
        invited: "مدعو",
      },
    },
  },
  en: {
    values: {
      caption: "A list of users in your workspace.",
      email: "Email",
      name: "Name",
      role: "Role",
      roles: {
        Admin: "Admin",
        Editor: "Editor",
        Viewer: "Viewer",
      },
      status: "Status",
      statuses: {
        active: "active",
        inactive: "inactive",
        invited: "invited",
      },
    },
  },
  he: {
    values: {
      caption: "רשימת משתמשים בסביבת העבודה שלך.",
      email: "אימייל",
      name: "שם",
      role: "תפקיד",
      roles: {
        Admin: "מנהל",
        Editor: "עורך",
        Viewer: "צופה",
      },
      status: "סטטוס",
      statuses: {
        active: "פעיל",
        inactive: "לא פעיל",
        invited: "הוזמן",
      },
    },
  },
} as const;

export default Example;
