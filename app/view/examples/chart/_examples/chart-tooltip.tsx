import type { CSSProperties } from "react";
import { cn } from "@/lib/utils";

const ChartTooltipDemo = () => (
  <div className="grid aspect-video w-full max-w-md justify-center text-foreground md:grid-cols-2 [&>div]:relative [&>div]:flex [&>div]:h-[137px] [&>div]:w-[224px] [&>div]:items-center [&>div]:justify-center [&>div]:p-4">
    <div>
      <div className="absolute top-[45px] left-[-35px] z-10 font-medium text-sm">
        Label
      </div>
      <svg
        aria-hidden="true"
        className="absolute top-[50px] left-[5px] z-10"
        fill="none"
        height="12"
        viewBox="0 0 193 40"
        width="50"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#a)">
          <path
            d="M173.928 21.13C115.811 44.938 58.751 45.773 0 26.141c4.227-4.386 7.82-2.715 10.567-1.88 21.133 5.64 42.9 6.266 64.457 7.101 31.066 1.253 60.441-5.848 89.183-17.335 1.268-.418 2.325-1.253 4.861-2.924-14.582-2.924-29.165 2.089-41.845-3.76.212-.835.212-1.879.423-2.714 9.51-.627 19.231-1.253 28.742-2.089 9.51-.835 18.808-1.88 28.318-2.506 6.974-.418 9.933 2.924 7.397 9.19-3.17 8.145-7.608 15.664-11.623 23.391-.423.836-1.057 1.88-1.902 2.298-2.325.835-4.65 1.044-7.186 1.67-.422-2.088-1.479-4.386-1.268-6.265.423-2.506 1.902-4.595 3.804-9.19Z"
            fill="currentColor"
          />
        </g>
        <defs>
          <clipPath id="a">
            <path d="M0 0h193v40H0z" fill="currentColor" />
          </clipPath>
        </defs>
      </svg>
      <TooltipDemo
        className="w-[8rem]"
        label="Page Views"
        payload={[
          { fill: "var(--chart-1)", name: "Desktop", value: 186 },
          { fill: "var(--chart-2)", name: "Mobile", value: 80 },
        ]}
      />
    </div>
    <div className="items-end">
      <div className="absolute top-[0px] left-[122px] z-10 font-medium text-sm">
        Name
      </div>
      <svg
        aria-hidden="true"
        className="absolute top-[10px] left-[85px] z-10 -scale-x-100"
        fill="none"
        height="42"
        viewBox="0 0 122 148"
        width="35"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#ab)">
          <path
            d="M0 2.65c6.15-4.024 12.299-2.753 17.812-.847a115.56 115.56 0 0 1 21.84 10.59C70.4 32.727 88.849 61.744 96.483 97.54c1.908 9.108 2.544 18.639 3.817 29.017 8.481-4.871 12.934-14.402 21.416-19.909 1.061 4.236-1.06 6.989-2.756 9.319-6.998 9.531-14.207 19.062-21.63 28.382-3.604 4.448-6.36 4.871-10.177 1.059-8.058-7.837-12.935-17.368-14.42-28.382 0-.424.636-1.059 1.485-2.118 9.118 2.33 6.997 13.979 14.843 18.215 3.393-14.614.848-28.593-2.969-42.149-4.029-14.19-9.33-27.746-17.812-39.82-8.27-11.86-18.66-21.392-30.11-30.287C26.93 11.758 14.207 6.039 0 2.65Z"
            fill="currentColor"
          />
        </g>
        <defs>
          <clipPath id="ab">
            <path d="M0 0h122v148H0z" fill="currentColor" />
          </clipPath>
        </defs>
      </svg>
      <TooltipDemo
        className="w-[8rem]"
        hideLabel
        indicator="dashed"
        label="Browser"
        payload={[
          { fill: "var(--chart-3)", name: "Chrome", value: 1286 },
          { fill: "var(--chart-4)", name: "Firefox", value: 1000 },
        ]}
      />
    </div>
    <div className="hidden! md:flex!">
      <TooltipDemo
        className="w-[9rem]"
        indicator="line"
        label="Page Views"
        payload={[{ fill: "var(--chart-3)", name: "Desktop", value: 12_486 }]}
      />
    </div>
    <div className="items-start! justify-start!">
      <div className="absolute top-[60px] left-[50px] z-10 font-medium text-sm">
        Indicator
      </div>
      <TooltipDemo
        className="w-[8rem]"
        hideLabel
        indicator="dot"
        label="Browser"
        payload={[{ fill: "var(--chart-1)", name: "Chrome", value: 1286 }]}
      />
      <svg
        aria-hidden="true"
        className="absolute top-[38px] left-[30px] z-10 rotate-[-40deg]"
        fill="none"
        height="34"
        viewBox="0 0 75 175"
        width="15"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#abc)">
          <path
            d="M20.187 175c-4.439-2.109-7.186-2.531-8.032-4.008-3.17-5.484-6.763-10.968-8.454-17.084-5.073-16.242-4.439-32.694-1.057-49.146 5.707-28.053 18.388-52.942 34.24-76.565 1.692-2.531 3.171-5.063 4.862-7.805 0-.21-.211-.632-.634-1.265-4.65 1.265-9.511 2.53-14.161 3.585-2.537.422-5.496.422-8.032-.421-1.48-.422-3.593-2.742-3.593-4.219 0-1.898 1.48-4.218 2.747-5.906 1.057-1.054 2.96-1.265 4.65-1.687C35.406 7.315 48.088 3.729 60.98.776c10.99-2.53 14.584 1.055 13.95 11.812-.634 11.18-.846 22.358-1.268 33.326-.212 3.375-.846 6.96-1.268 10.757-8.878-4.007-8.878-4.007-12.048-38.177C47.03 33.259 38.153 49.289 29.91 65.741 21.667 82.193 16.17 99.49 13.212 117.84c-2.959 18.984.634 36.912 6.975 57.161Z"
            fill="currentColor"
          />
        </g>
        <defs>
          <clipPath id="abc">
            <path d="M0 0h75v175H0z" fill="currentColor" />
          </clipPath>
        </defs>
      </svg>
    </div>
  </div>
);

const TooltipDemo = ({
  className,
  hideLabel,
  indicator = "dot",
  label,
  payload,
  hideIndicator,
}: {
  className?: string;
  hideIndicator?: boolean;
  hideLabel?: boolean;
  indicator?: "dashed" | "dot" | "line";
  label: string;
  payload: {
    fill: string;
    name: string;
    value: number;
  }[];
}) => {
  if (!payload.length) {
    return null;
  }

  const nestLabel = payload.length === 1 && indicator !== "dot";

  return (
    <div
      className={cn(
        "grid min-w-[8rem] items-start gap-1.5 rounded-lg border border-border/50 bg-background px-2.5 py-1.5 text-xs shadow-xl transition-all ease-in-out hover:-translate-y-0.5",
        className
      )}
    >
      {nestLabel || hideLabel ? null : (
        <div className="font-medium">{label}</div>
      )}
      <div className="grid gap-1.5">
        {payload.map((item) => {
          const indicatorColor = item.fill;

          return (
            <div
              className={cn(
                "flex w-full items-stretch gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5 [&>svg]:text-muted-foreground",
                indicator === "dot" && "items-center"
              )}
              key={item.name}
            >
              {!hideIndicator && (
                <div
                  className={cn(
                    "shrink-0 rounded-[2px] border-(--color-border) bg-(--color-bg)",
                    {
                      "h-2.5 w-2.5": indicator === "dot",
                      "my-0.5": nestLabel && indicator === "dashed",
                      "w-0 border-[1.5px] border-dashed bg-transparent":
                        indicator === "dashed",
                      "w-1": indicator === "line",
                    }
                  )}
                  style={
                    {
                      "--color-bg": indicatorColor,
                      "--color-border": indicatorColor,
                    } as CSSProperties
                  }
                />
              )}
              <div
                className={cn(
                  "flex flex-1 justify-between leading-none",
                  nestLabel ? "items-end" : "items-center"
                )}
              >
                <div className="grid gap-1.5">
                  {nestLabel && !hideLabel ? (
                    <div className="font-medium">{label}</div>
                  ) : null}
                  <span className="text-muted-foreground">{item.name}</span>
                </div>
                <span className="font-medium font-mono text-foreground tabular-nums">
                  {item.value.toLocaleString()}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ChartTooltipDemo;
