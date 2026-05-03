"use client";

import { useState, useEffect, useRef } from "react";

let showToastGlobal: (msg: string) => void = () => {};

export function showToast(msg: string) {
  showToastGlobal(msg);
}

export default function Toast() {
  const [message, setMessage] = useState("");
  const [visible, setVisible] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    showToastGlobal = (msg: string) => {
      setMessage(msg);
      setVisible(true);
      if (timerRef.current) clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => setVisible(false), 2800);
    };
  }, []);

  return (
    <div className={`toast ${visible ? "show" : ""}`} role="status" aria-live="polite">
      <span style={{ fontSize: "1.1rem" }}>✓</span>
      {message}
    </div>
  );
}
