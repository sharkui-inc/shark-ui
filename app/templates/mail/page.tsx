import type { Metadata } from "next";
import { MailWorkspace } from "./_components/mail-workspace";

export const dynamic = "force-static";
export const revalidate = false;

export const metadata: Metadata = {
  robots: { follow: false, index: false },
  title: "Mail Preview",
};

const MailTemplatePage = () => (
  <main className="absolute inset-0 overflow-hidden">
    <h1 className="sr-only">Mail preview</h1>
    <MailWorkspace />
  </main>
);

export default MailTemplatePage;
