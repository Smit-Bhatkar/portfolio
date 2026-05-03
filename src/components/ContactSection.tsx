"use client";

import { useState, FormEvent } from "react";
import ScrollReveal from "./ScrollReveal";
import MagneticButton from "./MagneticButton";
import { showToast } from "./Toast";
import { GitFork, Globe, CheckCircle2 } from "lucide-react";

const EMAIL = "bhatkarsmit@gmail.com";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(EMAIL).then(() => showToast("Email copied! ✓"));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      setSubmitted(true);
      setForm({ name: "", email: "", message: "" });
    }, 1200);
  };

  const socials = [
    {
      label: "GitHub",
      icon: <GitFork size={20} />,
      href: "https://github.com/Smit-Bhatkar",
      tooltip: "@Smit-Bhatkar",
    },
    {
      label: "LinkedIn",
      icon: <Globe size={20} />,
      href: "https://www.linkedin.com/in/smit-bhatkar-629387294/",
      tooltip: "smit-bhatkar",
    },
    {
      label: "Portfolio",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      ),
      href: "#hero",
      tooltip: "You're here!",
    },
  ];

  return (
    <section
      id="contact"
      className="section-pad"
      style={{ position: "relative", overflow: "hidden" }}
    >
      {/* Blobs */}
      <div
        className="blob blob-violet"
        style={{ width: "600px", height: "600px", top: "-100px", left: "50%", transform: "translateX(-50%)", opacity: 0.15 }}
        aria-hidden="true"
      />
      <div
        className="blob blob-cyan"
        style={{ width: "400px", height: "400px", bottom: "-100px", right: "-100px", opacity: 0.1 }}
        aria-hidden="true"
      />

      <div style={{ maxWidth: "760px", margin: "0 auto", textAlign: "center" }}>
        <ScrollReveal>
          <p className="section-label">// contact</p>
        </ScrollReveal>

        <ScrollReveal delay={80}>
          <h2
            style={{
              fontSize: "clamp(2.5rem, 6vw, 4rem)",
              fontWeight: 700,
              marginBottom: "16px",
            }}
          >
            Let&apos;s Build{" "}
            <span className="text-gradient-violet">Something.</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={140}>
          <p
            style={{
              color: "var(--text-muted)",
              fontSize: "1rem",
              lineHeight: 1.7,
              maxWidth: "520px",
              margin: "0 auto 40px",
            }}
          >
            I&apos;m actively looking for internships and collaboration
            opportunities. My inbox is always open.
          </p>
        </ScrollReveal>

        {/* Email link */}
        <ScrollReveal delay={180}>
          <button
            onClick={copyEmail}
            aria-label="Copy email address"
            style={{
              background: "transparent",
              border: "none",
              cursor: "none",
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "clamp(1.1rem, 3vw, 1.6rem)",
              fontWeight: 700,
              color: "var(--cyan)",
              letterSpacing: "-0.01em",
              padding: "8px 0",
              marginBottom: "40px",
              display: "inline-flex",
              alignItems: "center",
              gap: "12px",
              borderBottom: "2px solid rgba(0,245,255,0.3)",
              transition: "border-color 0.3s, text-shadow 0.3s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.textShadow = "0 0 20px rgba(0,245,255,0.5)";
              (e.currentTarget as HTMLButtonElement).style.borderColor = "var(--cyan)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.textShadow = "none";
              (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(0,245,255,0.3)";
            }}
          >
            {EMAIL}
            <span style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>
              ⎘
            </span>
          </button>
        </ScrollReveal>

        {/* Social icons */}
        <ScrollReveal delay={220}>
          <div
            style={{
              display: "flex",
              gap: "16px",
              justifyContent: "center",
              marginBottom: "56px",
            }}
          >
            {socials.map((s) => (
              <div key={s.label} style={{ position: "relative" }}>
                <a
                  href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="social-btn"
                  aria-label={s.label}
                  title={s.tooltip}
                >
                  {s.icon}
                </a>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Contact Form */}
        <ScrollReveal delay={260}>
          <div
            className="glass-card"
            style={{ padding: "40px", textAlign: "left" }}
          >
            {submitted ? (
              <div
                style={{
                  textAlign: "center",
                  padding: "32px 0",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "16px",
                }}
              >
                <CheckCircle2
                  size={56}
                  color="var(--cyan)"
                  style={{ filter: "drop-shadow(0 0 16px rgba(0,245,255,0.5))" }}
                />
                <h3
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontWeight: 700,
                    fontSize: "1.4rem",
                  }}
                >
                  Message Sent!
                </h3>
                <p style={{ color: "var(--text-muted)" }}>
                  Thanks for reaching out. I&apos;ll get back to you soon.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="btn-ghost"
                  style={{ cursor: "none", marginTop: "8px" }}
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "16px",
                    marginBottom: "16px",
                  }}
                  className="form-row"
                >
                  <div>
                    <label
                      htmlFor="contact-name"
                      style={{
                        display: "block",
                        fontSize: "0.8rem",
                        color: "var(--text-muted)",
                        marginBottom: "8px",
                        fontFamily: "'JetBrains Mono', monospace",
                      }}
                    >
                      Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      className="form-input"
                      placeholder="Your name"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="contact-email"
                      style={{
                        display: "block",
                        fontSize: "0.8rem",
                        color: "var(--text-muted)",
                        marginBottom: "8px",
                        fontFamily: "'JetBrains Mono', monospace",
                      }}
                    >
                      Email
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      className="form-input"
                      placeholder="your@email.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                    />
                  </div>
                </div>

                <div style={{ marginBottom: "24px" }}>
                  <label
                    htmlFor="contact-message"
                    style={{
                      display: "block",
                      fontSize: "0.8rem",
                      color: "var(--text-muted)",
                      marginBottom: "8px",
                      fontFamily: "'JetBrains Mono', monospace",
                    }}
                  >
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={5}
                    className="form-input"
                    placeholder="Tell me about your project or opportunity..."
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                    style={{ resize: "vertical", minHeight: "120px" }}
                  />
                </div>

                <MagneticButton
                  as="button"
                  className="btn-primary"
                  style={{ width: "100%", justifyContent: "center", opacity: sending ? 0.7 : 1 }}
                >
                  {sending ? "Sending..." : "Send Message →"}
                </MagneticButton>
              </form>
            )}
          </div>
        </ScrollReveal>
      </div>

      <style>{`
        @media (max-width: 540px) {
          .form-row {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
