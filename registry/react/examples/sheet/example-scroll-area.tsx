import { Button } from "@/registry/react/components/button";
import {
  Sheet,
  SheetBody,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTrigger,
} from "@/registry/react/components/sheet";

const Example = () => (
  <Sheet>
    <SheetTrigger asChild>
      <Button variant="outline">Open</Button>
    </SheetTrigger>

    <SheetContent>
      <SheetHeader title="Terms & Conditions" />
      <SheetBody scrollFade>
        <div className="space-y-2 **:[h3]:font-semibold **:[p]:text-muted-foreground **:[p]:text-sm">
          {sections.flatMap((section) => [
            <h3 key={`${section.title}-title`}>{section.title}</h3>,
            <p key={`${section.title}-body`}>{section.body}</p>,
          ])}
        </div>
      </SheetBody>
      <SheetFooter>
        <SheetClose asChild>
          <Button>I Agree</Button>
        </SheetClose>
        <SheetClose asChild>
          <Button variant="ghost">Cancel</Button>
        </SheetClose>
      </SheetFooter>
    </SheetContent>
  </Sheet>
);

const sections = [
  {
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi imperdiet placerat nisl, ac consequat sem hendrerit in.",
    title: "What is Lorem Ipsum?",
  },
  {
    body: "Pellentesque quis sapien tortor. Nulla egestas tristique justo, in commodo quam posuere id. Cras varius, nunc non placerat vulputate, dolor turpis elementum elit, non lobortis lacus nunc nec nisl.",
    title: "Why do we use it?",
  },
  {
    body: "Pellentesque turpis est, mollis eu arcu eu, tempor tincidunt urna. Pellentesque pellentesque est euismod accumsan ullamcorper. Quisque urna lorem, porttitor ac malesuada at, vehicula eget nulla. Donec eget consequat erat, quis pharetra ex.",
    title: "Where does it come from?",
  },
  {
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec egestas semper eros a maximus. Sed consequat tempus lobortis. Phasellus sed vulputate turpis. Nulla facilisi. Curabitur consequat dui tellus.",
    title: "Where can I get some?",
  },
  {
    body: "Donec tortor lorem, finibus vel suscipit vehicula, sagittis efficitur erat. Proin sagittis aliquam sagittis. Nullam sed porta leo. Nunc sed velit felis.",
    title: "Who can I contact if I have questions?",
  },
  {
    body: "Aenean maximus, libero vel laoreet congue, purus leo iaculis libero, egestas egestas quam mi at quam. Curabitur eu tempus mauris. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;",
    title: "What happens if I don't agree to these terms?",
  },
  {
    body: "Maecenas euismod, nisl eget aliquam tincidunt, nisl nisl aliquam nisl, eget aliquam nisl nisl eget nisl. Integer vitae justo eget magna fermentum iaculis eu non diam.",
    title: "How do updates work?",
  },
  {
    body: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    title: "What data do we collect?",
  },
  {
    body: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    title: "How is my data stored?",
  },
  {
    body: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    title: "Can I request deletion?",
  },
  {
    body: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
    title: "Third-party services",
  },
  {
    body: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis autem vel eum iure reprehenderit.",
    title: "Cookies and tracking",
  },
  {
    body: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.",
    title: "Acceptable use",
  },
  {
    body: "Similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.",
    title: "Account suspension",
  },
  {
    body: "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.",
    title: "Intellectual property",
  },
  {
    body: "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.",
    title: "Limitation of liability",
  },
  {
    body: "Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
    title: "Indemnification",
  },
  {
    body: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
    title: "Governing law",
  },
  {
    body: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.",
    title: "Severability",
  },
  {
    body: "Qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam.",
    title: "Contact and notices",
  },
];

export default Example;
