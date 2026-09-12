import {
  BarChart3Icon,
  BellIcon,
  CreditCardIcon,
  LayoutDashboardIcon,
  PaletteIcon,
  SettingsIcon,
  ShoppingBagIcon,
  UsersIcon,
} from "lucide-react";

export const metrics = [
  {
    change: "3.3%",
    detail: "$7,182 more than last month",
    label: "Revenue",
    target: "82% of goal",
    trend: [38, 44, 41, 51, 49, 58, 64],
    value: "$228,441",
  },
  {
    change: "3.3%",
    detail: "$816 below planned spend",
    label: "Expenses",
    target: "61% of budget",
    trend: [22, 25, 24, 29, 27, 31, 30],
    value: "$25,108",
  },
  {
    change: "3.3%",
    detail: "15 more orders than last week",
    label: "Sales",
    target: "458 completed",
    trend: [31, 35, 34, 40, 42, 46, 48],
    value: "458",
  },
  {
    change: "4.1%",
    detail: "$8,019 above the previous period",
    label: "Profit",
    target: "89% of goal",
    trend: [28, 32, 31, 39, 43, 45, 52],
    value: "$203,133",
  },
];

export const dateRanges = [
  "Last 7 days",
  "Last 30 days",
  "Last quarter",
  "Year to date",
] as const;

export type DateRange = (typeof dateRanges)[number];

export const chartData = [
  { day: "Mon", revenue: 18 },
  { day: "Tue", revenue: 27 },
  { day: "Wed", revenue: 23 },
  { day: "Thu", revenue: 35 },
  { day: "Fri", revenue: 31 },
  { day: "Sat", revenue: 42 },
  { day: "Sun", revenue: 38 },
];

export const employees = [
  { id: "#4586936", name: "Alex Turner", role: "Product Manager" },
  { id: "#4586937", name: "Emma Davis", role: "Senior Designer" },
  { id: "#4586933", name: "John Smith", role: "Chief Technology Officer" },
  { id: "#4586932", name: "Kate Moore", role: "Chief Executive Officer" },
] as const;

export type Employee = (typeof employees)[number];

export const ownerEmployeeId = "#4586932" satisfies Employee["id"];

export const employeeAvatars: Record<Employee["id"], string> = {
  "#4586932": "/images/gradients/rose.svg",
  "#4586933": "/images/gradients/green-dark.svg",
  "#4586936": "/images/gradients/blue.svg",
  "#4586937": "/images/gradients/purple.svg",
};

export const owner = {
  avatar: employeeAvatars[ownerEmployeeId],
  name: "Kate Moore",
} as const;

export const greeting = {
  firstName: owner.name.split(" ")[0],
  subtitle: "Here is how Onda performed in last 30 days.",
} as const;

export const salesSummary = {
  average: "$4,063",
  bestDay: "Saturday",
  change: "18.4%",
  netRevenue: "$28,441",
  orders: "458",
  periodLabel: "Last 30 days",
} as const;

export const trafficSummary = {
  avgSession: "2m 48s",
  bounceRate: "32.4%",
  change: "8.6%",
  totalSessions: "231,856",
} as const;

export const trafficSources = [
  {
    change: "+12.6%",
    label: "Organic",
    sessions: "148,388",
    value: 64,
  },
  {
    change: "+4.2%",
    label: "Paid ads",
    sessions: "53,327",
    value: 23,
  },
  {
    change: "+1.8%",
    label: "Referral",
    sessions: "30,141",
    value: 13,
  },
];

export const notifications = [
  {
    description: "Last 30 days closed at $228,441.",
    id: "weekly-report",
    time: "2h",
    title: "Weekly revenue report",
  },
  {
    description: "Added as a workspace member.",
    id: "taylor-joined",
    time: "5h",
    title: "Taylor Stone joined Onda",
  },
  {
    description: "Paid ads are up 4.2% week over week.",
    id: "paid-ads",
    time: "Yesterday",
    title: "Paid ads recovered",
  },
] as const;

export const initialUnreadIds = ["weekly-report", "taylor-joined"];

export const appearanceOptions = ["System", "Light", "Dark"] as const;

export type AppearanceOption = (typeof appearanceOptions)[number];

export const dashboardNavigation = [
  { icon: LayoutDashboardIcon, label: "Dashboard" },
  { icon: ShoppingBagIcon, label: "Orders" },
  { icon: UsersIcon, label: "Customers" },
  { icon: BarChart3Icon, label: "Analytics" },
];

export const settingsNavigation = [
  { icon: SettingsIcon, label: "General", value: "general" },
  { icon: BellIcon, label: "Notifications", value: "notifications" },
  { icon: PaletteIcon, label: "Appearance", value: "appearance" },
  { icon: UsersIcon, label: "Members", value: "members" },
  { icon: CreditCardIcon, label: "Billing", value: "billing" },
] as const;
