import type React from "react";

interface PreviewFrameProps extends React.PropsWithChildren {
  dir?: "ltr" | "rtl";
  scrollable?: boolean;
}

export const PreviewFrame = (props: PreviewFrameProps) => {
  const { children, dir, scrollable = true } = props;

  return (
    <div
      className="relative h-[18rem] w-full max-w-[20rem] overflow-hidden rounded-xl border border-border bg-card"
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
