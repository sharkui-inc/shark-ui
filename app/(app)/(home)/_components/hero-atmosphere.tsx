import { cn } from "@/lib/utils";

const RIPPLE_RINGS = [36, 52, 68, 84, 100] as const;

export const HeroAtmosphere = () => (
  <div
    aria-hidden="true"
    className="pointer-events-none absolute end-[-6%] top-[16rem] size-0 sm:top-[18rem] lg:top-[20rem]"
  >
    {RIPPLE_RINGS.map((size, index) => (
      <div
        className={cn(
          "absolute start-1/2 top-1/2 rounded-full",
          "-translate-x-1/2 -translate-y-1/2",
          "border [border-color:color-mix(in_oklch,color-mix(in_oklch,var(--primary)_82%,var(--foreground))_42%,transparent)]",
          "dark:[border-color:color-mix(in_oklch,var(--primary)_40%,transparent)]",
          "animate-[pulse_8s_ease-in-out_infinite]",
          "motion-reduce:animate-none!"
        )}
        key={size}
        style={{
          animationDelay: `${index * 0.7}s`,
          height: `${size}rem`,
          width: `${size}rem`,
        }}
      />
    ))}
  </div>
);
