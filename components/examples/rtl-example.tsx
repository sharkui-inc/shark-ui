"use client";

import { RTLPreview } from "@/components/docs/component-preview/rtl-preview";
import { toast } from "@/components/examples/example-toast";
import { Button } from "@/registry/react/components/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/react/components/card";
import {
  Field,
  FieldGroup,
  FieldLabel,
} from "@/registry/react/components/field";
import { Input } from "@/registry/react/components/input";

const translations = {
  ar: {
    description: "أدخل بريدك الإلكتروني أدناه لتسجيل الدخول إلى حسابك",
    email: "البريد الإلكتروني",
    emailPlaceholder: "m@example.com",
    forgotPassword: "نسيت كلمة المرور؟",
    login: "تسجيل الدخول",
    loginWithGoogle: "تسجيل الدخول باستخدام Google",
    password: "كلمة المرور",
    signUp: "إنشاء حساب",
    title: "تسجيل الدخول إلى حسابك",
  },
  en: {
    description: "Enter your email below to login to your account",
    email: "Email",
    emailPlaceholder: "m@example.com",
    forgotPassword: "Forgot your password?",
    login: "Login",
    loginWithGoogle: "Login with Google",
    password: "Password",
    signUp: "Sign Up",
    title: "Login to your account",
  },
  he: {
    description: "הזן את האימייל שלך למטה כדי להתחבר לחשבון שלך",
    email: "אימייל",
    emailPlaceholder: "m@example.com",
    forgotPassword: "שכחת את הסיסמה?",
    login: "התחבר",
    loginWithGoogle: "התחבר עם Google",
    password: "סיסמה",
    signUp: "הירשם",
    title: "התחבר לחשבון שלך",
  },
} as const;

export const RTLExample = () => (
  <RTLPreview className="h-[500px]" contentClassName="rounded-xl border">
    {(locale) => {
      const t = translations[locale];

      return (
        <Card className="w-full max-w-sm">
          <CardHeader>
            <CardTitle>{t.title}</CardTitle>
            <CardDescription>{t.description}</CardDescription>
            <CardAction>
              <Button
                onClick={() => toast.info({ title: t.signUp })}
                variant="link"
              >
                {t.signUp}
              </Button>
            </CardAction>
          </CardHeader>
          <CardContent>
            <form
              id="rtl-login"
              onSubmit={(event) => {
                event.preventDefault();
                toast.success({
                  description: t.title,
                  title: t.login,
                });
              }}
            >
              <FieldGroup>
                <Field>
                  <FieldLabel>{t.email}</FieldLabel>
                  <Input
                    placeholder={t.emailPlaceholder}
                    required
                    type="email"
                  />
                </Field>
                <Field className="grid gap-2">
                  <div className="flex items-center">
                    <FieldLabel>{t.password}</FieldLabel>
                    <a
                      className="ms-auto inline-block text-sm underline-offset-4 hover:underline"
                      href="#"
                    >
                      {t.forgotPassword}
                    </a>
                  </div>
                  <Input required type="password" />
                </Field>
              </FieldGroup>
            </form>
          </CardContent>
          <CardFooter className="flex-col gap-2">
            <Button className="w-full" form="rtl-login" type="submit">
              {t.login}
            </Button>
            <Button
              className="w-full"
              onClick={() =>
                toast.success({
                  title: t.loginWithGoogle,
                })
              }
              variant="outline"
            >
              {t.loginWithGoogle}
            </Button>
          </CardFooter>
        </Card>
      );
    }}
  </RTLPreview>
);
