import { Button } from "@/registry/react/components/button";
import {
  Field,
  FieldGroup,
  FieldLabel,
} from "@/registry/react/components/field";
import { Input } from "@/registry/react/components/input";
import { LocaleProvider } from "@/registry/react/components/locale";
import {
  Sheet,
  SheetBody,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/registry/react/components/sheet";

const placements = ["right", "left", "top", "bottom"] as const;
const variants = ["default", "inset"] as const;

type Placement = (typeof placements)[number];
type Variant = (typeof variants)[number];
type Direction = "ltr" | "rtl";

interface NestedSheetContentProps {
  dir: Direction;
  placement: Placement;
  variant: Variant;
}

const NestedSheetContent = (props: NestedSheetContentProps) => {
  const { dir, placement, variant } = props;

  return (
    <SheetContent dir={dir} placement={placement} variant={variant}>
      <SheetHeader
        description="View and manage a user in your team."
        title="Manage team member"
      />

      <SheetBody className="grid gap-4">
        <div className="grid gap-1">
          <p className="text-muted-foreground text-sm">Name</p>
          <p className="text-sm font-medium">Vinicius Vicentini</p>
        </div>
        <div className="grid gap-1">
          <p className="text-muted-foreground text-sm">Email</p>
          <p className="text-sm font-medium">vinihvc@example.com</p>
        </div>
      </SheetBody>

      <SheetFooter>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline">Edit details</Button>
          </SheetTrigger>
          <SheetContent
            dir={dir}
            placement={placement}
            showCloseButton={false}
            variant={variant}
          >
            <SheetHeader>
              <SheetTitle>Edit details</SheetTitle>
              <SheetDescription>
                Make changes to the member&apos;s information.
              </SheetDescription>
            </SheetHeader>
            <SheetBody>
              <FieldGroup>
                <Field>
                  <FieldLabel>Name</FieldLabel>
                  <Input defaultValue="Vinicius Vicentini" />
                </Field>
                <Field>
                  <FieldLabel>Email</FieldLabel>
                  <Input defaultValue="vinihvc@example.com" />
                </Field>
              </FieldGroup>
            </SheetBody>
            <SheetFooter>
              <Button type="submit">Save changes</Button>
              <SheetClose asChild>
                <Button variant="ghost">Cancel</Button>
              </SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </SheetFooter>
    </SheetContent>
  );
};

interface NestedSheetTriggersProps {
  dir: Direction;
}

const NestedSheetTriggers = (props: NestedSheetTriggersProps) => {
  const { dir } = props;

  return (
    <div className="flex flex-wrap justify-center gap-2" dir={dir}>
      {placements.flatMap((placement) =>
        variants.map((variant) => (
          <Sheet key={`${dir}-${placement}-${variant}`}>
            <SheetTrigger asChild>
              <Button className="capitalize" variant="outline">
                {dir === "rtl" ? "RTL " : ""}
                {placement}
                {variant === "inset" ? " inset" : ""}
              </Button>
            </SheetTrigger>
            <NestedSheetContent
              dir={dir}
              placement={placement}
              variant={variant}
            />
          </Sheet>
        ))
      )}
    </div>
  );
};

const SheetNested = () => (
  <div className="flex flex-col gap-6">
    <NestedSheetTriggers dir="ltr" />
    <LocaleProvider locale="ar-SA">
      <NestedSheetTriggers dir="rtl" />
    </LocaleProvider>
  </div>
);

export default SheetNested;
