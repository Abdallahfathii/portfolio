import { useState } from "react";
import { PROJECTS } from "../data/projects";
import proImg from "../assets/pro.jpg";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const openDetail = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = "hidden";
  };

  const closeDetail = () => {
    setSelectedProject(null);
    document.body.style.overflow = "";
  };

  return (
    <>
      <section id="projects">
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div className="section-label rv">
            <span>Projects</span>
          </div>
          <h2 className="section-title rv d1">
            Selected <em>Work</em>
          </h2>
          <div className="projects-grid">
            {PROJECTS.map((project, i) => (
              <div
                key={project.id}
                className={`proj-card rv d${(i % 3) + 1}`}
                onClick={() => openDetail(project)}
                style={{ "--pc": project.color }}
              >
                <div className="proj-top-bar" style={{ background: project.color }} />
                <div className="proj-icon">{project.icon}</div>
                <div
                  className="proj-cat"
                  style={{ background: `${project.color}22`, color: project.color }}
                >
                  {project.cat}
                </div>
                <div className="proj-title">{project.title}</div>
                <div className="proj-desc">{project.desc.substring(0, 110)}...</div>
                <div className="tech-tags">
                  {project.tech.map((tech) => (
                    <span key={tech} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="proj-links" style={{ borderTop: "1px solid var(--border)" }}>
                  <span
                    className="proj-link"
                    style={{ color: project.color, fontSize: ".82rem", fontWeight: 500 }}
                  >
                    View Details <span className="proj-arrow">→</span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedProject && (
        <div id="proj-detail" className="open">
          <nav className="detail-nav">
            <div className="detail-nav-logo">
              <img src={proImg} alt="Logo" className="detail-nav-logo-img" />
            </div>
            <div style={{ fontSize: ".85rem", fontWeight: 600, color: "var(--text)", fontFamily: "'DM Sans',sans-serif" }}>
              {selectedProject.title}
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: ".75rem" }}>
              <button className="back-btn" onClick={closeDetail}>
                ← Back
              </button>
            </div>
          </nav>
          <div className="detail-body">
            <div className="detail-icon">{selectedProject.icon}</div>
            <div
              className="detail-cat"
              style={{
                background: `${selectedProject.color}22`,
                color: selectedProject.color,
              }}
            >
              {selectedProject.cat}
            </div>
            <h1 className="detail-title">{selectedProject.title}</h1>
            <p className="detail-desc">{selectedProject.desc}</p>
            <div className="detail-btns">
              <a
                href={selectedProject.demo}
                className="btn-gold"
                style={{
                  display: "inline-block",
                  padding: ".85rem 2rem",
                  borderRadius: 8,
                  fontSize: ".88rem",
                  fontWeight: 700,
                  background: selectedProject.color,
                  color: "#080A10",
                }}
              >
                Live Demo →
              </a>
              <a
                href={selectedProject.github}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                  padding: ".85rem 2rem",
                  border: "1px solid var(--border)",
                  borderRadius: 8,
                  fontSize: ".88rem",
                  fontWeight: 500,
                }}
              >
                GitHub ↗
              </a>
            </div>
            <div className="detail-section">
              <h3>Tech Stack</h3>
              <div className="detail-tags">
                {selectedProject.tech.map((tech) => (
                  <span key={tech} className="detail-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="detail-section">
              <h3>Key Features</h3>
              <div className="feature-list">
                {selectedProject.features.map((feature, idx) => (
                  <div key={idx} className="feature-item">
                    <span className="feature-check" style={{ color: selectedProject.color }}>
                      ✓
                    </span>
                    <span style={{ color: "var(--muted)" }}>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
