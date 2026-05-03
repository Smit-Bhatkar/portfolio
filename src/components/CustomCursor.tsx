"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const haloRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot = dotRef.current;
    const halo = haloRef.current;
    if (!dot || !halo) return;

    let mouseX = 0, mouseY = 0;
    let haloX = 0, haloY = 0;
    let rafId: number;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.left = `${mouseX}px`;
      dot.style.top = `${mouseY}px`;
    };

    const lerp = (start: number, end: number, t: number) =>
      start + (end - start) * t;

    const animate = () => {
      haloX = lerp(haloX, mouseX, 0.1);
      haloY = lerp(haloY, mouseY, 0.1);
      halo.style.left = `${haloX}px`;
      halo.style.top = `${haloY}px`;
      rafId = requestAnimationFrame(animate);
    };

    const onMouseEnterLink = () => {
      dot.style.transform = "translate(-50%, -50%) scale(2)";
      dot.style.background = "var(--cyan)";
      halo.style.width = "64px";
      halo.style.height = "64px";
      halo.style.borderColor = "rgba(0,245,255,0.5)";
    };

    const onMouseLeaveLink = () => {
      dot.style.transform = "translate(-50%, -50%) scale(1)";
      dot.style.background = "var(--violet)";
      halo.style.width = "40px";
      halo.style.height = "40px";
      halo.style.borderColor = "rgba(123,47,255,0.5)";
    };

    document.addEventListener("mousemove", onMouseMove);
    rafId = requestAnimationFrame(animate);

    const addHoverListeners = () => {
      document.querySelectorAll("a, button, [data-magnetic]").forEach((el) => {
        el.addEventListener("mouseenter", onMouseEnterLink);
        el.addEventListener("mouseleave", onMouseLeaveLink);
      });
    };

    addHoverListeners();
    const observer = new MutationObserver(addHoverListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(rafId);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div id="cursor-dot" ref={dotRef} />
      <div id="cursor-halo" ref={haloRef} />
    </>
  );
}
