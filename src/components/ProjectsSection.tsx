"use client";

import ScrollReveal from "./ScrollReveal";
import MagneticButton from "./MagneticButton";
import { GitFork, ExternalLink } from "lucide-react";

const projects = [
  {
    id: "smart-library",
    icon: "🔖",
    title: "Smart Library Shelf Management",
    description:
      "An AI-powered web app that identifies books from camera/gallery images and maps them to their correct library shelf — built as a minor academic project.",
    longDesc:
      "Uses OCR and image recognition to scan book spines, extract metadata, and cross-reference against a Supabase database to flag misplaced books in real time.",
    stack: ["JavaScript", "React.js", "Tailwind CSS", "Supabase"],
    status: "dev",
    statusLabel: "🔄 In Development",
    gradient: "linear-gradient(135deg, #7B2FFF, #4F46E5)",
    github: "https://github.com/Smit-Bhatkar",
    live: null,
  },
  {
    id: "sign-language",
    icon: "🤟",
    title: "Sign Language to Speech Translator",
    description:
      "A real-time gesture recognition pipeline that translates sign language to speech using a custom-trained LSTM network with 95% accuracy.",
    longDesc:
      "Built end-to-end: MediaPipe for hand landmark extraction → LSTM for gesture classification → pyttsx3 for text-to-speech synthesis. Research paper currently in progress.",
    stack: ["Python", "TensorFlow/Keras", "OpenCV", "MediaPipe", "pyttsx3"],
    status: "research",
    statusLabel: "📄 Research Paper In Progress",
    gradient: "linear-gradient(135deg, #00F5FF, #0891B2)",
    github: "https://github.com/Smit-Bhatkar",
    live: null,
  },
  {
    id: "rag-chatbot",
    icon: "🤖",
    title: "AI-Powered PDF RAG Chatbot",
    description:
      "Upload any PDF and chat with it. Powered by Llama-3 70B via Groq API, HuggingFace embeddings, and ChromaDB — deployed live on Vercel.",
    longDesc:
      "Full RAG pipeline: PDF parsing → chunking → BM25 retrieval → Groq LLM inference. FastAPI backend, static HTML/JS frontend, fully serverless on Vercel.",
    stack: ["Python", "LangChain", "ChromaDB", "Groq API", "HuggingFace"],
    status: "live",
    statusLabel: "✅ Live on Vercel",
    gradient: "linear-gradient(135deg, #7B2FFF, #EC4899)",
    github: "https://github.com/Smit-Bhatkar",
    live: "https://pdf-rag-chatbot-9f2b6yn85-smit-s-projects-3891de47.vercel.app",
  },
  {
    id: "event-management",
    icon: "🎓",
    title: "College Event Management System",
    description:
      "Full-stack platform with auth, event registration (solo/team), pass purchase & verification, and admin notifications.",
    longDesc:
      "JWT-secured authentication, role-based access control for admins, real-time event registration with capacity management, and email notification hooks.",
    stack: ["React.js", "Node.js", "Express.js", "MongoDB"],
    status: "live",
    statusLabel: "✅ Completed",
    gradient: "linear-gradient(135deg, #F97316, #DC2626)",
    github: "https://github.com/Smit-Bhatkar",
    live: null,
  },
];

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="section-pad"
      style={{ position: "relative", overflow: "hidden" }}
    >
      {/* Blobs */}
      <div
        className="blob blob-violet"
        style={{ width: "500px", height: "500px", top: "100px", right: "-200px", opacity: 0.15 }}
        aria-hidden="true"
      />
      <div
        className="blob blob-cyan"
        style={{ width: "400px", height: "400px", bottom: "0", left: "-150px", opacity: 0.1 }}
        aria-hidden="true"
      />

      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Header */}
        <ScrollReveal>
          <p className="section-label">// projects</p>
        </ScrollReveal>
        <ScrollReveal delay={80}>
          <h2
            style={{
              fontSize: "clamp(2rem, 4vw, 2.75rem)",
              fontWeight: 700,
              marginBottom: "64px",
            }}
          >
            Things I&apos;ve{" "}
            <span className="text-gradient-violet">Built</span>
          </h2>
        </ScrollReveal>

        {/* Project Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "24px",
          }}
          className="projects-grid"
        >
          {projects.map((project, i) => (
            <ScrollReveal key={project.id} delay={i * 100}>
              <ProjectCard project={project} />
            </ScrollReveal>
          ))}
        </div>

        {/* View all CTA */}
        <ScrollReveal delay={300}>
          <div style={{ textAlign: "center", marginTop: "56px" }}>
            <MagneticButton
              as="a"
              href="https://github.com/Smit-Bhatkar"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
              style={{ display: "inline-flex" }}
            >
              <GitFork size={16} />
              View all on GitHub →
            </MagneticButton>
          </div>
        </ScrollReveal>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .projects-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}

function ProjectCard({ project }: { project: (typeof projects)[0] }) {
  return (
    <article
      className="glass-card"
      style={{
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        position: "relative",
      }}
    >
      {/* Gradient top bar */}
      <div
        className="proj-thumb"
        style={{ background: project.gradient }}
        aria-hidden="true"
      />

      <div style={{ padding: "28px", flex: 1, display: "flex", flexDirection: "column" }}>
        {/* Header row */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            gap: "16px",
            marginBottom: "12px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <div
              style={{
                width: "44px",
                height: "44px",
                borderRadius: "12px",
                background: project.gradient,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "1.4rem",
                flexShrink: 0,
                opacity: 0.9,
              }}
              aria-hidden="true"
            >
              {project.icon}
            </div>
            <h3
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 700,
                fontSize: "1.05rem",
                lineHeight: 1.25,
                color: "var(--text)",
              }}
            >
              {project.title}
            </h3>
          </div>

          {/* Status badge */}
          <span
            className={`status-badge ${
              project.status === "dev"
                ? "status-dev"
                : project.status === "research"
                ? "status-research"
                : "status-live"
            }`}
            style={{ flexShrink: 0 }}
          >
            {project.statusLabel}
          </span>
        </div>

        {/* Description */}
        <p
          style={{
            color: "var(--text-muted)",
            fontSize: "0.875rem",
            lineHeight: 1.7,
            marginBottom: "20px",
            flex: 1,
          }}
        >
          {project.description}
        </p>

        {/* Stack pills */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "6px",
            marginBottom: "20px",
          }}
        >
          {project.stack.map((tech) => (
            <span key={tech} className="skill-pill">
              {tech}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="proj-icon-btn"
          >
            <GitFork size={14} />
            GitHub ↗
          </a>
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="proj-icon-btn"
              style={{ borderColor: "rgba(0,245,255,0.3)", color: "var(--cyan)" }}
            >
              <ExternalLink size={14} />
              Live Demo ↗
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
