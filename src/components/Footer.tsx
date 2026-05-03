export default function Footer() {
  return (
    <footer
      style={{
        textAlign: "center",
        padding: "32px 24px",
        borderTop: "1px solid rgba(123,47,255,0.15)",
        background: "linear-gradient(to top, rgba(123,47,255,0.04), transparent)",
        position: "relative",
      }}
    >
      {/* Top glow */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "200px",
          height: "1px",
          background: "linear-gradient(to right, transparent, var(--violet), transparent)",
        }}
        aria-hidden="true"
      />

      <p
        style={{
          fontSize: "0.82rem",
          color: "var(--text-muted)",
          fontFamily: "'JetBrains Mono', monospace",
          letterSpacing: "0.03em",
        }}
      >
        Designed &amp; built by{" "}
        <span
          style={{
            background: "linear-gradient(135deg, var(--violet), var(--cyan))",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            fontWeight: 600,
          }}
        >
          Smit Bhatkar
        </span>{" "}
        • 2026
      </p>
    </footer>
  );
}
