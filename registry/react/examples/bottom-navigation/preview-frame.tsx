import type React from "react";

interface PreviewFrameProps extends React.PropsWithChildren {
  dir?: "ltr" | "rtl";
  scrollable?: boolean;
}

export const PreviewFrame = (props: PreviewFrameProps) => {
  const { dir, scrollable = true, children } = props;

  return (
    <div
      className="border-border bg-card relative h-[18rem] w-full max-w-[20rem] overflow-hidden rounded-xl border"
      dir={dir}
    >
      {scrollable ? (
        <div aria-hidden="true" className="absolute inset-0 overflow-y-auto">
          <div className="h-[200%]" />
        </div>
      ) : null}
      {children}
    </div>
  );
};
