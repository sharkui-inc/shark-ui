"use client";

import { usePreviewLocale } from "@/hooks/use-preview-locale";
import { Prose } from "@/registry/react/components/prose";
import { ScrollArea } from "@/registry/react/components/scroll-area";

const Example = () => {
  const { locale } = usePreviewLocale();

  const { values } = translations[locale];

  return (
    <div className="overflow-hidden">
      <ScrollArea className="h-[350px] rounded-xl border">
        <Prose className="max-w-full p-8">
          <h1>{values.title}</h1>
          <p>{values.p1}</p>
          <h2>{values.planTitle}</h2>
          <p>
            {values.p2start} <a href="#">{values.p2link}</a> {values.p2end}
          </p>
          <blockquote>{values.quote}</blockquote>
          <h3>{values.taxTitle}</h3>
          <p>{values.p3}</p>
          <ul>
            {values.puns.map((pun) => (
              <li key={pun}>{pun}</li>
            ))}
          </ul>
          <p>{values.p4}</p>
          <h3>{values.revoltTitle}</h3>
          <p>{values.p5}</p>
          <p>{values.p6}</p>
          <h3>{values.rebellionTitle}</h3>
          <p>{values.p7}</p>
          <div>
            <table>
              <thead>
                <tr>
                  <th>{values.treasury}</th>
                  <th>{values.happiness}</th>
                </tr>
              </thead>
              <tbody>
                {values.tableRows.map(([treasury, happiness]) => (
                  <tr key={`${treasury}-${happiness}`}>
                    <td>{treasury}</td>
                    <td>{happiness}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p>{values.p8}</p>
          <p>{values.p9}</p>
        </Prose>
      </ScrollArea>
    </div>
  );
};

const translations = {
  ar: {
    values: {
      happiness: "سعادة الشعب",
      p1: "في قديم الزمان، في أرض بعيدة، كان هناك ملك كسول جدًا يقضي يومه كله مستلقيًا على عرشه. وفي يوم من الأيام، جاءه مستشاروه بمشكلة: كانت مملكته تنفد منها الأموال.",
      p2end: ": سيفرض ضريبة على النكات في المملكة",
      p2link: "خطة رائعة",
      p2start: "فكر الملك طويلًا وبجدّ، وأخيرًا توصّل إلى",
      p3: "لم يكن رعايا الملك مسرورين. تذمروا واشتكوا، لكن الملك كان حازمًا:",
      p4: "ونتيجة لذلك، توقف الناس عن إلقاء النكات، وسقطت المملكة في الكآبة. لكن كان هناك شخص واحد رفض أن تثنيه حماقة الملك: مهرّج البلاط الملقّب بـ«جوكستر».",
      p5: "بدأ جوكستر يتسلل إلى القلعة في منتصف الليل ويترك النكات في كل مكان: تحت وسادة الملك، وفي حسائه، وحتى في مرحاض القصر. كان الملك غاضبًا للغاية، لكنه لم يستطع إيقاف جوكستر.",
      p6: "ثم في يوم من الأيام، اكتشف أهل المملكة أن النكات التي تركها جوكستر كانت مضحكة لدرجة أنهم لم يستطيعوا إلا أن يضحكوا. وبمجرد أن بدأوا يضحكون، لم يستطيعوا التوقف.",
      p7: "بدأ أهل المملكة، وهم يشعرون بالبهجة من الضحك، يلقون النكات والتورية مرة أخرى، وسرعان ما شاركت المملكة بأكملها في النكتة.",
      p8: "أدرك الملك، وهو يرى مدى سعادة رعاياه، خطأ طريقه وألغى ضريبة النكتة. وأُعلِن جوكستر بطلًا، وعاشت المملكة في سعادة دائمة.",
      p9: "المغزى من القصة هو: لا تقلل أبدًا من قوة الضحكة الجيدة، وكن دائمًا حذرًا من الأفكار السيئة.",
      planTitle: "خطة الملك",
      puns: [
        "المستوى الأول من التورية: ٥ عملات ذهبية",
        "المستوى الثاني من النكات: ١٠ عملات ذهبية",
        "المستوى الثالث من النكت القصيرة: ٢٠ عملة ذهبية",
      ],
      quote:
        "«في النهاية، الجميع يستمتعون بالنكتة الجيدة، لذا من العدل أن يدفعوا مقابل هذا الامتياز».",
      rebellionTitle: "ثورة الشعب",
      revoltTitle: "تمرد جوكستر",
      tableRows: [
        ["فارغة", "متدفقة"],
        ["محدودة", "راضية"],
        ["ممتلئة", "مبتهجة"],
      ],
      taxTitle: "ضريبة النكتة",
      title: "ضريبة الضحك: سجلات ضريبة النكتة",
      treasury: "خزانة الملك",
    },
  },
  en: {
    values: {
      happiness: "People&apos;s happiness",
      p1: "Once upon a time, in a far-off land, there was a very lazy king who spent all day lounging on his throne. One day, his advisors came to him with a problem: the kingdom was running out of money.",
      p2end: ": he would tax the jokes in the kingdom",
      p2link: "a brilliant plan",
      p2start: "The king thought long and hard, and finally came up with",
      p3: "The king&apos;s subjects were not amused. They grumbled and complained, but the king was firm:",
      p4: "As a result, people stopped telling jokes, and the kingdom fell into a gloom. But there was one person who refused to let the king&apos;s foolishness get him down: a court jester named Jokester.",
      p5: "Jokester began sneaking into the castle in the middle of the night and leaving jokes all over the place: under the king&apos;s pillow, in his soup, even in the royal toilet. The king was furious, but he couldn&apos;t seem to stop Jokester.",
      p6: "And then, one day, the people of the kingdom discovered that the jokes left by Jokester were so funny that they couldn&apos;t help but laugh. And once they started laughing, they couldn&apos;t stop.",
      p7: "The people of the kingdom, feeling uplifted by the laughter, started to tell jokes and puns again, and soon the entire kingdom was in on the joke.",
      p8: "The king, seeing how much happier his subjects were, realized the error of his ways and repealed the joke tax. Jokester was declared a hero, and the kingdom lived happily ever after.",
      p9: "The moral of the story is: never underestimate the power of a good laugh and always be careful of bad ideas.",
      planTitle: "The King&apos;s Plan",
      puns: [
        "1st level of puns: 5 gold coins",
        "2nd level of jokes: 10 gold coins",
        "3rd level of one-liners : 20 gold coins",
      ],
      quote:
        "&quot;After all,&quot; he said, &quot;everyone enjoys a good joke, so it&apos;s only fair that they should pay for the privilege.&quot;",
      rebellionTitle: "The People&apos;s Rebellion",
      revoltTitle: "Jokester&apos;s Revolt",
      tableRows: [
        ["Empty", "Overflowing"],
        ["Modest", "Satisfied"],
        ["Full", "Ecstatic"],
      ],
      taxTitle: "The Joke Tax",
      title: "Taxing Laughter: The Joke Tax Chronicles",
      treasury: "King&apos;s Treasury",
    },
  },
  he: {
    values: {
      happiness: "שמחת העם",
      p1: "פעם, בארץ רחוקה, חי מלך עצלן מאוד שבילה את כל ימיו במנוחה על כסאו. יום אחד ניגשו אליו יועציו עם בעיה: הכספים של הממלכה הלכו ואזלו.",
      p2end: ": הוא יטיל מס על הבדיחות בממלכה",
      p2link: "תוכנית מבריקה",
      p2start: "המלך חשב זמן רב, ולבסוף עלה על",
      p3: "נתיני המלך לא צחקו. הם רטנו והתלוננו, אבל המלך היה נחוש:",
      p4: "כתוצאה מכך, אנשים הפסיקו לספר בדיחות, והממלכה שקעה בעגמומיות. אבל היה אדם אחד שסירב לתת לטיפשות של המלך להפיל אותו: ליצן החצר בשם ג'וקסטר.",
      p5: "ג'וקסטר החל להתגנב לטירה באמצע הלילה ולהשאיר בדיחות בכל מקום: מתחת לכרית של המלך, במרק שלו, ואפילו בשירותים המלכותיים. המלך זעם, אבל נראה שלא הצליח לעצור את ג'וקסטר.",
      p6: "ואז, יום אחד, גילו אנשי הממלכה שהבדיחות שהשאיר ג'וקסטר היו כל כך מצחיקות שהם לא יכלו שלא לצחוק. ומרגע שהתחילו לצחוק, הם לא יכלו להפסיק.",
      p7: "אנשי הממלכה, שהרגישו מרוממים מהצחוק, החלו שוב לספר בדיחות ומשחקי מילים, ועד מהרה כל הממלכה הייתה שותפה לבדיחה.",
      p8: "המלך, שראה עד כמה נתיניו מאושרים יותר, הבין את טעותו וביטל את מס הבדיחות. ג'וקסטר הוכרז כגיבור, והממלכה חיה באושר ועושר.",
      p9: "מוסר ההשכל: לעולם אל תזלזל בכוחה של צחוק טוב, והייה תמיד זהיר מרעיונות רעים.",
      planTitle: "התוכנית של המלך",
      puns: [
        "רמה 1 של משחקי מילים: 5 מטבעות זהב",
        "רמה 2 של בדיחות: 10 מטבעות זהב",
        "רמה 3 של שנינות חד-פעמית: 20 מטבעות זהב",
      ],
      quote:
        "'אחרי הכל', אמר, 'כולם נהנים מבדיחה טובה, אז רק הוגן שהם ישלמו על כך'.",
      rebellionTitle: "מרד העם",
      revoltTitle: "המרד של ג'וקסטר",
      tableRows: [
        ["ריק", "גועש"],
        ["צנוע", "מסופק"],
        ["מלא", "מאושר"],
      ],
      taxTitle: "מס הבדיחות",
      title: "מס הצחוק: כרוניקות מס הבדיחות",
      treasury: "אוצר המלך",
    },
  },
};

export default Example;
