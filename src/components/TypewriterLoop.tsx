"use client";

import { useEffect, useRef, useState } from "react";

const ROLES = [
  "Full Stack Developer",
  "AI/ML Engineer",
  "Computer Vision Enthusiast",
  "RAG Systems Builder",
  "Open Source Contributor",
];

export default function TypewriterLoop() {
  const [displayText, setDisplayText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const current = ROLES[roleIndex];
    const speed = isDeleting ? 40 : 80;

    timeoutRef.current = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(current.slice(0, displayText.length + 1));
        if (displayText.length + 1 === current.length) {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        setDisplayText(current.slice(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % ROLES.length);
        }
      }
    }, speed);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [displayText, isDeleting, roleIndex]);

  return (
    <span
      style={{
        color: "var(--cyan)",
        fontFamily: "'Space Grotesk', sans-serif",
        fontWeight: 600,
      }}
    >
      {displayText}
      <span className="caret" style={{ color: "var(--violet)" }}>
        |
      </span>
    </span>
  );
}
