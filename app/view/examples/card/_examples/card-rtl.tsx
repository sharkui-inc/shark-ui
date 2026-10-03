"use client";

import { Button } from "@/registry/react/components/button";
import {
  Card,
  CardAction,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/registry/react/components/card";
import { Field, FieldLabel } from "@/registry/react/components/field";
import { Input } from "@/registry/react/components/input";

const CardRtl = () => (
  <Card className="w-full max-w-sm">
    <CardHeader
      description="أدخل بريدك الإلكتروني أدناه لتسجيل الدخول إلى حسابك"
      title="تسجيل الدخول إلى حسابك"
    >
      <CardAction>
        <Button variant="link">إنشاء حساب</Button>
      </CardAction>
    </CardHeader>
    <CardContent>
      <form>
        <div className="flex flex-col gap-6">
          <Field>
            <FieldLabel>البريد الإلكتروني</FieldLabel>
            <Input placeholder="m@example.com" required type="email" />
          </Field>
          <div className="grid gap-2">
            <div className="flex items-center">
              <FieldLabel htmlFor="password-rtl">كلمة المرور</FieldLabel>
              <a
                className="ms-auto inline-block text-sm underline-offset-4 hover:underline"
                href="#"
              >
                نسيت كلمة المرور؟
              </a>
            </div>
            <Input id="password-rtl" required type="password" />
          </div>
        </div>
      </form>
    </CardContent>
    <CardFooter className="flex-col gap-2">
      <Button className="w-full" type="submit">
        تسجيل الدخول
      </Button>
      <Button className="w-full" variant="outline">
        تسجيل الدخول باستخدام Google
      </Button>
    </CardFooter>
  </Card>
);

export default CardRtl;
