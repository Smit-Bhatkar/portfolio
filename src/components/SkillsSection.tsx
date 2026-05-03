"use client";

import ScrollReveal from "./ScrollReveal";

const skillCategories = [
  {
    icon: "🌐",
    title: "Web & Full Stack",
    color: "var(--violet)",
    skills: [
      "React.js", "Redux Toolkit", "Node.js", "Express.js",
      "MongoDB", "Mongoose", "REST APIs", "JWT Auth",
      "HTML5", "CSS3", "JavaScript (ES6+)",
      "Responsive Design", "Tailwind CSS",
    ],
  },
  {
    icon: "🧠",
    title: "AI / ML / Data",
    color: "var(--cyan)",
    skills: [
      "Python", "LangChain", "RAG Architecture",
      "TensorFlow/Keras", "OpenCV", "MediaPipe",
      "ChromaDB", "HuggingFace Embeddings",
      "LSTM Networks", "Computer Vision", "NLP",
    ],
  },
  {
    icon: "🔧",
    title: "Tools & Cloud",
    color: "#A855F7",
    skills: [
      "Git", "GitHub", "VS Code", "Postman",
      "Cloudinary", "Multer", "Supabase",
      "Vercel", "Streamlit", "TypeScript (Learning)",
    ],
  },
];

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="section-pad"
      style={{ position: "relative", overflow: "hidden" }}
    >
      {/* Ambient blobs */}
      <div
        className="blob blob-cyan"
        style={{ width: "400px", height: "400px", top: "50%", left: "-150px", opacity: 0.15 }}
        aria-hidden="true"
      />
      <div
        className="blob blob-violet"
        style={{ width: "350px", height: "350px", bottom: "0", right: "-100px", opacity: 0.15 }}
        aria-hidden="true"
      />

      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Header */}
        <ScrollReveal>
          <p className="section-label">// skills</p>
        </ScrollReveal>
        <ScrollReveal delay={80}>
          <h2
            style={{
              fontSize: "clamp(2rem, 4vw, 2.75rem)",
              fontWeight: 700,
              marginBottom: "64px",
            }}
          >
            Technical{" "}
            <span className="text-gradient-violet">Arsenal</span>
          </h2>
        </ScrollReveal>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "24px",
          }}
          className="skills-grid"
        >
          {skillCategories.map((cat, i) => (
            <ScrollReveal key={cat.title} delay={i * 120}>
              <div
                className="glass-card skill-card"
                style={{
                  padding: "32px",
                  height: "100%",
                  borderColor: `rgba(${
                    cat.color === "var(--violet)"
                      ? "123,47,255"
                      : cat.color === "var(--cyan)"
                      ? "0,245,255"
                      : "168,85,247"
                  },0.15)`,
                }}
              >
                {/* Card header */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    marginBottom: "24px",
                  }}
                >
                  <div
                    style={{
                      width: "44px",
                      height: "44px",
                      borderRadius: "12px",
                      background: `${
                        cat.color === "var(--violet)"
                          ? "rgba(123,47,255,0.15)"
                          : cat.color === "var(--cyan)"
                          ? "rgba(0,245,255,0.1)"
                          : "rgba(168,85,247,0.15)"
                      }`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "1.4rem",
                      border: `1px solid ${
                        cat.color === "var(--violet)"
                          ? "rgba(123,47,255,0.3)"
                          : cat.color === "var(--cyan)"
                          ? "rgba(0,245,255,0.25)"
                          : "rgba(168,85,247,0.3)"
                      }`,
                    }}
                  >
                    {cat.icon}
                  </div>
                  <h3
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontWeight: 700,
                      fontSize: "1.1rem",
                      color: "var(--text)",
                    }}
                  >
                    {cat.title}
                  </h3>
                </div>

                {/* Skill pills */}
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "8px",
                  }}
                >
                  {cat.skills.map((skill) => (
                    <span key={skill} className="skill-pill">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .skills-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @media (min-width: 640px) and (max-width: 900px) {
          .skills-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
}
