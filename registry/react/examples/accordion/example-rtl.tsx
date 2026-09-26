"use client";

import { usePreviewLocale } from "@/hooks/use-preview-locale";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/registry/react/components/accordion";

const Example = () => {
  const { locale } = usePreviewLocale();
  const { values } = translations[locale];

  return (
    <Accordion className="w-full max-w-lg" defaultValue={["item-1"]}>
      <AccordionItem value="item-1">
        <AccordionTrigger>{values.product.title}</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-muted-foreground">
          {values.product.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-2">
        <AccordionTrigger>{values.shipping.title}</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-muted-foreground">
          {values.shipping.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-3">
        <AccordionTrigger>{values.returns.title}</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-muted-foreground">
          {values.returns.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

const translations = {
  ar: {
    values: {
      product: {
        paragraphs: [
          "يجمع منتجنا الرائد بين أحدث التقنيات والتصميم الأنيق. صُنع من مواد فاخرة ليقدّم أداءً وموثوقية لا مثيل لها.",
          "تشمل المزايا الرئيسية قدرات معالجة متقدمة وواجهة استخدام بديهية صُممت للمبتدئين والخبراء على حدٍّ سواء.",
        ],
        title: "معلومات المنتج",
      },
      returns: {
        paragraphs: [
          "نقف خلف منتجاتنا بسياسة إرجاع شاملة لمدة 30 يومًا. إذا لم تكن راضيًا تمامًا، أعد المنتج في حالته الأصلية.",
          "تتضمن عملية الإرجاع السهلة شحنًا مجانيًا للإرجاع واستردادًا كاملًا للمبلغ خلال 48 ساعة من استلام المنتج المرتجع.",
        ],
        title: "سياسة الإرجاع",
      },
      shipping: {
        paragraphs: [
          "نقدم شحنًا عالميًا عبر شركاء توصيل موثوقين. يستغرق التوصيل القياسي 3-5 أيام عمل، بينما يضمن الشحن السريع التوصيل خلال 1-2 يوم عمل.",
          "جميع الطلبات تُغلف بعناية وتكون مؤمّنة بالكامل. تتبّع شحنتك في الوقت الفعلي عبر بوابة التتبع المخصصة لدينا.",
        ],
        title: "تفاصيل الشحن",
      },
    },
  },
  en: {
    values: {
      product: {
        paragraphs: [
          "Our flagship product combines cutting-edge technology with sleek design. Built with premium materials, it offers unparalleled performance and reliability.",
          "Key features include advanced processing capabilities, and an intuitive user interface designed for both beginners and experts.",
        ],
        title: "Product Information",
      },
      returns: {
        paragraphs: [
          "We stand behind our products with a comprehensive 30-day return policy. If you're not completely satisfied, simply return the item in its original condition.",
          "Our hassle-free return process includes free return shipping and full refunds processed within 48 hours of receiving the returned item.",
        ],
        title: "Return Policy",
      },
      shipping: {
        paragraphs: [
          "We offer worldwide shipping through trusted courier partners. Standard delivery takes 3-5 business days, while express shipping ensures delivery within 1-2 business days.",
          "All orders are carefully packaged and fully insured. Track your shipment in real-time through our dedicated tracking portal.",
        ],
        title: "Shipping Details",
      },
    },
  },
  he: {
    values: {
      product: {
        paragraphs: [
          "המוצר הדגל שלנו משלב טכנולוגיה מתקדמת עם עיצוב אלגנטי. הוא עשוי מחומרים איכותיים ומציע ביצועים ואמינות ללא תחרות.",
          "בין המאפיינים המרכזיים: יכולות עיבוד מתקדמות וממשק משתמש אינטואיטיבי המיועד גם למתחילים וגם למומחים.",
        ],
        title: "מידע על המוצר",
      },
      returns: {
        paragraphs: [
          "אנחנו עומדים מאחורי המוצרים שלנו עם מדיניות החזרות מקיפה ל-30 יום. אם אינך מרוצה לחלוטין, פשוט החזר את המוצר במצבו המקורי.",
          "תהליך ההחזרה הפשוט שלנו כולל משלוח החזרה חינם והחזר מלא המעובד תוך 48 שעות מקבלת המוצר המוחזר.",
        ],
        title: "מדיניות החזרות",
      },
      shipping: {
        paragraphs: [
          "אנחנו מציעים משלוח בינלאומי דרך חברות שילוח מהימנות. משלוח רגיל אורך 3-5 ימי עסקים, ומשלוח אקספרס מבטיח מסירה תוך 1-2 ימי עסקים.",
          "כל ההזמנות נארזות בקפידה ומבוטחות במלואן. עקוב אחרי המשלוח שלך בזמן אמת דרך פורטל המעקב הייעודי שלנו.",
        ],
        title: "פרטי משלוח",
      },
    },
  },
};

export default Example;
