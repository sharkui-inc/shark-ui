import {
  ArchiveIcon,
  Clock3Icon,
  FileEditIcon,
  InboxIcon,
  SendIcon,
  ShieldAlertIcon,
  StarIcon,
  Trash2Icon,
} from "lucide-react";

export const FOLDERS = [
  { icon: InboxIcon, label: "Inbox" },
  { icon: StarIcon, label: "Starred" },
  { icon: SendIcon, label: "Sent" },
  { icon: FileEditIcon, label: "Drafts" },
  { icon: Clock3Icon, label: "Snoozed" },
  { icon: ArchiveIcon, label: "Archive" },
  { icon: ShieldAlertIcon, label: "Spam" },
  { icon: Trash2Icon, label: "Trash" },
] as const;

export const LABELS = [
  { label: "Work", variant: "info" },
  { label: "Personal", variant: "success" },
  { label: "Billing", variant: "warning" },
  { label: "Travel", variant: "default" },
  { label: "Urgent", variant: "destructive" },
] as const;

export type Mailbox = (typeof FOLDERS)[number]["label"];

export type MailComposeMode = "new" | "reply" | "reply-all" | null;

export type EmailLabel = (typeof LABELS)[number]["label"];

export interface Email {
  body: string;
  folder: Mailbox;
  id: string;
  label: EmailLabel;
  preview: string;
  sender: string;
  senderEmail: string;
  subject: string;
  time: string;
  unread: boolean;
}

export const STARRED_IDS = ["figma-theme-tokens", "united-gig-sfo"];

export const EMAILS: Email[] = [
  {
    body: "Production deploy for shark-ui failed on Vercel.\n\nThe build exited during typecheck after a missing export in registry/react/components/status. Preview URL was not published. The last successful production deploy is still live.\n\nRedeploy from the failed commit once the export is restored, or promote the previous deployment if you need to roll back first.\n\nVercel",
    folder: "Inbox",
    id: "vercel-deploy-failed",
    label: "Urgent",
    preview:
      "The build exited during typecheck after a missing export in status.",
    sender: "Vercel",
    senderEmail: "noreply@vercel.com",
    subject: "Production deploy failed: shark-ui",
    time: "10:21 AM",
    unread: true,
  },
  {
    body: "Maya left a comment on Theme tokens.\n\n“The radius scale jumps from sm to lg with no md. Can we add an 8px step so cards and inputs share the same corner?”\n\nOpen the file to reply in context. Mentions stay on this thread until you resolve the comment.\n\nFigma",
    folder: "Inbox",
    id: "figma-theme-tokens",
    label: "Work",
    preview: "Maya asked for an 8px radius step so cards and inputs match.",
    sender: "Figma",
    senderEmail: "notifications@figma.com",
    subject: "New comment on Theme tokens",
    time: "9:48 AM",
    unread: true,
  },
  {
    body: "Jordan shared Q3 roadmap with you.\n\nThe page covers launch windows for the themes catalog, docs search, and the registry CLI. Comment on the timeline if the Shark UI ship date needs to move.\n\nYou can edit the page. Access stays until Jordan removes you.\n\nNotion",
    folder: "Inbox",
    id: "notion-q3-roadmap",
    label: "Work",
    preview:
      "Jordan shared the Q3 roadmap covering themes, docs search, and the CLI.",
    sender: "Notion",
    senderEmail: "notify@notion.so",
    subject: "Q3 roadmap was shared with you",
    time: "Yesterday",
    unread: false,
  },
  {
    body: "Your AWS invoice for August is ready for account prod-us-east-1.\n\nCharges this month are mostly ECS and CloudFront. The PDF and line items are in the billing console. Payment drafts from the card on file on the due date.\n\nIf a line looks wrong, open a billing case before the draft runs.\n\nAmazon Web Services",
    folder: "Inbox",
    id: "aws-august-invoice",
    label: "Billing",
    preview: "August charges for prod-us-east-1 are mostly ECS and CloudFront.",
    sender: "AWS",
    senderEmail: "no-reply@amazon.com",
    subject: "Invoice available: August · prod-us-east-1",
    time: "Yesterday",
    unread: true,
  },
  {
    body: "Check-in is open for UA 129, GIG to SFO, tomorrow.\n\nSeat 14A is confirmed. Online check-in closes 60 minutes before departure. You’ll need your passport at the gate.\n\nAdd the boarding pass to Wallet after you check in, or use the confirmation in this thread.\n\nUnited Airlines",
    folder: "Inbox",
    id: "united-gig-sfo",
    label: "Travel",
    preview: "Check-in is open for UA 129, GIG to SFO. Seat 14A.",
    sender: "United Airlines",
    senderEmail: "united@email.united.com",
    subject: "Check in for UA 129 · GIG → SFO",
    time: "Mon",
    unread: false,
  },
  {
    body: "Incident api-gateway-5xx is resolved.\n\nError rates on the edge gateway returned to baseline at 08:14 UTC. The trigger was a bad deploy of the rate-limit sidecar. Traffic was drained, the previous revision restored, and 5xx dropped below 0.2%.\n\nA short postmortem is due in PagerDuty by Friday.\n\nPagerDuty",
    folder: "Inbox",
    id: "pagerduty-api-gateway",
    label: "Urgent",
    preview:
      "Error rates on the edge gateway returned to baseline at 08:14 UTC.",
    sender: "PagerDuty",
    senderEmail: "noreply@pagerduty.com",
    subject: "Resolved: api-gateway-5xx",
    time: "Mon",
    unread: true,
  },
  {
    body: "Ana invited you to her Spotify Family plan.\n\nAccept in 7 days to share Premium. Your current individual plan pauses while you are on the family plan. You can leave anytime from account settings.\n\nIf this was not expected, ignore the invite.\n\nSpotify",
    folder: "Inbox",
    id: "spotify-family-plan",
    label: "Personal",
    preview:
      "Ana invited you to her Spotify Family plan. Accept within 7 days.",
    sender: "Spotify",
    senderEmail: "noreply@spotify.com",
    subject: "Ana invited you to a Family plan",
    time: "Sun",
    unread: false,
  },
  {
    body: "A master service agreement with Vercel is waiting for your signature.\n\nThe packet is the MSA plus a one-page order form for the next term. Please sign by Friday so procurement can issue the PO.\n\nOpen DocuSign to review and complete. Completing from this email keeps the audit trail on the envelope.\n\nDocuSign",
    folder: "Inbox",
    id: "docusign-msa",
    label: "Work",
    preview:
      "The MSA with Vercel is waiting for your signature. Sign by Friday.",
    sender: "DocuSign",
    senderEmail: "dse@docusign.net",
    subject: "Please sign: MSA with Vercel",
    time: "Sun",
    unread: true,
  },
  {
    body: "Your stay in Lisbon is confirmed for October 12–16.\n\nCheck-in is after 3:00 PM. The host will send the door code the morning you arrive. Cancellation is free until October 5.\n\nA receipt and house rules are in your trips tab.\n\nAirbnb",
    folder: "Inbox",
    id: "airbnb-lisbon",
    label: "Travel",
    preview:
      "Your stay in Lisbon is confirmed for October 12–16. Check-in after 3:00 PM.",
    sender: "Airbnb",
    senderEmail: "automated@airbnb.com",
    subject: "Reservation confirmed · Lisbon, Oct 12–16",
    time: "Sat",
    unread: false,
  },
  {
    body: "An ACH credit of $12,400.00 posted to your Mercury checking account.\n\nThe originator is listed as Northwind Studio. Funds are available now. The transaction id is in the activity feed.\n\nIf you were not expecting this transfer, freeze the account from the Mercury dashboard and write to support.\n\nMercury",
    folder: "Inbox",
    id: "mercury-ach",
    label: "Billing",
    preview: "An ACH credit of $12,400.00 posted from Northwind Studio.",
    sender: "Mercury",
    senderEmail: "support@mercury.com",
    subject: "ACH received: $12,400.00",
    time: "Fri",
    unread: false,
  },
] satisfies Email[];

const SENDER_AVATARS: Record<string, string> = {
  Airbnb: "/images/gradients/rose.svg",
  AWS: "/images/gradients/orange.svg",
  DocuSign: "/images/gradients/blue.svg",
  Figma: "/images/gradients/purple.svg",
  Mercury: "/images/gradients/green-dark.svg",
  Notion: "/images/gradients/amber.svg",
  PagerDuty: "/images/gradients/orange.svg",
  Spotify: "/images/gradients/green-dark.svg",
  "United Airlines": "/images/gradients/blue.svg",
  Vercel: "/images/gradients/amber.svg",
  You: "/images/gradients/green-dark.svg",
};

export const getSenderAvatar = (sender: string) =>
  SENDER_AVATARS[sender] ?? "/images/gradients/green-dark.svg";

export const getFolderCount = (folder: Mailbox) => {
  switch (folder) {
    case "Inbox":
      return EMAILS.filter((email) => email.folder === "Inbox" && email.unread)
        .length;
    case "Starred":
      return STARRED_IDS.length;
    case "Archive":
    case "Drafts":
    case "Sent":
    case "Snoozed":
    case "Spam":
    case "Trash":
      return EMAILS.filter((email) => email.folder === folder).length;
    default: {
      const _exhaustive: never = folder;
      return _exhaustive;
    }
  }
};
