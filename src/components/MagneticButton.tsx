"use client";

import { useEffect, useRef } from "react";

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
  target?: string;
  rel?: string;
  style?: React.CSSProperties;
  as?: "a" | "button";
  download?: boolean;
}

export default function MagneticButton({
  children,
  className = "",
  onClick,
  href,
  target,
  rel,
  style,
  as = "button",
  download,
}: MagneticButtonProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const RADIUS = 80;

    const onMouseMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < RADIUS) {
        const strength = (RADIUS - dist) / RADIUS;
        el.style.transform = `translate(${dx * strength * 0.35}px, ${dy * strength * 0.35}px)`;
      } else {
        el.style.transform = "";
      }
    };

    const onMouseLeave = () => {
      el.style.transition = "transform 0.4s cubic-bezier(0.34,1.56,0.64,1)";
      el.style.transform = "";
      setTimeout(() => { el.style.transition = ""; }, 400);
    };

    window.addEventListener("mousemove", onMouseMove);
    el.addEventListener("mouseleave", onMouseLeave);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      el.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  const props = {
    ref: ref as React.RefObject<HTMLElement>,
    className,
    onClick,
    style: { transition: "transform 0.15s ease, box-shadow 0.3s", ...style },
    "data-magnetic": "true",
  };

  if (as === "a") {
    return (
      <a
        {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
        ref={ref as React.RefObject<HTMLAnchorElement>}
        href={href}
        target={target}
        rel={rel}
        download={download}
      >
        {children}
      </a>
    );
  }

  return (
    <button {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)} ref={ref as React.RefObject<HTMLButtonElement>}>
      {children}
    </button>
  );
}
