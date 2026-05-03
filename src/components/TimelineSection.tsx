"use client";

import ScrollReveal from "./ScrollReveal";

const timelineItems = [
  {
    type: "work",
    icon: "🟣",
    period: "Dec 2024 – Jan 2025",
    title: "MERN Stack Developer Intern",
    org: "Softnexis Technology",
    points: [
      "Built a Product Management System (MongoDB, Express, React, Node.js) with full CRUD + inventory management.",
      "Improved data load performance by 50% via server-side pagination and Redux Toolkit state optimization.",
      "Secured APIs with JWT + Bcrypt; integrated Cloudinary + Multer for scalable file uploads.",
    ],
    side: "left",
  },
  {
    type: "education",
    icon: "🎓",
    period: "2023 – 2027",
    title: "B.Tech in Computer Science & Engineering",
    org: "GSFC University, Gujarat",
    points: [
      "Specialization: AI/ML & Data Science",
      "3rd Year — Batch 2023–2027",
    ],
    side: "right",
  },
];

export default function TimelineSection() {
  return (
    <section
      id="timeline"
      className="section-pad"
      style={{ position: "relative", overflow: "hidden" }}
    >
      {/* Ambient */}
      <div
        className="blob blob-violet"
        style={{ width: "500px", height: "500px", top: "50%", left: "-200px", opacity: 0.15 }}
        aria-hidden="true"
      />

      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        {/* Header */}
        <ScrollReveal>
          <p className="section-label">// timeline</p>
        </ScrollReveal>
        <ScrollReveal delay={80}>
          <h2
            style={{
              fontSize: "clamp(2rem, 4vw, 2.75rem)",
              fontWeight: 700,
              marginBottom: "80px",
            }}
          >
            My{" "}
            <span className="text-gradient-violet">Journey</span>
          </h2>
        </ScrollReveal>

        {/* Timeline */}
        <div style={{ position: "relative" }}>
          {/* Center line */}
          <div className="timeline-line" aria-hidden="true" />

          <div style={{ display: "flex", flexDirection: "column", gap: "64px" }}>
            {timelineItems.map((item, i) => (
              <ScrollReveal key={i} delay={i * 150}>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr auto 1fr",
                    gap: "32px",
                    alignItems: "flex-start",
                  }}
                  className="timeline-row"
                >
                  {/* Left side content */}
                  {item.side === "left" ? (
                    <div style={{ textAlign: "right", paddingRight: "16px" }}>
                      <TimelineCard item={item} />
                    </div>
                  ) : (
                    <div />
                  )}

                  {/* Center dot */}
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      paddingTop: "20px",
                    }}
                  >
                    <div className="timeline-dot" aria-hidden="true" />
                  </div>

                  {/* Right side content */}
                  {item.side === "right" ? (
                    <div style={{ paddingLeft: "16px" }}>
                      <TimelineCard item={item} />
                    </div>
                  ) : (
                    <div />
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .timeline-row {
            grid-template-columns: auto 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}

function TimelineCard({ item }: { item: (typeof timelineItems)[0] }) {
  return (
    <div
      className="glass-card"
      style={{
        padding: "24px 28px",
        borderColor: item.type === "work"
          ? "rgba(123,47,255,0.25)"
          : "rgba(0,245,255,0.2)",
        textAlign: "left",
      }}
    >
      <p
        className="mono"
        style={{
          fontSize: "0.78rem",
          color: item.type === "work" ? "var(--violet)" : "var(--cyan)",
          marginBottom: "8px",
          letterSpacing: "0.04em",
        }}
      >
        {item.period}
      </p>
      <h3
        style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontWeight: 700,
          fontSize: "1.05rem",
          marginBottom: "4px",
          color: "var(--text)",
        }}
      >
        {item.title}
      </h3>
      <p
        style={{
          fontSize: "0.875rem",
          color: "var(--text-muted)",
          marginBottom: "16px",
        }}
      >
        {item.org}
      </p>
      <ul style={{ padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: "8px" }}>
        {item.points.map((pt, i) => (
          <li
            key={i}
            style={{
              fontSize: "0.85rem",
              color: "var(--text-muted)",
              lineHeight: 1.6,
              display: "flex",
              alignItems: "flex-start",
              gap: "8px",
            }}
          >
            <span
              style={{
                color: item.type === "work" ? "var(--violet)" : "var(--cyan)",
                flexShrink: 0,
                marginTop: "2px",
              }}
            >
              →
            </span>
            {pt}
          </li>
        ))}
      </ul>
    </div>
  );
}
