"use client";

import ScrollReveal from "./ScrollReveal";

const certs = [
  {
    icon: "🏅",
    name: "AI Fundamentals with IBM SkillsBuild",
    issuer: "Cisco NetAcad",
  },
  {
    icon: "🌐",
    name: "Networking Basics",
    issuer: "Cisco Networking Academy",
  },
  {
    icon: "🐍",
    name: "Python Essentials 2",
    issuer: "Cisco Networking Academy",
  },
  {
    icon: "☁️",
    name: "Azure AI Fundamentals (AI-900)",
    issuer: "Microsoft",
  },
  {
    icon: "🤝",
    name: "Responsible & Safe AI Systems",
    issuer: "NPTEL",
  },
];

// Duplicate for seamless loop
const allCerts = [...certs, ...certs];

export default function CertificationsSection() {
  return (
    <section
      id="certifications"
      className="section-pad"
      style={{
        position: "relative",
        overflow: "hidden",
        background: "rgba(123,47,255,0.03)",
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <ScrollReveal>
          <p className="section-label">// certifications</p>
        </ScrollReveal>
        <ScrollReveal delay={80}>
          <h2
            style={{
              fontSize: "clamp(2rem, 4vw, 2.75rem)",
              fontWeight: 700,
              marginBottom: "48px",
            }}
          >
            Verified{" "}
            <span className="text-gradient-violet">Credentials</span>
          </h2>
        </ScrollReveal>
      </div>

      {/* Infinite marquee */}
      <div
        style={{
          overflow: "hidden",
          mask: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          WebkitMask: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          paddingBottom: "8px",
        }}
      >
        <div className="marquee-track" role="list" aria-label="Certifications">
          {allCerts.map((cert, i) => (
            <div
              key={`${cert.name}-${i}`}
              className="cert-badge"
              role="listitem"
            >
              <span style={{ fontSize: "1.4rem" }} aria-hidden="true">
                {cert.icon}
              </span>
              <div>
                <div
                  style={{
                    fontWeight: 600,
                    fontSize: "0.875rem",
                    color: "var(--text)",
                    marginBottom: "2px",
                  }}
                >
                  {cert.name}
                </div>
                <div
                  style={{
                    fontSize: "0.75rem",
                    color: "var(--text-muted)",
                    fontFamily: "'JetBrains Mono', monospace",
                  }}
                >
                  {cert.issuer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
