import type { ComponentProps, ReactNode } from "react";
import { ActivityGoalExample } from "@/components/examples/activity-goal-example";
import { AlertExample } from "@/components/examples/alert-example";
import { AnalyticsCardExample } from "@/components/examples/analytics-card-example";
import { AvatarGroupEmptyExample } from "@/components/examples/avatar-group-empty-example";
import { BadgeExample } from "@/components/examples/badge-example";
import { BookAppointmentExample } from "@/components/examples/book-appointment-example";
import { ButtonExample } from "@/components/examples/button-example";
import { ChatCardExample } from "@/components/examples/chat-card-example";
import { ColorPickerExample } from "@/components/examples/color-picker-example";
import { CommunitiesExample } from "@/components/examples/communities-example";
import { ExampleToaster } from "@/components/examples/example-toast";
import { FieldSliderExample } from "@/components/examples/field-slider-example";
import { FileActionsExample } from "@/components/examples/file-actions-example";
import { FileUploadExample } from "@/components/examples/file-upload-example";
import { FocusTimerExample } from "@/components/examples/focus-timer-example";
import { FormControlsExample } from "@/components/examples/form-controls-example";
import { InputOTPExample } from "@/components/examples/input-otp-example";
import { ItemExample } from "@/components/examples/item-example";
import { LoginFormExample } from "@/components/examples/login-form-example";
import { QrConnectExample } from "@/components/examples/qr-connect-example";
import { SleepReportExample } from "@/components/examples/sleep-report-example";
import { SocialProfileExample } from "@/components/examples/social-profile-example";
import { StyleOverviewExample } from "@/components/examples/style-overview-example";
import { TabsExample } from "@/components/examples/tabs-example";
import { TeamMembersCardExample } from "@/components/examples/team-members-card-example";
import { TrafficDonutExample } from "@/components/examples/traffic-donut-example";
import { UnsavedChangesExample } from "@/components/examples/unsaved-changes-example";
import { MasonryColumns } from "@/components/masonry-columns";
import { cn } from "@/lib/utils";

export const PREVIEW_TILES: {
  column: "end" | "middle" | "start";
  key: string;
  node: ReactNode;
}[] = [
  { column: "start", key: "avatar", node: <AvatarGroupEmptyExample /> },
  { column: "middle", key: "style", node: <StyleOverviewExample /> },
  { column: "end", key: "otp", node: <InputOTPExample /> },
  { column: "start", key: "sleep", node: <SleepReportExample /> },
  { column: "start", key: "alert", node: <AlertExample /> },
  { column: "middle", key: "analytics", node: <AnalyticsCardExample /> },
  { column: "end", key: "chat", node: <ChatCardExample /> },
  { column: "start", key: "timer", node: <FocusTimerExample /> },
  { column: "middle", key: "profile", node: <SocialProfileExample /> },
  { column: "end", key: "traffic", node: <TrafficDonutExample /> },
  { column: "start", key: "book", node: <BookAppointmentExample /> },
  { column: "middle", key: "badges", node: <BadgeExample /> },
  { column: "start", key: "team", node: <TeamMembersCardExample /> },
  { column: "middle", key: "login", node: <LoginFormExample /> },
  { column: "end", key: "controls", node: <FormControlsExample /> },
  { column: "start", key: "buttons", node: <ButtonExample /> },
  { column: "middle", key: "slider", node: <FieldSliderExample /> },
  { column: "end", key: "actions", node: <FileActionsExample /> },
  { column: "start", key: "item", node: <ItemExample /> },
  { column: "middle", key: "color", node: <ColorPickerExample /> },
  { column: "end", key: "tabs", node: <TabsExample /> },
  { column: "start", key: "upload", node: <FileUploadExample /> },
  { column: "middle", key: "unsaved", node: <UnsavedChangesExample /> },
  { column: "end", key: "qr", node: <QrConnectExample /> },
  { column: "start", key: "activity", node: <ActivityGoalExample /> },
  { column: "middle", key: "communities", node: <CommunitiesExample /> },
];

export const PreviewGallery = (props: ComponentProps<"div">) => {
  const { className, ...rest } = props;

  return (
    <div className={cn("**:data-[slot=card]:shadow-none", className)} {...rest}>
      <ExampleToaster />
      <MasonryColumns>
        {PREVIEW_TILES.map((tile) => (
          <div
            className="*:[div]:w-full *:[div]:max-w-full"
            data-column={tile.column}
            key={tile.key}
          >
            {tile.node}
          </div>
        ))}
      </MasonryColumns>
    </div>
  );
};
