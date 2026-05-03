"use client";

import ScrollReveal from "./ScrollReveal";
import CountUp from "./CountUp";

const orbitItems = ["⚛️", "🐍", "🧠", "🔧", "☁️", "🌐"];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="section-pad"
      style={{ position: "relative", overflow: "hidden" }}
    >
      {/* Blobs */}
      <div
        className="blob blob-violet"
        style={{ width: "500px", height: "500px", top: "0", right: "-200px", opacity: 0.2 }}
        aria-hidden="true"
      />

      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "80px",
          alignItems: "center",
        }}
        className="about-grid"
      >
        {/* LEFT — Avatar */}
        <ScrollReveal delay={0}>
          <div
            style={{
              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              minHeight: "320px",
            }}
          >
            {/* Orbit ring */}
            <div
              style={{
                position: "absolute",
                width: "280px",
                height: "280px",
                borderRadius: "50%",
                border: "1px dashed rgba(123,47,255,0.25)",
              }}
              aria-hidden="true"
            />

            {/* Hexagon avatar */}
            <div
              style={{
                width: "180px",
                height: "180px",
                background:
                  "linear-gradient(135deg, var(--violet) 0%, var(--cyan) 100%)",
                clipPath:
                  "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 0 60px rgba(123,47,255,0.4), 0 0 120px rgba(0,245,255,0.15)",
                position: "relative",
                zIndex: 2,
              }}
            >
              <span
                style={{
                  fontSize: "4rem",
                  userSelect: "none",
                  filter: "drop-shadow(0 0 8px rgba(255,255,255,0.5))",
                }}
              >
                🧑‍💻
              </span>
            </div>

            {/* Orbiting icons */}
            {orbitItems.map((icon, i) => (
              <div
                key={i}
                className="orbit-item"
                style={{
                  animationDelay: `${-(i * (8 / orbitItems.length))}s`,
                  animationDuration: `${8 + i * 1.2}s`,
                  fontSize: "1.25rem",
                }}
                aria-hidden="true"
              >
                {icon}
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* RIGHT — Text */}
        <div style={{ position: "relative", zIndex: 2 }}>
          <ScrollReveal delay={100}>
            <p className="section-label">// about_me</p>
          </ScrollReveal>

          <ScrollReveal delay={150}>
            <h2
              style={{
                fontSize: "clamp(2rem, 4vw, 2.75rem)",
                fontWeight: 700,
                marginBottom: "24px",
                lineHeight: 1.15,
              }}
            >
              Turning ideas into{" "}
              <span className="text-gradient-violet">intelligent products.</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <p
              style={{
                color: "var(--text-muted)",
                lineHeight: 1.8,
                marginBottom: "24px",
                fontSize: "0.975rem",
              }}
            >
              I&apos;m Smit — a developer and AI enthusiast from Vapi, Gujarat.
              I specialize in building full-stack web apps and AI-powered
              systems, from RAG chatbots to real-time computer vision pipelines.
              I interned as a MERN Stack Developer at{" "}
              <span style={{ color: "var(--text)" }}>Softnexis Technology</span>
              , where I shipped production-grade systems used in real inventory
              workflows. Currently exploring LLMs, MLOps, and TypeScript —
              always building.
            </p>
          </ScrollReveal>

          {/* Currently card */}
          <ScrollReveal delay={250}>
            <div
              className="glass-card"
              style={{
                padding: "20px 24px",
                marginBottom: "32px",
                background: "rgba(123,47,255,0.06)",
                borderColor: "rgba(123,47,255,0.2)",
              }}
            >
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "12px",
                  fontSize: "0.875rem",
                }}
              >
                {[
                  { icon: "📍", label: "GSFC University, Gujarat" },
                  { icon: "🔨", label: "Building: Smart Library Shelf App" },
                  { icon: "📖", label: "Learning: TypeScript, MLOps" },
                  { icon: "🏀", label: "Off-duty: Basketball + Anime" },
                ].map((item) => (
                  <div
                    key={item.label}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "8px",
                      color: "var(--text-muted)",
                    }}
                  >
                    <span>{item.icon}</span>
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Stat counters */}
          <ScrollReveal delay={300}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gap: "16px",
              }}
            >
              {[
                { value: 5, suffix: "+", label: "Projects Built" },
                { value: 5, suffix: "", label: "Certifications" },
                { value: 1, suffix: "", label: "Internship" },
                { value: 27, suffix: "", label: "Batch Grad" },
              ].map((stat, i) => (
                <div key={i} style={{ textAlign: "center" }}>
                  <div className="stat-number">
                    <CountUp target={stat.value} />
                    {stat.suffix}
                  </div>
                  <div
                    style={{ fontSize: "0.75rem", color: "var(--text-muted)", marginTop: "4px" }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
        }
      `}</style>
    </section>
  );
}
