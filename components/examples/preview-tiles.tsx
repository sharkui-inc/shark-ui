import dynamic from "next/dynamic";
import type React from "react";
import { ExampleToaster } from "@/components/examples/example-toast";
import { MasonryColumns } from "@/components/masonry-columns";
import { cn } from "@/lib/utils";

const PreviewTileFallback = (props: React.ComponentProps<"div">) => {
  const { className, ...rest } = props;

  return (
    <div
      aria-hidden="true"
      className={cn("w-full rounded-xl bg-muted/40", className)}
      {...rest}
    />
  );
};

const ActivityGoalExample = dynamic(
  () =>
    import("@/components/examples/activity-goal-example").then(
      (module) => module.ActivityGoalExample
    ),
  { loading: () => <PreviewTileFallback className="min-h-48" /> }
);
const AlertExample = dynamic(
  () =>
    import("@/components/examples/alert-example").then(
      (module) => module.AlertExample
    ),
  { loading: () => <PreviewTileFallback className="min-h-24" /> }
);
const AnalyticsCardExample = dynamic(
  () =>
    import("@/components/examples/analytics-card-example").then(
      (module) => module.AnalyticsCardExample
    ),
  { loading: () => <PreviewTileFallback className="min-h-64" /> }
);
const AvatarGroupEmptyExample = dynamic(
  () =>
    import("@/components/examples/avatar-group-empty-example").then(
      (module) => module.AvatarGroupEmptyExample
    ),
  { loading: () => <PreviewTileFallback className="min-h-24" /> }
);
const BadgeExample = dynamic(
  () =>
    import("@/components/examples/badge-example").then(
      (module) => module.BadgeExample
    ),
  { loading: () => <PreviewTileFallback className="min-h-24" /> }
);
const BookAppointmentExample = dynamic(
  () =>
    import("@/components/examples/book-appointment-example").then(
      (module) => module.BookAppointmentExample
    ),
  { loading: () => <PreviewTileFallback className="min-h-64" /> }
);
const ButtonExample = dynamic(
  () =>
    import("@/components/examples/button-example").then(
      (module) => module.ButtonExample
    ),
  { loading: () => <PreviewTileFallback className="min-h-24" /> }
);
const ChatCardExample = dynamic(
  () =>
    import("@/components/examples/chat-card-example").then(
      (module) => module.ChatCardExample
    ),
  { loading: () => <PreviewTileFallback className="min-h-64" /> }
);
const ColorPickerExample = dynamic(
  () =>
    import("@/components/examples/color-picker-example").then(
      (module) => module.ColorPickerExample
    ),
  { loading: () => <PreviewTileFallback className="min-h-48" /> }
);
const CommunitiesExample = dynamic(
  () =>
    import("@/components/examples/communities-example").then(
      (module) => module.CommunitiesExample
    ),
  { loading: () => <PreviewTileFallback className="min-h-48" /> }
);
const FieldSliderExample = dynamic(
  () =>
    import("@/components/examples/field-slider-example").then(
      (module) => module.FieldSliderExample
    ),
  { loading: () => <PreviewTileFallback className="min-h-32" /> }
);
const FileActionsExample = dynamic(
  () =>
    import("@/components/examples/file-actions-example").then(
      (module) => module.FileActionsExample
    ),
  { loading: () => <PreviewTileFallback className="min-h-32" /> }
);
const FileUploadExample = dynamic(
  () =>
    import("@/components/examples/file-upload-example").then(
      (module) => module.FileUploadExample
    ),
  { loading: () => <PreviewTileFallback className="min-h-48" /> }
);
const FocusTimerExample = dynamic(
  () =>
    import("@/components/examples/focus-timer-example").then(
      (module) => module.FocusTimerExample
    ),
  { loading: () => <PreviewTileFallback className="min-h-48" /> }
);
const FormControlsExample = dynamic(
  () =>
    import("@/components/examples/form-controls-example").then(
      (module) => module.FormControlsExample
    ),
  { loading: () => <PreviewTileFallback className="min-h-48" /> }
);
const InputOTPExample = dynamic(
  () =>
    import("@/components/examples/input-otp-example").then(
      (module) => module.InputOTPExample
    ),
  { loading: () => <PreviewTileFallback className="min-h-32" /> }
);
const ItemExample = dynamic(
  () =>
    import("@/components/examples/item-example").then(
      (module) => module.ItemExample
    ),
  { loading: () => <PreviewTileFallback className="min-h-48" /> }
);
const LoginFormExample = dynamic(
  () =>
    import("@/components/examples/login-form-example").then(
      (module) => module.LoginFormExample
    ),
  { loading: () => <PreviewTileFallback className="min-h-64" /> }
);
const QrConnectExample = dynamic(
  () =>
    import("@/components/examples/qr-connect-example").then(
      (module) => module.QrConnectExample
    ),
  { loading: () => <PreviewTileFallback className="min-h-48" /> }
);
const SleepReportExample = dynamic(
  () =>
    import("@/components/examples/sleep-report-example").then(
      (module) => module.SleepReportExample
    ),
  { loading: () => <PreviewTileFallback className="min-h-64" /> }
);
const SocialProfileExample = dynamic(
  () =>
    import("@/components/examples/social-profile-example").then(
      (module) => module.SocialProfileExample
    ),
  { loading: () => <PreviewTileFallback className="min-h-48" /> }
);
const StyleOverviewExample = dynamic(
  () =>
    import("@/components/examples/style-overview-example").then(
      (module) => module.StyleOverviewExample
    ),
  { loading: () => <PreviewTileFallback className="min-h-48" /> }
);
const TabsExample = dynamic(
  () =>
    import("@/components/examples/tabs-example").then(
      (module) => module.TabsExample
    ),
  { loading: () => <PreviewTileFallback className="min-h-32" /> }
);
const TeamMembersCardExample = dynamic(
  () =>
    import("@/components/examples/team-members-card-example").then(
      (module) => module.TeamMembersCardExample
    ),
  { loading: () => <PreviewTileFallback className="min-h-64" /> }
);
const TrafficDonutExample = dynamic(
  () =>
    import("@/components/examples/traffic-donut-example").then(
      (module) => module.TrafficDonutExample
    ),
  { loading: () => <PreviewTileFallback className="min-h-64" /> }
);
const UnsavedChangesExample = dynamic(
  () =>
    import("@/components/examples/unsaved-changes-example").then(
      (module) => module.UnsavedChangesExample
    ),
  { loading: () => <PreviewTileFallback className="min-h-32" /> }
);

export const PREVIEW_TILES: {
  column: "end" | "middle" | "start";
  key: string;
  node: React.ReactNode;
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

export const PreviewGallery = (props: React.ComponentProps<"div">) => {
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
