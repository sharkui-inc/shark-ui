import type { Metadata } from "next";
import { MailLayout } from "./_components/mail-layout";
import { MailList } from "./_components/mail-list";
import { MailPane } from "./_components/mail-pane";
import { MailSidebar } from "./_components/mail-sidebar";

export const dynamic = "force-static";
export const revalidate = false;

export const metadata: Metadata = {
  robots: { follow: false, index: false },
  title: "Mail Preview",
};

const MailTemplatePage = () => (
  <div className="absolute inset-0 overflow-hidden">
    <MailLayout
      content={<MailPane />}
      list={<MailList />}
      sidebar={<MailSidebar />}
    />
  </div>
);

export default MailTemplatePage;
