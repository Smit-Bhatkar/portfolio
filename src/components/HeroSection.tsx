"use client";

import NeuralCanvas from "./NeuralCanvas";
import TypewriterLoop from "./TypewriterLoop";
import MagneticButton from "./MagneticButton";
import { ChevronDown } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      id="hero"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        background: "var(--bg)",
      }}
    >
      {/* Canvas Background */}
      <NeuralCanvas />

      {/* Noise overlay */}
      <div className="noise-overlay" aria-hidden="true" />

      {/* Ambient blobs */}
      <div
        className="blob blob-violet"
        style={{
          width: "600px",
          height: "600px",
          top: "-150px",
          left: "-200px",
          opacity: 0.5,
        }}
        aria-hidden="true"
      />
      <div
        className="blob blob-cyan"
        style={{
          width: "500px",
          height: "500px",
          bottom: "-100px",
          right: "-150px",
          opacity: 0.35,
        }}
        aria-hidden="true"
      />

      {/* Open to Internships badge */}
      <div
        style={{
          position: "absolute",
          top: "96px",
          right: "32px",
          display: "flex",
          alignItems: "center",
          gap: "8px",
          padding: "8px 16px",
          background: "rgba(13,13,31,0.85)",
          border: "1px solid rgba(34,197,94,0.3)",
          borderRadius: "999px",
          backdropFilter: "blur(12px)",
          zIndex: 10,
          fontSize: "0.82rem",
          fontFamily: "'JetBrains Mono', monospace",
          color: "#4ADE80",
        }}
      >
        <span
          className="pulse-green"
          style={{
            width: "8px",
            height: "8px",
            borderRadius: "50%",
            background: "#22C55E",
            display: "inline-block",
          }}
        />
        Open to Internships
      </div>

      {/* Hero Content */}
      <div
        style={{
          position: "relative",
          zIndex: 5,
          textAlign: "center",
          padding: "0 24px",
          maxWidth: "900px",
          width: "100%",
        }}
      >
        {/* Small greeting */}
        <p
          className="mono"
          style={{
            fontSize: "0.85rem",
            letterSpacing: "0.25em",
            color: "var(--text-muted)",
            marginBottom: "16px",
            textTransform: "uppercase",
          }}
        >
          Hi, I&apos;m
        </p>

        {/* Name */}
        <h1
          style={{
            fontSize: "clamp(56px, 10vw, 100px)",
            fontWeight: 700,
            letterSpacing: "-0.03em",
            lineHeight: 1.0,
            marginBottom: "24px",
            fontFamily: "'Space Grotesk', sans-serif",
          }}
        >
          <span
            style={{
              background:
                "linear-gradient(135deg, var(--violet) 0%, var(--cyan) 60%, #E8E8F0 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            S
          </span>
          <span>mit Bhatkar</span>
        </h1>

        {/* Typewriter subtitle */}
        <div
          style={{
            fontSize: "clamp(1.2rem, 3vw, 1.75rem)",
            fontWeight: 500,
            color: "var(--text-muted)",
            marginBottom: "24px",
            minHeight: "2.5rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px",
            flexWrap: "wrap",
          }}
        >
          <span>I build —</span>
          <TypewriterLoop />
        </div>

        {/* Bio */}
        <p
          style={{
            fontSize: "1rem",
            color: "var(--text-muted)",
            maxWidth: "520px",
            margin: "0 auto 40px",
            lineHeight: 1.7,
          }}
        >
          3rd year CSE (AI/ML) @ GSFC University.
          <br />I engineer intelligent systems and ship real products.
        </p>

        {/* CTAs */}
        <div
          style={{
            display: "flex",
            gap: "16px",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <MagneticButton as="a" href="#projects" className="btn-primary">
            View Projects ↓
          </MagneticButton>
          <MagneticButton
            as="a"
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost"
          >
            Download Resume ↗
          </MagneticButton>
        </div>
      </div>

      {/* Scroll down chevron */}
      <a
        href="#about"
        aria-label="Scroll to about section"
        style={{
          position: "absolute",
          bottom: "40px",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 10,
          color: "var(--text-muted)",
          cursor: "none",
        }}
        className="bounce-down"
      >
        <ChevronDown size={28} strokeWidth={1.5} />
      </a>
    </section>
  );
}
