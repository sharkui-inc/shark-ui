"use client";

import { GoogleIcon } from "@/components/icons/google";
import { usePreviewLocale } from "@/hooks/use-preview-locale";
import { Button } from "@/registry/react/components/button";
import {
  Card,
  CardAction,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/registry/react/components/card";
import { Field, FieldLabel, FieldSet } from "@/registry/react/components/field";
import { Input } from "@/registry/react/components/input";

const Example = () => {
  const { locale } = usePreviewLocale();

  const { values } = translations[locale];

  return (
    <div className="w-full max-w-sm">
      <Card className="w-full">
        <CardHeader description={values.description} title={values.title}>
          <CardAction>
            <Button variant="link">{values.signUp}</Button>
          </CardAction>
        </CardHeader>
        <CardContent>
          <FieldSet>
            <Field>
              <FieldLabel>{values.email}</FieldLabel>
              <Input placeholder={values.emailPlaceholder} />
            </Field>
          </FieldSet>
        </CardContent>
        <CardFooter className="flex-col">
          <Button className="w-full">{values.sendCode}</Button>
          <Button className="w-full" variant="outline">
            <GoogleIcon data-icon="inline-start" />
            {values.loginWithGoogle}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

const translations = {
  ar: {
    values: {
      description: "أدخل بريدك الإلكتروني وتفقد صندوق الوارد",
      email: "البريد الإلكتروني",
      emailPlaceholder: "john.doe@example.com",
      loginWithGoogle: "تسجيل الدخول بحساب جوجل",
      sendCode: "إرسال رمز لمرة واحدة",
      signUp: "إنشاء حساب",
      title: "تسجيل الدخول إلى حسابك",
    },
  },
  en: {
    values: {
      description: "Enter your email and check your inbox",
      email: "Email",
      emailPlaceholder: "john.doe@example.com",
      loginWithGoogle: "Login with Google",
      sendCode: "Send one-time code",
      signUp: "Sign Up",
      title: "Login to your account",
    },
  },
  he: {
    values: {
      description: "הזן את האימייל שלך ובדוק את תיבת הדואר הנכנס",
      email: "אימייל",
      emailPlaceholder: "john.doe@example.com",
      loginWithGoogle: "התחברות עם Google",
      sendCode: "שלח קוד חד-פעמי",
      signUp: "הרשמה",
      title: "התחבר לחשבון שלך",
    },
  },
};

export default Example;
