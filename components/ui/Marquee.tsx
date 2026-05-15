"use client";

import { ComponentPropsWithoutRef } from "react";

interface MarqueeProps extends ComponentPropsWithoutRef<"div"> {
  reverse?: boolean;
  pauseOnHover?: boolean;
  vertical?: boolean;
  repeat?: number;
}

export function Marquee({
  className = "",
  reverse = false,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 4,
  style,
  ...props
}: MarqueeProps) {
  const trackClass = [
    "flex shrink-0 justify-around",
    vertical ? "flex-col animate-marquee-vertical" : "flex-row animate-marquee",
    pauseOnHover ? "group-hover:[animation-play-state:paused]" : "",
    reverse ? "[animation-direction:reverse]" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div
      {...props}
      style={
        {
          "--duration": "40s",
          "--gap": "0.75rem",
          gap: "var(--gap)",
          ...style,
        } as React.CSSProperties
      }
      className={[
        "group flex overflow-hidden p-2",
        vertical ? "flex-col" : "flex-row",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {Array.from({ length: repeat }, (_, i) => (
        <div
          key={i}
          style={{ gap: "var(--gap)" }}
          className={trackClass}
        >
          {children}
        </div>
      ))}
    </div>
  );
}
