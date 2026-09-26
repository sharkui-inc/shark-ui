import { Button } from "@/registry/react/components/button";
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

const SHEET_SIDES = ["top", "right", "bottom", "left"] as const;

const paragraphs = Array.from({ length: 10 }, (_, index) => index + 1);

const SheetSide = () => (
  <div className="flex flex-wrap justify-center gap-4">
    {SHEET_SIDES.map((side) => (
      <Sheet key={side}>
        <SheetTrigger asChild>
          <Button className="capitalize" variant="outline">
            {side}
          </Button>
        </SheetTrigger>
        <SheetContent
          className={
            side === "bottom" || side === "top" ? "max-h-[50vh]" : undefined
          }
          placement={side}
        >
          <SheetHeader>
            <SheetTitle>Edit profile</SheetTitle>
            <SheetDescription>
              Make changes to your profile here. Click save when you&apos;re
              done.
            </SheetDescription>
          </SheetHeader>
          <SheetBody>
            {paragraphs.map((paragraph) => (
              <p className="mb-2 leading-relaxed" key={paragraph}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            ))}
          </SheetBody>
          <SheetFooter>
            <Button type="submit">Save changes</Button>
            <SheetClose asChild>
              <Button variant="outline">Cancel</Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    ))}
  </div>
);

export default SheetSide;
