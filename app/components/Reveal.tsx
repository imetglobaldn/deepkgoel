"use client";

import { useEffect, useRef } from "react";

type Props = {
  as?: keyof React.JSX.IntrinsicElements;
  delay?: number;
  blur?: boolean;
  className?: string;
  children: React.ReactNode;
};

export default function Reveal({
  as: Tag = "div",
  delay = 0,
  blur = false,
  className = "",
  children,
}: Props) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -10% 0px" }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  const classes = `reveal${blur ? " reveal-blur" : ""}${className ? " " + className : ""}`;
  const style = { ["--reveal-delay" as string]: `${delay}ms` } as React.CSSProperties;

  // @ts-expect-error dynamic tag
  return <Tag ref={ref} className={classes} style={style}>{children}</Tag>;
}
