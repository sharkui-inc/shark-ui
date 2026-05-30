import { Prose } from "@/registry/react/components/prose";
import { ScrollArea } from "@/registry/react/components/scroll-area";

const TypographyDemo = () => (
  <div className="overflow-hidden">
    <ScrollArea className="h-[350px] rounded-xl border">
      <Prose className="max-w-full p-8">
        <h1>Taxing Laughter: The Joke Tax Chronicles</h1>
        <p>
          Once upon a time, in a far-off land, there was a very lazy king who
          spent all day lounging on his throne. One day, his advisors came to
          him with a problem: the kingdom was running out of money.
        </p>
        <h2>The King&apos;s Plan</h2>
        <p>
          The king thought long and hard, and finally came up with{" "}
          <a href="#">a brilliant plan</a>: he would tax the jokes in the
          kingdom.
        </p>
        <blockquote>
          &quot;After all,&quot; he said, &quot;everyone enjoys a good joke, so
          it&apos;s only fair that they should pay for the privilege.&quot;
        </blockquote>
        <h3>The Joke Tax</h3>
        <p>
          The king&apos;s subjects were not amused. They grumbled and
          complained, but the king was firm:
        </p>
        <ul>
          <li>1st level of puns: 5 gold coins</li>
          <li>2nd level of jokes: 10 gold coins</li>
          <li>3rd level of one-liners : 20 gold coins</li>
        </ul>
        <p>
          As a result, people stopped telling jokes, and the kingdom fell into a
          gloom. But there was one person who refused to let the king&apos;s
          foolishness get him down: a court jester named Jokester.
        </p>
        <h3>Jokester&apos;s Revolt</h3>
        <p>
          Jokester began sneaking into the castle in the middle of the night and
          leaving jokes all over the place: under the king&apos;s pillow, in his
          soup, even in the royal toilet. The king was furious, but he
          couldn&apos;t seem to stop Jokester.
        </p>
        <p>
          And then, one day, the people of the kingdom discovered that the jokes
          left by Jokester were so funny that they couldn&apos;t help but laugh.
          And once they started laughing, they couldn&apos;t stop.
        </p>
        <h3>The People&apos;s Rebellion</h3>
        <p>
          The people of the kingdom, feeling uplifted by the laughter, started
          to tell jokes and puns again, and soon the entire kingdom was in on
          the joke.
        </p>
        <div>
          <table>
            <thead>
              <tr>
                <th>King&apos;s Treasury</th>
                <th>People&apos;s happiness</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Empty</td>
                <td>Overflowing</td>
              </tr>
              <tr>
                <td>Modest</td>
                <td>Satisfied</td>
              </tr>
              <tr>
                <td>Full</td>
                <td>Ecstatic</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          The king, seeing how much happier his subjects were, realized the
          error of his ways and repealed the joke tax. Jokester was declared a
          hero, and the kingdom lived happily ever after.
        </p>
        <p>
          The moral of the story is: never underestimate the power of a good
          laugh and always be careful of bad ideas.
        </p>
      </Prose>
    </ScrollArea>
  </div>
);

export default TypographyDemo;
